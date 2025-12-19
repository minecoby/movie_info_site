interface MovieAdditionalInfoProps {
  genreAlt?: string;
  nationAlt?: string;
}

export default function MovieAdditionalInfo({ genreAlt, nationAlt }: MovieAdditionalInfoProps) {
  if (!genreAlt && !nationAlt) return null;

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-xl border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">추가 정보</h2>
      <div className="space-y-4">
        {genreAlt && (
          <div>
            <p className="text-gray-500 text-sm mb-2">전체 장르</p>
            <p className="text-gray-300">{genreAlt}</p>
          </div>
        )}
        {nationAlt && (
          <div>
            <p className="text-gray-500 text-sm mb-2">전체 제작 국가</p>
            <p className="text-gray-300">{nationAlt}</p>
          </div>
        )}
      </div>
    </div>
  );
}
