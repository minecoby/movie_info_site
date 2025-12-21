import Link from "next/link";
import { getMovieStats } from "@/lib/movieData";
import StatCard from "@/components/StatCard";
import TopList from "@/components/TopList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "홈 - 영화 정보 대시보드",
  description: "2023-2025년 한국 영화 데이터를 시각화하고 분석하는 대시보드입니다. 장르별, 국가별 영화 통계를 확인하고 다양한 영화 정보를 검색해보세요.",
  keywords: ["영화", "영화 정보", "영화 데이터", "영화 통계", "영화 검색", "KOBIS"],
  openGraph: {
    title: "영화 정보 대시보드",
    description: "2023-2025년 한국 영화 데이터 시각화 및 분석",
    type: "website",
  },
};

export default function Home() {
  const stats = getMovieStats();

  // 상위 5개 장르
  const topGenres = Object.entries(stats.genreCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  // 상위 3개 국가
  const topCountries = Object.entries(stats.countryCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-red-500 to-red-600 bg-clip-text text-transparent">
          영화 정보 대시보드
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-10 max-w-2xl mx-auto px-4">
          2023-2025년 한국 영화 데이터 시각화 및 분석
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Link
            href="/dashboard"
            className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-red-700 transition-all duration-300 font-semibold shadow-lg shadow-red-600/50 hover:shadow-red-600/80 hover:scale-105"
          >
            대시보드 보기
          </Link>
          <Link
            href="/search"
            className="bg-zinc-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-zinc-700 transition-all duration-300 font-semibold border border-white/10 hover:border-white/30 hover:scale-105"
          >
            영화 검색
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <StatCard title="총 영화 수" value={stats.totalMovies} />
        <StatCard title="장르 수" value={Object.keys(stats.genreCounts).length} />
        <StatCard title="국가 수" value={Object.keys(stats.countryCounts).length} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TopList title="인기 장르 Top 5" items={topGenres} />
        <TopList title="제작 국가 Top 3" items={topCountries} />
      </div>
    </div>
  );
}
