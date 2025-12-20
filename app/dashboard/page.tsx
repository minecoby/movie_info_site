'use client';

import { useState, useMemo } from 'react';
import { getFilteredMovieStats } from '@/lib/movieData';
import GenreChart from '@/components/dashboard/GenreChart';
import CountryChart from '@/components/dashboard/CountryChart';
import MonthlyChart from '@/components/dashboard/MonthlyChart';
import DashboardFilter from '@/components/dashboard/DashboardFilter';

export default function DashboardPage() {
  const [yearFilter, setYearFilter] = useState('all');

  // 필터링된 통계 
  const stats = useMemo(() => {
    return getFilteredMovieStats(yearFilter);
  }, [yearFilter]);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
        영화 데이터 대시보드
      </h1>

      {/* 필터 */}
      <DashboardFilter
        yearFilter={yearFilter}
        onYearChange={setYearFilter}
      />

      {/* 통계 요약 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-gradient-to-br from-red-600 to-red-500 p-6 rounded-xl shadow-lg">
          <p className="text-white/80 text-sm font-medium mb-2">총 영화 수</p>
          <p className="text-white text-4xl font-bold">{stats.totalMovies.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-orange-600 to-orange-500 p-6 rounded-xl shadow-lg">
          <p className="text-white/80 text-sm font-medium mb-2">장르 종류</p>
          <p className="text-white text-4xl font-bold">{Object.keys(stats.genreCounts).length}</p>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 rounded-xl shadow-lg">
          <p className="text-white/80 text-sm font-medium mb-2">국가 수</p>
          <p className="text-white text-4xl font-bold">{Object.keys(stats.countryCounts).length}</p>
        </div>
        <div className="bg-gradient-to-br from-purple-600 to-purple-500 p-6 rounded-xl shadow-lg">
          <p className="text-white/80 text-sm font-medium mb-2">기간</p>
          <p className="text-white text-4xl font-bold">
            {yearFilter === 'all' ? '2023-2025' : `${yearFilter}년`}
          </p>
        </div>
      </div>

      {/* 차트 */}
      <div className="space-y-8">
        <GenreChart genreCounts={stats.genreCounts} />
        <CountryChart countryCounts={stats.countryCounts} />
        <MonthlyChart monthCounts={stats.monthCounts} />
      </div>
    </div>
  );
}
