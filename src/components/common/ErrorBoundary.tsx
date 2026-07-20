import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export default function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ErrorBoundaryState>({ hasError: false, error: null });

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      setState({ hasError: true, error: error.error });
    };
    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  if (state.hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-kbc-purple-50">
        <div className="text-center px-4 max-w-lg">
          <div className="w-20 h-20 bg-kbc-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-bug-line text-3xl text-kbc-purple-600" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-3">
            Something went wrong
          </h1>
          <p className="text-kbc-dark-500 mb-6">
            We are sorry, but an unexpected error occurred. Please try refreshing the page or return to the homepage.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-kbc-purple-500 text-white font-medium rounded-lg hover:bg-kbc-purple-600 transition-colors"
            >
              Refresh Page
            </button>
            <Link
              to="/"
              className="px-6 py-2.5 border-2 border-kbc-purple-500 text-kbc-purple-600 font-medium rounded-lg hover:bg-kbc-purple-50 transition-colors"
            >
              Go Home
            </Link>
          </div>
          {state.error && process.env.NODE_ENV === "development" && (
            <pre className="mt-6 text-left text-xs bg-gray-100 p-4 rounded-lg overflow-auto">
              {state.error.stack}
            </pre>
          )}
        </div>
      </div>
    );
  }

  return children;
}