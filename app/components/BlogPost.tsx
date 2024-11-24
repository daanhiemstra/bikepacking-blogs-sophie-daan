'use client';

import Image from 'next/image';
import { format } from 'date-fns';
import { MapPin } from 'lucide-react';
import { type BlogPost } from '../data/blogs';
import { useLanguage } from '../hooks/useLanguage';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), { ssr: false });

interface BlogPostProps {
  blog: BlogPost;
}

export default function BlogPost({ blog }: BlogPostProps) {
  const { language } = useLanguage();

  return (
    <article className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <header className="text-center">
        <div className="flex items-center justify-center gap-2 text-sm text-cognac/80">
          <time dateTime={blog.date}>
            {format(new Date(blog.date), 'MMMM d, yyyy')}
          </time>
          <span>•</span>
          <div className="flex items-center gap-1">
            <MapPin size={14} className="text-red" />
            {blog.location[language]}
          </div>
        </div>
        <h1 className="mt-4 text-4xl font-bold text-cognac sm:text-5xl">
          {blog.title[language]}
        </h1>
      </header>

      <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-celadon/20">
        <Image
          src={blog.coverImage}
          alt={`Cover image for ${blog.title[language]}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {blog.gpxFiles.length > 0 && (
        <div className="mt-8 h-[400px] w-full overflow-hidden rounded-2xl border border-celadon/20">
          <Map gpxFiles={blog.gpxFiles} className="h-full w-full" />
        </div>
      )}

      <div className="mt-12 space-y-8">
        {blog.content.map((section, index) => {
          if (section.type === 'text') {
            return (
              <p key={index} className="text-lg leading-relaxed text-cognac/90">
                {typeof section.content === 'string'
                  ? section.content
                  : section.content[language]}
              </p>
            );
          } else if (section.type === 'image') {
            return (
              <figure key={index} className="space-y-2">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-celadon/20">
                  <Image
                    src={section.content as string}
                    alt={section.caption?.[language] || `Image ${index + 1} for ${blog.title[language]}`}
                    fill
                    className="object-cover"
                  />
                </div>
                {section.caption && (
                  <figcaption className="text-center text-sm text-cognac/70">
                    {section.caption[language]}
                  </figcaption>
                )}
              </figure>
            );
          }
        })}
      </div>
    </article>
  );
}