interface TopListProps {
  title: string;
  items: Array<[string, number]>;
  className?: string;
}

export default function TopList({ title, items, className = '' }: TopListProps) {
  return (
    <div className={`bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-xl border border-white/10 ${className}`}>
      <h2 className="text-2xl font-bold mb-6 text-white">{title}</h2>
      <div className="space-y-4">
        {items.map(([label, count], index) => (
          <div key={label} className="flex justify-between items-center p-3 rounded-lg bg-black/30 hover:bg-black/50 transition-colors border border-white/5 hover:border-red-500/30">
            <div className="flex items-center gap-3">
              <span className="text-red-500 font-bold text-lg w-6">{index + 1}</span>
              <span className="text-gray-200 font-medium">{label}</span>
            </div>
            <span className="font-bold text-red-500">{count}편</span>
          </div>
        ))}
      </div>
    </div>
  );
}
