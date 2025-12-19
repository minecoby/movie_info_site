interface FilterSectionProps {
  genres: string[];
  countries: string[];
  selectedGenre: string;
  selectedCountry: string;
  genreCounts: Record<string, number>;
  countryCounts: Record<string, number>;
  onGenreChange: (genre: string) => void;
  onCountryChange: (country: string) => void;
  onReset: () => void;
  showReset: boolean;
}

export default function FilterSection({
  genres,
  countries,
  selectedGenre,
  selectedCountry,
  genreCounts,
  countryCounts,
  onGenreChange,
  onCountryChange,
  onReset,
  showReset,
}: FilterSectionProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      {/* 장르 필터 */}
      <div className="flex-1 min-w-[200px]">
        <label className="block text-gray-400 text-sm mb-2">장르</label>
        <select
          value={selectedGenre}
          onChange={(e) => onGenreChange(e.target.value)}
          className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-red-500/50 transition-colors cursor-pointer"
        >
          <option value="">전체 장르</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>
              {genre} ({genreCounts[genre]})
            </option>
          ))}
        </select>
      </div>

      {/* 국가 필터 */}
      <div className="flex-1 min-w-[200px]">
        <label className="block text-gray-400 text-sm mb-2">국가</label>
        <select
          value={selectedCountry}
          onChange={(e) => onCountryChange(e.target.value)}
          className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-red-500/50 transition-colors cursor-pointer"
        >
          <option value="">전체 국가</option>
          {countries.map(country => (
            <option key={country} value={country}>
              {country} ({countryCounts[country]})
            </option>
          ))}
        </select>
      </div>

      {showReset && (
        <div className="flex-shrink-0 self-end">
          <button
            onClick={onReset}
            className="px-6 py-3 bg-zinc-800 border border-white/10 text-gray-300 rounded-xl hover:border-red-500/50 hover:text-white transition-all duration-300"
          >
            초기화
          </button>
        </div>
      )}
    </div>
  );
}
