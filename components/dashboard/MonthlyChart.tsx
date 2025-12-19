'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface MonthlyChartProps {
  monthCounts: Record<string, number>;
}

export default function MonthlyChart({ monthCounts }: MonthlyChartProps) {
  const monthData = Object.entries(monthCounts)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, count]) => ({
      month: `${month.substring(0, 4)}-${month.substring(4, 6)}`,
      count,
    }));

  return (
    <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl">
      <h2 className="text-2xl font-bold text-white mb-6">월별 개봉 추이 (2023-2025)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={monthData}>
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis
            dataKey="month"
            stroke="#999"
            angle={-45}
            textAnchor="end"
            height={80}
            interval={2}
          />
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
          <Area
            type="monotone"
            dataKey="count"
            name="개봉 영화 수"
            stroke="#8b5cf6"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorCount)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
