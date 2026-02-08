export default function Loading() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header Skeleton */}
          <div className="h-12 bg-gray-800 rounded w-1/4 mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-800 rounded w-2/3 mb-12 animate-pulse"></div>

          {/* Blog Post Skeletons */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-900 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-4 bg-gray-800 rounded w-24 animate-pulse"></div>
                <div className="h-4 bg-gray-800 rounded w-4 animate-pulse"></div>
                <div className="h-4 bg-gray-800 rounded w-16 animate-pulse"></div>
              </div>
              <div className="h-8 bg-gray-800 rounded w-3/4 mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-800 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-800 rounded w-5/6 mb-4 animate-pulse"></div>
              <div className="flex gap-2">
                <div className="h-6 bg-gray-800 rounded w-16 animate-pulse"></div>
                <div className="h-6 bg-gray-800 rounded w-20 animate-pulse"></div>
                <div className="h-6 bg-gray-800 rounded w-16 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
