interface ActiveFiltersProps {
  searchQuery: string;
  genre: string;
  country: string;
  totalResults: number;
  totalMovies: number;
  hasFilters: boolean;
}

export default function ActiveFilters({
  searchQuery,
  genre,
  country,
  totalResults,
  totalMovies,
  hasFilters,
}: ActiveFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-between">
      <div>
        <p className="text-gray-400 text-lg">
          {hasFilters ? (
            <>
              총 <span className="text-red-500 font-bold">{totalResults}</span>편의 영화
              {searchQuery && (
                <span className="ml-2">
                  (검색: "<span className="text-white font-semibold">{searchQuery}</span>")
                </span>
              )}
            </>
          ) : (
            <>
              전체 <span className="text-red-500 font-bold">{totalMovies}</span>편의 영화
            </>
          )}
        </p>
      </div>

      {hasFilters && (
        <div className="flex flex-wrap gap-2">
          {genre && (
            <span className="px-3 py-1 bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg text-sm">
              장르: {genre}
            </span>
          )}
          {country && (
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg text-sm">
              국가: {country}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
