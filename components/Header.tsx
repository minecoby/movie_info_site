import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-red-500 transition-colors">
            MOVIE<span className="text-red-600">INFO</span>
          </Link>

          <ul className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <li>
              <Link
                href="/"
                className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors font-medium"
              >
                홈
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors font-medium"
              >
                대시보드
              </Link>
            </li>
            <li>
              <Link
                href="/search"
                className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors font-medium"
              >
                검색
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors font-medium"
              >
                소개
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
