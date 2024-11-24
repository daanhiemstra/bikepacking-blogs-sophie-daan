'use client';

import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { MapPin } from 'lucide-react';
import { type BlogPost } from '../data/blogs';

interface BlogCardProps {
  blog: BlogPost;
  language: 'en' | 'nl';
}

export default function BlogCard({ blog, language }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.id}`} className="group">
      <div className="overflow-hidden rounded-2xl bg-cream shadow-lg transition-all duration-300 hover:shadow-xl border border-celadon/20">
        <div className="relative h-64 w-full">
          <Image
            src={blog.coverImage}
            alt={`Cover image for ${blog.title[language]}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-cognac/80">
            <time dateTime={blog.date}>
              {format(new Date(blog.date), 'MMMM d, yyyy')}
            </time>
            <span>•</span>
            <div className="flex items-center gap-1">
              <MapPin size={14} className="text-red" />
              {blog.location[language]}
            </div>
          </div>
          <h2 className="mt-2 text-xl font-semibold text-cognac group-hover:text-red transition-colors">
            {blog.title[language]}
          </h2>
          <p className="mt-2 text-cognac/80">
            {blog.summary[language]}
          </p>
        </div>
      </div>
    </Link>
  );
}