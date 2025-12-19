import type { Movie } from '@/types/movie';
import Link from 'next/link';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/detail/${movie.movieCd}`}>
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-xl border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 cursor-pointer hover:scale-105">
      <h3 className="text-xl font-bold text-white mb-2">{movie.movieNm}</h3>
      {movie.movieNmEn && (
        <p className="text-gray-400 text-sm mb-3">{movie.movieNmEn}</p>
      )}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">장르</span>
          <span className="text-red-500 font-medium">{movie.repGenreNm || '미상'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">국가</span>
          <span className="text-gray-300">{movie.repNationNm || '미상'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">개봉일</span>
          <span className="text-gray-300">{movie.openDt || '미상'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">제작연도</span>
          <span className="text-gray-300">{movie.prdtYear || '미상'}</span>
        </div>
        {movie.directors && movie.directors.length > 0 && (
          <div className="flex justify-between">
            <span className="text-gray-500">감독</span>
            <span className="text-gray-300">{movie.directors[0].peopleNm}</span>
          </div>
        )}
      </div>
    </div>
    </Link>
  );
}
