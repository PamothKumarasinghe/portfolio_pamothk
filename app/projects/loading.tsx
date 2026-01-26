export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 animate-pulse">
          <div className="h-10 bg-gray-800 rounded w-64 mb-4"></div>
          <div className="h-6 bg-gray-800 rounded w-full max-w-2xl"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border border-white/10 p-6 animate-pulse">
              <div className="h-4 bg-gray-800 rounded w-20 mb-3"></div>
              <div className="h-6 bg-gray-800 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-800 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-800 rounded w-5/6 mb-4"></div>
              <div className="flex gap-2 mb-4">
                <div className="h-6 bg-gray-800 rounded w-16"></div>
                <div className="h-6 bg-gray-800 rounded w-16"></div>
                <div className="h-6 bg-gray-800 rounded w-16"></div>
              </div>
              <div className="flex gap-4">
                <div className="h-4 bg-gray-800 rounded w-16"></div>
                <div className="h-4 bg-gray-800 rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
