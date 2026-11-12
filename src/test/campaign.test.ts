import { describe, expect, it } from "vitest";
import { stories } from "@/data/stories";
import {
  emptyProgress,
  parseProgress,
  PROGRESS_KEY,
  readProgress,
  saveProgress,
  resetProgress,
} from "@/lib/progress";
import { ACTIVITY_DATE, INTERNATIONAL_DATE, helpEligible, situations } from "@/data/education";
import { historyMilestones, historySources } from "@/data/history";
describe("Story graphs", () => {
  it("contains exactly three stories", () => expect(stories).toHaveLength(3));
  for (const story of stories) {
    it(`${story.id}: all six distinct endings are reachable after two choices`, () => {
      const visited = new Set<string>();
      const endings: string[] = [];
      function walk(id: string, depth: number, ancestors: string[]) {
        expect(ancestors).not.toContain(id);
        const node = story.nodes[id];
        expect(node).toBeDefined();
        if (!node) throw new Error(`Missing node ${id}`);
        visited.add(id);
        if (node.ending) {
          expect(depth).toBe(2);
          expect(node.choices).toBeUndefined();
          expect(node.ending.saferNextSteps.length).toBeGreaterThanOrEqual(2);
          endings.push(id);
          return;
        }
        expect(node.choices?.length).toBeGreaterThanOrEqual(2);
        for (const c of node.choices ?? []) walk(c.nextNodeId, depth + 1, [...ancestors, id]);
      }
      walk(story.startNodeId, 0, []);
      expect(new Set(endings).size).toBe(6);
      expect(visited.size).toBe(Object.keys(story.nodes).length);
    });
  }
  const branches = [
    ["c1_start", "c1_shared", "c1_silent", "c1_support"],
    ["s2_start", "s2_exclude", "s2_silent", "s2_include"],
    ["s3_start", "s3_laugh", "s3_boundary", "s3_private"],
  ] as const;
  branches.forEach((branch, i) =>
    it(`story ${i + 1} follows prescribed first choices`, () =>
      expect(stories[i]?.nodes[branch[0]]?.choices?.map((c) => c.nextNodeId)).toEqual(
        branch.slice(1),
      )),
  );
});
describe("Privacy and persistence", () => {
  it("uses only the campaign progress key", () =>
    expect(PROGRESS_KEY).toBe("mosekalo:progress:v1"));
  it("recovers from corrupt data", () => expect(parseProgress("{broken")).toEqual(emptyProgress()));
  it("rejects unsupported versions", () =>
    expect(parseProgress('{"version":2,"completed":[],"paths":{}}')).toEqual(emptyProgress()));
  it("rejects impossible story paths", () =>
    expect(
      parseProgress(
        JSON.stringify({
          version: 1,
          completed: [],
          paths: { screenshot: ["c1_start", "c1_end_support"] },
        }),
      ).paths,
    ).toEqual({}));
  it("restores valid choice paths", () =>
    expect(
      parseProgress(
        JSON.stringify({
          version: 1,
          completed: ["screenshot"],
          paths: { screenshot: ["c1_start", "c1_support", "c1_end_support"] },
        }),
      ).paths["screenshot"],
    ).toEqual(["c1_start", "c1_support", "c1_end_support"]));
  it("reset preserves unrelated storage", () => {
    localStorage.setItem("unrelated", "keep");
    saveProgress({ version: 1, completed: ["screenshot"], paths: {} });
    resetProgress();
    expect(localStorage.getItem("unrelated")).toBe("keep");
    expect(readProgress().completed).toEqual([]);
  });
});
describe("Educational rules", () => {
  it("school activity is 18 November 2026", () => expect(ACTIVITY_DATE).toBe("2026-11-18"));
  it("international day is 5 November 2026", () => expect(INTERNATIONAL_DATE).toBe("2026-11-05"));
  it("historical timeline follows the verified milestones without invented dates", () =>
    expect(historyMilestones.map(({ year }) => year)).toEqual([
      "1970",
      "1973",
      "1978",
      "1983–1984",
      "2019",
      "2020",
      "SOT",
    ]));
  it("merges the Norway campaign into one correctly sourced milestone", () => {
    const norwayMilestones = historyMilestones.filter(({ year }) => year.startsWith("1983"));
    expect(norwayMilestones).toHaveLength(1);
    expect(norwayMilestones[0]).toMatchObject({
      year: "1983–1984",
      title: "Norvegjia nis fushatën e parë kombëtare.",
      sourceId: "norway",
      additionalSourceIds: ["olweus-history"],
    });
    expect(norwayMilestones[0]?.summary).toBe(
      "Gjatë vitit shkollor 1983–1984 u zhvillua fushata e parë kombëtare kundër bullizmit në Norvegji. Shkollave iu dërgua broshura informuese Mobbing – bakgrunn og tiltak, e përgatitur nga Dan Olweus dhe Erling Roland.",
    );
  });
  it("cites the historical Olweus reference for the 1973 milestone", () => {
    expect(historyMilestones.find(({ year }) => year === "1973")?.sourceId).toBe("olweus-history");
    expect(historySources.find(({ id }) => id === "olweus-history")?.url).toBe(
      "https://clemsonolweus.org/documents/OBPP%20Funding%20Toolkit.pdf",
    );
  });
  it("provides sources for the timeline milestones", () =>
    expect(
      historyMilestones.every(({ sourceId }) => historySources.some(({ id }) => id === sourceId)),
    ).toBe(true));
  it("child helpline guidance is restricted to under 18", () => {
    expect(helpEligible(17)).toBe(true);
    expect(helpEligible(18)).toBe(false);
  });
  it("a one-day disagreement is ordinary conflict", () => expect(situations[0]?.correct).toBe(0));
  it("repeated group exclusion may be social bullying", () =>
    expect(situations[1]?.correct).toBe(1));
  it("a single private photo publication still requires action", () =>
    expect(situations[2]?.correct).toBe(1));
});
