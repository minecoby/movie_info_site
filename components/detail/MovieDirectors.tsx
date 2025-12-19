import type { Director } from '@/types/movie';

interface MovieDirectorsProps {
  directors: Director[];
}

export default function MovieDirectors({ directors }: MovieDirectorsProps) {
  if (!directors || directors.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-xl border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">감독</h2>
      <div className="flex flex-wrap gap-3">
        {directors.map((director, index) => (
          <div
            key={index}
            className="bg-red-600/20 border border-red-500/30 px-4 py-2 rounded-lg"
          >
            <p className="text-red-400 font-medium">{director.peopleNm}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
