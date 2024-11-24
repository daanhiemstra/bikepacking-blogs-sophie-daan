import { getBlogPosts } from '../data/blogs';
import BlogCard from '../components/BlogCard';

export default async function BlogsPage() {
  const blogs = await getBlogPosts();

  return (
    <main className="min-h-screen pt-24">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold">All Adventures</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </main>
  );
}