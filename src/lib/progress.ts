import { stories } from '@/data/stories';
export const PROGRESS_KEY = 'mosekalo:progress:v1';
export type Progress = { version: 1; completed: string[]; paths: Record<string, string[]>; lastStory?: string | undefined; updatedAt?: string | undefined };
export const emptyProgress = (): Progress => ({ version: 1, completed: [], paths: {} });
export function parseProgress(raw: string | null): Progress {
  try {
    const value = JSON.parse(raw ?? 'null');
    if (!value || value.version !== 1 || !Array.isArray(value.completed) || typeof value.paths !== 'object' || !value.paths) return emptyProgress();
    const paths: Record<string, string[]> = {};
    for (const story of stories) {
      const path = value.paths[story.id];
      if (!Array.isArray(path) || path[0] !== story.startNodeId) continue;
      const valid = path.every((node: unknown, i: number) => typeof node === 'string' && story.nodes[node] && (i === 0 || story.nodes[path[i-1]]?.choices?.some(c => c.nextNodeId === node)));
      if (valid) paths[story.id] = path;
    }
    return { version: 1, completed: value.completed.filter((id: unknown) => stories.some(s => s.id === id)), paths, lastStory: stories.find(s => s.id === value.lastStory)?.id, updatedAt: typeof value.updatedAt === 'string' ? value.updatedAt : undefined };
  } catch { return emptyProgress(); }
}
export function readProgress(): Progress { try { return parseProgress(localStorage.getItem(PROGRESS_KEY)); } catch { return emptyProgress(); } }
export function saveProgress(value: Progress) { try { localStorage.setItem(PROGRESS_KEY, JSON.stringify({ ...value, updatedAt: new Date().toISOString() })); } catch { /* Play remains available without storage. */ } }
export function resetProgress() { try { localStorage.removeItem(PROGRESS_KEY); } catch { /* Storage may be unavailable. */ } }
