import { Link } from "react-router";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import blogsData from "@/data/blogs.json";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function RecommendedBlog() {
  const publishedPosts = blogsData.posts
    .filter((post) => post.published !== false)
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (publishedPosts.length === 0) {
    return null;
  }

  const featuredPost =
    publishedPosts.find((post) => post.featured) ?? publishedPosts[0];

  return (
    <section className="py-10 md:py-16">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-primary">
            Recommended read
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground md:text-4xl">
            A blog post worth your time
          </h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
            I surface one article here so visitors can jump straight into the
            most relevant piece without searching the blog archive.
          </p>
        </div>

        <Button asChild variant="outline" className="rounded-full">
          <Link to="/blog" className="inline-flex items-center gap-2">
            View all posts
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      <Card className="overflow-hidden border-border/70 bg-card/90 py-0 shadow-[0_28px_90px_-60px_rgba(15,23,42,0.75)]">
        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="relative min-h-72">
            <img
              src={featuredPost.coverImage}
              alt={featuredPost.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.05)_0%,rgba(15,23,42,0.3)_55%,rgba(15,23,42,0.72)_100%)]" />
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
              <Sparkles className="size-3.5" />
              Featured post
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="size-4" />
                  {formatDate(featuredPost.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-4" />
                  {featuredPost.readingTime}
                </span>
              </div>
              <h3 className="mt-3 max-w-xl text-2xl font-semibold leading-tight md:text-3xl">
                {featuredPost.title}
              </h3>
            </div>
          </div>

          <CardContent className="flex flex-col justify-between gap-6 p-6 md:p-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
                {featuredPost.featured ? "Editor's pick" : "Latest article"}
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {featuredPost.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredPost.tags.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full">
                <Link to={`/blog/${featuredPost.slug}`} className="inline-flex items-center gap-2">
                  Read article
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/blog">Browse blog</Link>
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </section>
  );
}
