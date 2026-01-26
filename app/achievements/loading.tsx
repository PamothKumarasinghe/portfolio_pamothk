export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 animate-pulse">
          <div className="h-10 bg-gray-800 rounded w-96 mb-4"></div>
          <div className="h-6 bg-gray-800 rounded w-full max-w-2xl"></div>
        </div>

        {/* Stats skeleton */}
        <div className="flex justify-center mb-16">
          <div className="max-w-md w-full border border-white/10 p-6 animate-pulse">
            <div className="h-12 bg-gray-800 rounded w-24 mb-2"></div>
            <div className="h-4 bg-gray-800 rounded w-32"></div>
          </div>
        </div>

        {/* Achievements grid skeleton */}
        <div className="grid md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="border border-white/10 p-6 animate-pulse">
              <div className="flex gap-4 mb-4">
                <div className="w-20 h-20 bg-gray-800 rounded"></div>
                <div className="flex-1">
                  <div className="h-6 bg-gray-800 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-800 rounded w-24"></div>
                </div>
              </div>
              <div className="h-4 bg-gray-800 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-800 rounded w-5/6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
