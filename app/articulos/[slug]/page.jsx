import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle, getAllSlugs } from "@/lib/articles";
import { SITE_URL, waUrl } from "@/lib/contact";
import ArticleContent from "@/components/ArticleContent";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | Dra. Ana Maria Peña`,
    description: article.excerpt,
    keywords: [article.category, "otorrinolaringología Venezuela", "ORL Caracas"],
    alternates: { canonical: `${SITE_URL}/articulos/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${SITE_URL}/articulos/${article.slug}`,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default function ArticlePage({ params }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <ArticleContent article={article} others={others} />
  );
}
