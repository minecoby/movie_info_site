export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-red-600/20 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-red-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-gray-400 text-lg font-medium">로딩 중...</p>
      </div>
    </div>
  );
}
