import { Movie, MovieData } from '@/types/movie';
import movieData2023_1H from '@/data/movie_list_2023_1H.json';
import movieData2023_2H from '@/data/movie_list_2023_2H.json';
import movieData2024_1H from '@/data/movie_list_2024_1H.json';
import movieData2024_2H from '@/data/movie_list_2024_2H.json';
import movieData2025_1H from '@/data/movie_list_2025_1H.json';
import movieData2025_2H from '@/data/movie_list_2025_2H.json';

function extractMovieList(data: MovieData): Movie[] {
  if (data.boxOfficeResult) {
    return data.boxOfficeResult.movieList;
  } else if (data.movieListResult) {
    return data.movieListResult.movieList;
  }
  return [];
}

export function getAllMovies(): Movie[] {
  const data2023_1H = movieData2023_1H as MovieData;
  const data2023_2H = movieData2023_2H as MovieData;
  const data2024_1H = movieData2024_1H as MovieData;
  const data2024_2H = movieData2024_2H as MovieData;
  const data2025_1H = movieData2025_1H as MovieData;
  const data2025_2H = movieData2025_2H as MovieData;

  return [
    ...extractMovieList(data2023_1H),
    ...extractMovieList(data2023_2H),
    ...extractMovieList(data2024_1H),
    ...extractMovieList(data2024_2H),
    ...extractMovieList(data2025_1H),
    ...extractMovieList(data2025_2H),
  ];
}

export function getMovieStats() {
  const movies = getAllMovies();

  // 총 영화 수
  const totalMovies = movies.length;

  // 장르별 집계
  const genreCounts: Record<string, number> = {};
  movies.forEach(movie => {
    const genre = movie.repGenreNm || '기타';
    genreCounts[genre] = (genreCounts[genre] || 0) + 1;
  });

  // 국가별 집계
  const countryCounts: Record<string, number> = {};
  movies.forEach(movie => {
    const country = movie.repNationNm || '기타';
    countryCounts[country] = (countryCounts[country] || 0) + 1;
  });

  // 제작연도별 집계
  const yearCounts: Record<string, number> = {};
  movies.forEach(movie => {
    const year = movie.prdtYear || '미상';
    yearCounts[year] = (yearCounts[year] || 0) + 1;
  });

  // 월별 개봉 집계
  const monthCounts: Record<string, number> = {};
  movies.forEach(movie => {
    if (movie.openDt && movie.openDt.length >= 6) {
      const yearMonth = movie.openDt.substring(0, 6); 
      monthCounts[yearMonth] = (monthCounts[yearMonth] || 0) + 1;
    }
  });

  return {
    totalMovies,
    genreCounts,
    countryCounts,
    yearCounts,
    monthCounts,
  };
}
