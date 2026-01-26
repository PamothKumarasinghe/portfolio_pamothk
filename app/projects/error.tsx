'use client';

import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Projects page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <AlertCircle size={64} className="text-red-500 mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-400 mb-8 max-w-md">
            We encountered an error while loading the projects. Please try again.
          </p>
          <button
            onClick={reset}
            className="px-6 py-3 border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all text-white"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
