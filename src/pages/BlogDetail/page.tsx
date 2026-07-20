import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetBlogArticleBySlugQuery } from "@/services/api";

export default function BlogDetail() {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const { data: articleData, isLoading } = useGetBlogArticleBySlugQuery(
    articleSlug || ""
  );
  const article = articleData?.data;

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Kent Business College Blog`;
    }
  }, [article]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse h-8 w-32 bg-gray-200 rounded" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-2">
            Article not found
          </h1>
          <Link to="/blog" className="text-kbc-purple-600 hover:underline">
            View all articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white mb-4"
          >
            <i className="ri-arrow-left-line" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-kbc-gold-500 text-kbc-dark-900 text-sm font-medium rounded-full">
              {article.category}
            </span>
            <span className="text-sm text-white/70">
              {article.readTime} read
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <span>{article.author}</span>
            <span>&middot;</span>
            <span>
              {new Date(article.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden mb-10">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto object-cover"
              width={800}
              height={500}
            />
          </div>
          <div className="prose max-w-none">
            <p className="text-lg text-kbc-dark-700 leading-relaxed mb-6">
              {article.excerpt}
            </p>
            <p className="text-kbc-dark-600 leading-relaxed whitespace-pre-line">
              {article.content}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}