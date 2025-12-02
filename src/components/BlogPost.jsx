import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  Link as LinkIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import blogsData from "@/data/blogs.json";
import "highlight.js/styles/github-dark.css";

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const post = blogsData.posts.find(
    (p) => p.slug === slug && p.published !== false
  );

  useEffect(() => {
    if (!post) {
      setLoading(false);
      return;
    }

    const loadContent = async () => {
      try {
        // Dynamically import markdown content
        const modules = import.meta.glob("/src/content/blogs/*.md", {
          query: "?raw",
          import: "default",
        });
        const path = `/src/content/blogs/${slug}.md`;

        if (modules[path]) {
          const content = await modules[path]();
          setContent(content);
        } else {
          setContent(
            "# Content not found\n\nThe blog post content could not be loaded."
          );
        }
      } catch (error) {
        console.error("Error loading blog content:", error);
        setContent("# Error\n\nFailed to load the blog post content.");
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [slug, post]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!post) {
    return (
      <section className="py-10 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="size-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <article className="py-10 md:py-20">
      {/* Back Button */}
      <Button
        variant="ghost"
        asChild
        className="mb-8 -ml-2 text-muted-foreground hover:text-foreground animate-in fade-in slide-in-from-left-4 duration-500"
      >
        <Link to="/blog">
          <ArrowLeft className="size-4 mr-2" />
          Back to Blog
        </Link>
      </Button>

      {/* Header */}
      <header className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Cover Image */}
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="size-4" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-4" />
            {post.readingTime}
          </span>
          <span className="flex items-center gap-1">
            <User className="size-4" />
            {post.author}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-black text-foreground mb-4 leading-tight">
          {post.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-6">{post.description}</p>

        {/* Tags & Share */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Tag className="size-4 text-muted-foreground" />
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyLink}
            className="gap-2"
          >
            {copied ? (
              <>
                <LinkIcon className="size-4" />
                Copied!
              </>
            ) : (
              <>
                <Share2 className="size-4" />
                Share
              </>
            )}
          </Button>
        </div>
      </header>

      {/* Content */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="prose prose-lg dark:prose-invert max-w-none animate-in fade-in duration-700 delay-300">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              rehypeHighlight,
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: "wrap" }],
            ]}
            components={{
              // Custom heading styles
              h1: ({ children, ...props }) => (
                <h1
                  className="text-3xl md:text-4xl font-black text-foreground mt-12 mb-6 pb-2 border-b border-border"
                  {...props}
                >
                  {children}
                </h1>
              ),
              h2: ({ children, ...props }) => (
                <h2
                  className="text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 scroll-mt-20"
                  {...props}
                >
                  {children}
                </h2>
              ),
              h3: ({ children, ...props }) => (
                <h3
                  className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3"
                  {...props}
                >
                  {children}
                </h3>
              ),
              h4: ({ children, ...props }) => (
                <h4
                  className="text-lg md:text-xl font-semibold text-foreground mt-6 mb-2"
                  {...props}
                >
                  {children}
                </h4>
              ),
              // Paragraph
              p: ({ children, ...props }) => (
                <p
                  className="text-foreground/90 leading-relaxed mb-4"
                  {...props}
                >
                  {children}
                </p>
              ),
              // Links
              a: ({ children, href, ...props }) => (
                <a
                  href={href}
                  className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href?.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  {...props}
                >
                  {children}
                </a>
              ),
              // Lists
              ul: ({ children, ...props }) => (
                <ul
                  className="list-disc list-inside space-y-2 mb-4 text-foreground/90"
                  {...props}
                >
                  {children}
                </ul>
              ),
              ol: ({ children, ...props }) => (
                <ol
                  className="list-decimal list-inside space-y-2 mb-4 text-foreground/90"
                  {...props}
                >
                  {children}
                </ol>
              ),
              li: ({ children, ...props }) => (
                <li className="leading-relaxed" {...props}>
                  {children}
                </li>
              ),
              // Code blocks
              pre: ({ children, ...props }) => (
                <pre
                  className="bg-[#0d1117] rounded-xl p-4 overflow-x-auto mb-6 border border-border"
                  {...props}
                >
                  {children}
                </pre>
              ),
              code: ({ inline, className, children, ...props }) => {
                if (inline) {
                  return (
                    <code
                      className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                }
                return (
                  <code className={`${className} text-sm`} {...props}>
                    {children}
                  </code>
                );
              },
              // Blockquotes
              blockquote: ({ children, ...props }) => (
                <blockquote
                  className="border-l-4 border-primary pl-4 py-2 my-6 bg-muted/30 rounded-r-lg italic text-foreground/80"
                  {...props}
                >
                  {children}
                </blockquote>
              ),
              // Tables
              table: ({ children, ...props }) => (
                <div className="overflow-x-auto mb-6">
                  <table
                    className="w-full border-collapse border border-border rounded-lg overflow-hidden"
                    {...props}
                  >
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children, ...props }) => (
                <thead className="bg-muted" {...props}>
                  {children}
                </thead>
              ),
              th: ({ children, ...props }) => (
                <th
                  className="border border-border px-4 py-2 text-left font-semibold text-foreground"
                  {...props}
                >
                  {children}
                </th>
              ),
              td: ({ children, ...props }) => (
                <td
                  className="border border-border px-4 py-2 text-foreground/90"
                  {...props}
                >
                  {children}
                </td>
              ),
              // Images
              img: ({ src, alt, ...props }) => (
                <figure className="my-8">
                  <img
                    src={src}
                    alt={alt}
                    className="rounded-xl w-full shadow-lg"
                    loading="lazy"
                    {...props}
                  />
                  {alt && (
                    <figcaption className="text-center text-muted-foreground text-sm mt-2 italic">
                      {alt}
                    </figcaption>
                  )}
                </figure>
              ),
              // Horizontal rule
              hr: () => <hr className="my-8 border-border" />,
              // Strong and emphasis
              strong: ({ children, ...props }) => (
                <strong className="font-bold text-foreground" {...props}>
                  {children}
                </strong>
              ),
              em: ({ children, ...props }) => (
                <em className="italic" {...props}>
                  {children}
                </em>
              ),
              // Task list items
              input: ({ type, checked, ...props }) => {
                if (type === "checkbox") {
                  return (
                    <input
                      type="checkbox"
                      checked={checked}
                      readOnly
                      className="mr-2 accent-primary"
                      {...props}
                    />
                  );
                }
                return <input type={type} {...props} />;
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      )}

      {/* Related Posts Suggestion */}
      <footer className="mt-16 pt-8 border-t border-border">
        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link to="/blog">
              <ArrowLeft className="size-4 mr-2" />
              All Posts
            </Link>
          </Button>
        </div>
      </footer>
    </article>
  );
}
