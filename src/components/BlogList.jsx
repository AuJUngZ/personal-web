import { useState, useMemo } from "react";
import { Link } from "react-router";
import {
  Search,
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  FileText,
  SearchX,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import blogsData from "@/data/blogs.json";

const POSTS_PER_PAGE = 4;

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showTagFilter, setShowTagFilter] = useState(false);

  // Get only published posts
  const publishedPosts = useMemo(() => {
    return blogsData.posts.filter((post) => post.published !== false);
  }, []);

  // Get all unique tags from published posts only
  const allTags = useMemo(() => {
    const tags = new Set();
    publishedPosts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [publishedPosts]);

  // Filter posts based on search query and selected tag
  const filteredPosts = useMemo(() => {
    return publishedPosts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesTag =
        selectedTag === null || post.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag, publishedPosts]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  // Reset to page 1 when filters change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleTagClick = (tag) => {
    setSelectedTag(selectedTag === tag ? null : tag);
    setCurrentPage(1);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="py-10 md:py-20">
      <div className="mb-12">
        <h1 className="text-foreground text-4xl md:text-5xl font-black mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Blog
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Thoughts, tutorials, and insights on DevOps, cloud computing, and
          software development.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search posts by title, description, or tags..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>

        {/* Tags Filter */}
        <div className="space-y-3">
          <button
            onClick={() => setShowTagFilter(!showTagFilter)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <Tag className="size-4" />
            <span>Filter by tag</span>
            {selectedTag && (
              <Badge
                variant="default"
                className="bg-primary text-primary-foreground text-xs"
              >
                {selectedTag}
              </Badge>
            )}
            {showTagFilter ? (
              <ChevronUp className="size-4" />
            ) : (
              <ChevronDown className="size-4" />
            )}
          </button>

          {showTagFilter && (
            <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? "default" : "secondary"}
                  className={`cursor-pointer transition-all hover:scale-105 ${
                    selectedTag === tag
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-primary/20"
                  }`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </Badge>
              ))}
              {selectedTag && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleTagClick(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Clear filter
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Results count */}
      <p className="text-muted-foreground text-sm mb-6">
        Showing {paginatedPosts.length} of {filteredPosts.length} posts
        {searchQuery && ` for "${searchQuery}"`}
        {selectedTag && ` tagged with "${selectedTag}"`}
      </p>

      {/* Blog Posts Grid */}
      {paginatedPosts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {paginatedPosts.map((post, index) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
              <Card className="h-full overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 py-0 gap-0">
                {/* Cover Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                <CardHeader className="pb-2 pt-4">
                  <div className="flex items-center gap-4 text-muted-foreground text-sm mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-4" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-4" />
                      {post.readingTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0 pb-6">
                  <CardDescription className="line-clamp-2 mb-4">
                    {post.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{post.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Read more
                    <ArrowRight className="size-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : publishedPosts.length === 0 ? (
        // No published blogs at all
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center size-16 rounded-full bg-muted mb-6">
            <FileText className="size-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            No Blog Posts Yet
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Stay tuned! New articles about DevOps, cloud computing, and software
            development are coming soon.
          </p>
        </div>
      ) : (
        // No posts matching search/filter criteria
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center size-16 rounded-full bg-muted mb-6">
            <SearchX className="size-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            No Posts Found
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            We couldn't find any posts matching your search
            {searchQuery && ` "${searchQuery}"`}
            {selectedTag && ` with tag "${selectedTag}"`}. Try adjusting your
            filters.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchQuery("");
              setSelectedTag(null);
            }}
          >
            Clear all filters
          </Button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="size-4" />
          </Button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="icon"
                onClick={() => setCurrentPage(page)}
                className={
                  currentPage === page
                    ? "bg-primary text-primary-foreground"
                    : ""
                }
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      )}
    </section>
  );
}
