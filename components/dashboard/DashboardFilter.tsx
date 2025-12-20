interface DashboardFilterProps {
  yearFilter: string;
  onYearChange: (year: string) => void;
}

export default function DashboardFilter({
  yearFilter,
  onYearChange,
}: DashboardFilterProps) {
  const years = ['all', '2023', '2024', '2025'];

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-xl border border-white/10 mb-8">
      <h2 className="text-xl font-bold text-white mb-4">필터</h2>

      <div className="flex items-end gap-4">
        {/* 연도 필터 */}
        <div className="flex-1 max-w-xs">
          <label className="block text-gray-400 text-sm font-medium mb-2">
            개봉 연도
          </label>
          <select
            value={yearFilter}
            onChange={(e) => onYearChange(e.target.value)}
            className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-red-500/50 transition-colors cursor-pointer"
          >
            <option value="all">전체</option>
            {years.slice(1).map(year => (
              <option key={year} value={year}>{year}년</option>
            ))}
          </select>
        </div>

        {/* 초기화 버튼 */}
        {yearFilter !== 'all' && (
          <button
            onClick={() => onYearChange('all')}
            className="px-6 py-3 bg-zinc-800 border border-white/10 text-gray-300 rounded-lg hover:border-red-500/50 hover:text-white transition-all duration-300"
          >
            초기화
          </button>
        )}
      </div>

      {/* 활성 필터 표시 */}
      {yearFilter !== 'all' && (
        <div className="mt-4 flex items-center gap-2">
          <span className="text-gray-400 text-sm">활성 필터:</span>
          <span className="px-3 py-1 bg-red-600/20 border border-red-500/50 rounded-full text-red-400 text-sm">
            {yearFilter}년
          </span>
        </div>
      )}
    </div>
  );
}
