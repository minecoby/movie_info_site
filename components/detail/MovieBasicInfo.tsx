import type { Movie } from '@/types/movie';

interface MovieBasicInfoProps {
  movie: Movie;
}

export default function MovieBasicInfo({ movie }: MovieBasicInfoProps) {
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-xl border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">기본 정보</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <InfoItem label="장르" value={movie.repGenreNm || '미상'} />
          <InfoItem label="제작 국가" value={movie.repNationNm || '미상'} />
          <InfoItem label="영화 유형" value={movie.typeNm || '미상'} />
        </div>
        <div className="space-y-4">
          <InfoItem label="개봉일" value={movie.openDt || '미상'} />
          <InfoItem label="제작연도" value={movie.prdtYear || '미상'} />
          <InfoItem label="제작 상태" value={movie.prdtStatNm || '미상'} />
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-gray-500 text-sm mb-1">{label}</p>
      <p className="text-white text-lg font-semibold">{value}</p>
    </div>
  );
}
