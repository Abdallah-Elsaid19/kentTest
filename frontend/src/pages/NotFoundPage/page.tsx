import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFoundPage() {
  return <div className="mx-auto max-w-3xl px-4 py-24 text-center"><Helmet><title>Page not found | Kent Business College</title><meta name="robots" content="noindex,nofollow" /></Helmet><p className="font-semibold text-kbc-gold-700">404</p><h1 className="mt-2 font-heading text-4xl font-bold">Page not found</h1><p className="mt-4 text-slate-600">The requested page does not exist or is no longer published.</p><Link to="/" className="mt-8 inline-flex rounded-lg bg-kbc-purple-700 px-6 py-3 font-semibold text-white">Return home</Link></div>;
}
