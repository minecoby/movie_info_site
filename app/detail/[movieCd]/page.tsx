import { getMovieByCode, getAllMovies } from '@/lib/movieData';
import { notFound } from 'next/navigation';
import BackButton from '@/components/detail/BackButton';
import MovieBasicInfo from '@/components/detail/MovieBasicInfo';
import MovieDirectors from '@/components/detail/MovieDirectors';
import MovieCompanies from '@/components/detail/MovieCompanies';
import MovieAdditionalInfo from '@/components/detail/MovieAdditionalInfo';

interface DetailPageProps {
  params: Promise<{
    movieCd: string;
  }>;
}

export function generateStaticParams() {
  const movies = getAllMovies();
  return movies.map((movie) => ({
    movieCd: movie.movieCd,
  }));
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { movieCd } = await params;
  const movie = getMovieByCode(movieCd);

  if (!movie) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <BackButton href="/search" label="검색으로 돌아가기" />

      {/* 영화 제목 */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
          {movie.movieNm}
        </h1>
        {movie.movieNmEn && (
          <p className="text-2xl text-gray-400">{movie.movieNmEn}</p>
        )}
      </div>

      {/* 영화 정보 섹션들 */}
      <div className="space-y-6">
        <MovieBasicInfo movie={movie} />
        <MovieDirectors directors={movie.directors} />
        <MovieCompanies companies={movie.companys} />
        <MovieAdditionalInfo genreAlt={movie.genreAlt} nationAlt={movie.nationAlt} />
      </div>
    </div>
  );
}
