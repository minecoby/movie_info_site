'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getAllMovies, getMovieStats } from '@/lib/movieData';
import SearchBar from '@/components/search/SearchBar';
import FilterSection from '@/components/search/FilterSection';
import ActiveFilters from '@/components/search/ActiveFilters';
import MovieCard from '@/components/search/MovieCard';
import Pagination from '@/components/search/Pagination';

const ITEMS_PER_PAGE = 21;

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const queryFromUrl = searchParams.get('q') || '';
  const genreFromUrl = searchParams.get('genre') || '';
  const countryFromUrl = searchParams.get('country') || '';
  const pageFromUrl = parseInt(searchParams.get('page') || '1', 10);

  const [searchQuery, setSearchQuery] = useState(queryFromUrl);
  const [selectedGenre, setSelectedGenre] = useState(genreFromUrl);
  const [selectedCountry, setSelectedCountry] = useState(countryFromUrl);
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  // 전체 영화 데이터 및 통계
  const allMovies = getAllMovies();
  const stats = getMovieStats();

  // 장르 및 국가 목록
  const genres = useMemo(() => {
    return Object.keys(stats.genreCounts).sort((a, b) => {
      if (a === '기타') return 1;
      if (b === '기타') return -1;
      return stats.genreCounts[b] - stats.genreCounts[a];
    });
  }, [stats.genreCounts]);

  const countries = useMemo(() => {
    return Object.keys(stats.countryCounts).sort((a, b) => {
      if (a === '기타') return 1;
      if (b === '기타') return -1;
      return stats.countryCounts[b] - stats.countryCounts[a];
    });
  }, [stats.countryCounts]);

  // 필터링된 영화 목록
  const filteredMovies = useMemo(() => {
    return allMovies.filter(movie => {
      if (queryFromUrl) {
        const query = queryFromUrl.toLowerCase();
        const matchesSearch =
          movie.movieNm.toLowerCase().includes(query) ||
          movie.movieNmEn?.toLowerCase().includes(query) ||
          movie.repGenreNm?.toLowerCase().includes(query) ||
          movie.directors?.some(d => d.peopleNm.toLowerCase().includes(query));

        if (!matchesSearch) return false;
      }

      // 장르 필터
      if (genreFromUrl) {
        const movieGenre = movie.repGenreNm || '기타';
        if (movieGenre !== genreFromUrl) return false;
      }

      // 국가 필터
      if (countryFromUrl) {
        const movieCountry = movie.repNationNm || '기타';
        if (movieCountry !== countryFromUrl) return false;
      }

      return true;
    });
  }, [allMovies, queryFromUrl, genreFromUrl, countryFromUrl]);

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredMovies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentMovies = filteredMovies.slice(startIndex, endIndex);

  const updateUrl = (query: string, genre: string, country: string, page: number) => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (genre) params.set('genre', genre);
    if (country) params.set('country', country);
    if (page > 1) params.set('page', page.toString());

    const newUrl = params.toString() ? `/search?${params.toString()}` : '/search';
    router.push(newUrl);
  };

  // 검색 실행
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    updateUrl(searchQuery, selectedGenre, selectedCountry, 1);
  };

  // 장르 변경
  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
    updateUrl(queryFromUrl, genre, countryFromUrl, 1);
  };

  // 국가 변경
  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setCurrentPage(1);
    updateUrl(queryFromUrl, genreFromUrl, country, 1);
  };

  // 필터 초기화
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedGenre('');
    setSelectedCountry('');
    setCurrentPage(1);
    router.push('/search');
  };

  // 페이지 변경
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateUrl(queryFromUrl, genreFromUrl, countryFromUrl, page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setSearchQuery(queryFromUrl);
    setSelectedGenre(genreFromUrl);
    setSelectedCountry(countryFromUrl);
    setCurrentPage(pageFromUrl);
  }, [queryFromUrl, genreFromUrl, countryFromUrl, pageFromUrl]);

  const hasActiveFilters = !!(queryFromUrl || genreFromUrl || countryFromUrl);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-12 text-white bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
        영화 검색
      </h1>

      {/* 검색 및 필터 부분 */}
      <div className="mb-12 space-y-6">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onSubmit={handleSearch}
        />

        <FilterSection
          genres={genres}
          countries={countries}
          selectedGenre={selectedGenre}
          selectedCountry={selectedCountry}
          genreCounts={stats.genreCounts}
          countryCounts={stats.countryCounts}
          onGenreChange={handleGenreChange}
          onCountryChange={handleCountryChange}
          onReset={handleResetFilters}
          showReset={hasActiveFilters}
        />

        <ActiveFilters
          searchQuery={queryFromUrl}
          genre={genreFromUrl}
          country={countryFromUrl}
          totalResults={filteredMovies.length}
          totalMovies={allMovies.length}
          hasFilters={hasActiveFilters}
        />
      </div>

      {/* 영화 리스트 */}
      {currentMovies.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentMovies.map(movie => (
              <MovieCard key={movie.movieCd} movie={movie} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">
            검색 결과가 없습니다. 다른 조건으로 검색해보세요.
          </p>
        </div>
      )}
    </div>
  );
}
