import { BookOpen, Globe2, Megaphone, Search, Smartphone, UsersRound } from "lucide-react";
import { historyMilestones, historySources } from "@/data/history";

const symbols = [Search, BookOpen, BookOpen, Megaphone, Globe2, Globe2, Smartphone];

export function HistoryTimeline() {
  return (
    <ol className="history-timeline">
      {historyMilestones.map((milestone, index) => {
        const Icon = symbols[index] ?? UsersRound;
        const sources = [milestone.sourceId, ...(milestone.additionalSourceIds ?? [])].map(
          (sourceId) => {
            const source = historySources.find(({ id }) => id === sourceId);
            if (!source) throw new Error(`Missing history source: ${sourceId}`);
            return source;
          },
        );

        return (
          <li className="history-milestone" key={milestone.year}>
            <div className="history-milestone-mark" aria-hidden="true">
              <Icon size={20} strokeWidth={1.7} />
            </div>
            <div className="history-milestone-body">
              <p className="history-year">{milestone.year}</p>
              <h3>{milestone.title}</h3>
              <p>{milestone.summary}</p>
              <details className="history-detail">
                <summary>Lexo më shumë</summary>
                <div>
                  <p>{milestone.detail}</p>
                  {sources.map((source, sourceIndex) => (
                    <span key={source.id}>
                      {sourceIndex > 0 && " · "}
                      <a href={source.url} target="_blank" rel="noreferrer">
                        Burimi: {source.name}
                      </a>
                    </span>
                  ))}
                </div>
              </details>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
