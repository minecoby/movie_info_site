export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 max-w-4xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-white bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">프로젝트 소개</h1>

      <div className="space-y-6 sm:space-y-8">
        {/* 프로젝트 개요 */}
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 sm:p-8 rounded-xl border border-white/10">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">프로젝트 개요</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            이 프로젝트는 2023-2025년 한국 영화 데이터를 시각화하고 분석하는 사이트입니다.
            다양한 차트와 검색 기능을 통해 영화 데이터를 쉽게 찾아 볼 수 있습니다.
          </p>
          <p className="text-gray-300 leading-relaxed">
            뭐쓰지 여기다가
          </p>
        </section>

        {/* 기술 스택 */}
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 sm:p-8 rounded-xl border border-white/10">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">기술 스택</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-black/30 p-5 sm:p-6 rounded-lg border border-white/5">
              <h3 className="font-semibold text-red-500 mb-3 text-base sm:text-lg">Frontend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Next.js 16.0.5</li>
                <li>• React 19.2.0</li>
                <li>• TypeScript 5</li>
                <li>• Tailwind CSS 4</li>
              </ul>
            </div>
            <div className="bg-black/30 p-5 sm:p-6 rounded-lg border border-white/5">
              <h3 className="font-semibold text-red-500 mb-3 text-base sm:text-lg">Features</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• App Router</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 데이터 출처 */}
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 sm:p-8 rounded-xl border border-white/10">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">데이터 출처</h2>
          <p className="text-gray-300 leading-relaxed mb-2">
            <span className="font-semibold text-red-500">영화진흥위원회 (KOBIS)</span>
          </p>
          <p className="text-gray-300 leading-relaxed">
            2023년 1월 ~ 2025년 12월까지의 한국 영화 개봉 데이터를 포함하고 있습니다.
            영화 제목, 장르, 제작 국가, 개봉일, 감독 등의 정보를 제공합니다.
          </p>
        </section>

        {/* 주요 기능 */}
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 sm:p-8 rounded-xl border border-white/10">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">주요 기능</h2>
          <div className="space-y-4">
            <div className="bg-black/30 p-5 rounded-lg border border-white/5">
              <h3 className="font-semibold text-red-500 mb-2">대시보드</h3>
              <p className="text-gray-300">장르별, 국가별, 연도별 영화 데이터를 차트로 시각화</p>
            </div>
            <div className="bg-black/30 p-5 rounded-lg border border-white/5">
              <h3 className="font-semibold text-red-500 mb-2">검색</h3>
              <p className="text-gray-300">영화 제목으로 검색하고 상세 정보 확인 (단, 제가 직접 본 영화만 제공)</p>
            </div>
            <div className="bg-black/30 p-5 rounded-lg border border-white/5">
              <h3 className="font-semibold text-red-500 mb-2">반응형 디자인</h3>
              <p className="text-gray-300">모바일, 태블릿, 데스크톱 모든 기기에서 볼 수있게 만들기</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
