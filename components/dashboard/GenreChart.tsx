'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface GenreChartProps {
  genreCounts: Record<string, number>;
}

export default function GenreChart({ genreCounts }: GenreChartProps) {
  const genreData = Object.entries(genreCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([name, value]) => ({ name, value }));

  return (
    <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl">
      <h2 className="text-2xl font-bold text-white mb-6">장르별 영화 수 (Top 10)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={genreData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="name" stroke="#999" />
          <YAxis stroke="#999" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#18181b',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
            }}
            labelStyle={{ color: '#fff' }}
            itemStyle={{ color: '#fff' }}
          />
          <Legend />
          <Bar dataKey="value" name="영화 수" fill="#ef4444" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
