import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="max-w-md w-full bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-xl border border-white/10 text-center">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-white mb-2">페이지를 찾을 수 없습니다</h2>
          <p className="text-gray-400">
            요청하신 페이지가 존재하지 않거나 이동되었습니다.
          </p>
        </div>
        <Link
          href="/"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 font-semibold"
        >
          홈으로 이동
        </Link>
      </div>
    </div>
  );
}
