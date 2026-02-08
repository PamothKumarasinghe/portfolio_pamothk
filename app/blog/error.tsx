'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Navigation } from '../components/Navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Blog error:', error);
  }, [error]);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-4">Oops!</h1>
            <h2 className="text-2xl text-gray-400 mb-4">Something went wrong loading the blog</h2>
            <p className="text-gray-500">
              {error.message || 'An unexpected error occurred'}
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={reset}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors inline-block"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
