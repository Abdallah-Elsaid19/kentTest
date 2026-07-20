import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetBlogArticlesQuery } from "@/services/api";

export default function Blog() {
  const { data: blogData, isLoading } = useGetBlogArticlesQuery();
  const articles = blogData?.data || [];

  useEffect(() => {
    document.title = "Blog | Kent Business College";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Insights, news, and updates from Kent Business College.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-100 rounded-xl h-96 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  to={`/blog/${article.slug}`}
                  className="bg-white rounded-xl border border-kbc-purple-100 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      width={800}
                      height={500}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-0.5 bg-kbc-purple-50 text-kbc-purple-700 text-xs font-medium rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-kbc-dark-400">
                        {article.readTime} read
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-kbc-dark-900 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-kbc-dark-600 line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-kbc-dark-500">
                        {article.author}
                      </span>
                      <span className="text-xs text-kbc-dark-400">
                        {new Date(article.date).toLocaleDateString("en-GB")}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}