import { getBlogPosts } from './data/blogs';
import BlogCard from './components/BlogCard';
import Hero from './components/Hero';

export default async function Home() {
  const blogs = await getBlogPosts();
  const latestBlogs = blogs.slice(0, 4);

  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold">Latest Adventures</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {latestBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </main>
  );
}