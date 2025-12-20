import { FormEvent } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: FormEvent) => void;
}

export default function SearchBar({ value, onChange, onSubmit }: SearchBarProps) {
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="영화 제목, 감독, 장르로 검색하세요..."
          className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-zinc-900 border border-white/10 rounded-xl text-sm sm:text-base text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 transition-colors"
        />
        <button
          type="submit"
          className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-500/20 whitespace-nowrap"
        >
          검색
        </button>
      </div>
    </form>
  );
}
