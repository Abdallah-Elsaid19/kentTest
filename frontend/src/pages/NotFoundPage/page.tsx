import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFoundPage() {
  return (
    <div className="mx-auto grid min-h-[65vh] max-w-3xl place-content-center px-5 py-24 text-center">
      <Helmet>
        <title>Page not found | Kent Business College</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <p className="font-semibold text-kbc-gold-700">404</p>
      <h1 className="mt-3 font-heading text-5xl font-semibold tracking-[-.035em]">Page not found</h1>
      <p className="mt-5 text-kbc-purple-700">
        The requested page does not exist or is no longer published.
      </p>
      <Link
        to="/"
        className="mx-auto mt-8 inline-flex min-h-12 items-center rounded-lg bg-kbc-purple-700 px-6 py-3 font-semibold text-white transition hover:bg-kbc-purple-800"
      >
        Return home
      </Link>
    </div>
  );
}
