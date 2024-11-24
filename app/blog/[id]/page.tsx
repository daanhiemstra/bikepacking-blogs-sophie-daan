import { getBlogPosts } from '../../data/blogs';
import BlogPost from '../../components/BlogPost';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const blogs = await getBlogPosts();
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export default async function BlogPage({ params }: { params: { id: string } }) {
  const blogs = await getBlogPosts();
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) {
    notFound();
  }

  return <BlogPost blog={blog} />;
}