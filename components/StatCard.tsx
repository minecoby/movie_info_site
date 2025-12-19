interface StatCardProps {
  title: string;
  value: number | string;
  className?: string;
}

export default function StatCard({ title, value, className = '' }: StatCardProps) {
  return (
    <div className={`bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-xl border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 group ${className}`}>
      <h3 className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wide">{title}</h3>
      <p className="text-5xl font-bold text-white group-hover:text-red-500 transition-colors">{value}</p>
    </div>
  );
}
