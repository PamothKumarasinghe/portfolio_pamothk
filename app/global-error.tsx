"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {

  // optional: log error to a remote DB / sentry
  useEffect(() => {
    console.error("GlobalErrorBoundary:", error);
  }, [error]);

  return (
    <html>
      <body className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-6">
        <div className="max-w-md w-full text-center">
          <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>

          <p className="text-gray-400 mb-6">
            An unexpected error occurred. Don't worry — our system detected it.
          </p>

          <div className="p-4 bg-gray-900 rounded-lg shadow border border-gray-800 text-left mb-4">
            <h2 className="text-lg font-semibold mb-1">Error message:</h2>
            <p className="text-red-400 break-words">{error.message}</p>
          </div>

          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
