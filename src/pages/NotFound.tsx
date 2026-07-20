import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-kbc-purple-50">
      <div className="text-center px-4">
        <div className="w-24 h-24 bg-kbc-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="ri-error-warning-line text-4xl text-kbc-purple-600" />
        </div>
        <h1 className="font-heading text-6xl md:text-8xl font-bold text-kbc-purple-600 mb-4">
          404
        </h1>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-kbc-dark-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-kbc-dark-500 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved. Please check the URL or navigate back to the homepage.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-kbc-purple-500 text-white font-semibold rounded-lg hover:bg-kbc-purple-600 transition-colors"
        >
          <i className="ri-home-line" />
          Return Home
        </Link>
      </div>
    </div>
  );
}