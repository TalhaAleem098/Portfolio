import { Suspense } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Blog | Aleem Talha - Web Development Insights & Tutorials',
  description: 'Read my latest thoughts, tutorials, and insights on web development, React, Next.js, and modern JavaScript technologies. Learn from real-world projects and experiences.',
  keywords: ['blog', 'web development', 'React', 'Next.js', 'JavaScript', 'tutorials', 'programming', 'Aleem Talha'],
  authors: [{ name: 'Aleem Talha' }],
  creator: 'Aleem Talha',
  publisher: 'Aleem Talha',
  openGraph: {
    title: 'Blog | Aleem Talha - Web Development Insights',
    description: 'Read my latest thoughts, tutorials, and insights on web development, React, Next.js, and modern JavaScript technologies.',
    type: 'website',
    locale: 'en_US',
    url: 'https://aleemtalha.com/blogs',
    siteName: 'Aleem Talha Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Aleem Talha - Web Development Insights',
    description: 'Read my latest thoughts, tutorials, and insights on web development, React, Next.js, and modern JavaScript technologies.',
    creator: '@aleemtalha',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// This page will use ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour

async function getBlogPosts() {
  // This will be replaced with actual API call
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blogs`, {
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  
  if (!res.ok) {
    // Return empty array if API fails
    return [];
  }
  
  return res.json();
}

function BlogCard({ post }) {
  return (
    <article className="bg-slate-800 border border-slate-700 rounded-lg shadow-lg hover:shadow-xl hover:border-slate-600 transition-all duration-300 p-4 md:p-6">
      <div className="flex flex-wrap items-center text-xs md:text-sm text-slate-400 mb-3 md:mb-4">
        <time dateTime={post.date} className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          {new Date(post.date).toLocaleDateString()}
        </time>
        <span className="mx-2">•</span>
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          {post.category}
        </span>
        <span className="mx-2">•</span>
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          {post.readTime} min read
        </span>
      </div>
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-3">
        <Link href={`/blogs/${post.slug}`} className="block hover:text-blue-400 transition-colors">
          {post.title}
        </Link>
      </h2>
      <p className="text-slate-300 text-sm md:text-base mb-4 md:mb-6 line-clamp-3 leading-relaxed">
        {post.excerpt}
      </p>
      <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
        {post.tags?.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full border border-slate-600 hover:bg-slate-600 transition-colors"
          >
            #{tag}
          </span>
        ))}
      </div>
      <Link
        href={`/blogs/${post.slug}`}
        className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center group text-sm md:text-base"
      >
        Read More
        <svg
          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </article>
  );
}

function BlogSkeleton() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg shadow-lg p-4 md:p-6 animate-pulse">
      <div className="flex items-center mb-3 md:mb-4">
        <div className="h-3 md:h-4 bg-slate-700 rounded w-20"></div>
        <span className="mx-2">•</span>
        <div className="h-3 md:h-4 bg-slate-700 rounded w-16"></div>
        <span className="mx-2">•</span>
        <div className="h-3 md:h-4 bg-slate-700 rounded w-20"></div>
      </div>
      <div className="h-5 md:h-6 bg-slate-700 rounded w-3/4 mb-2 md:mb-3"></div>
      <div className="space-y-2 mb-4 md:mb-6">
        <div className="h-3 md:h-4 bg-slate-700 rounded"></div>
        <div className="h-3 md:h-4 bg-slate-700 rounded"></div>
        <div className="h-3 md:h-4 bg-slate-700 rounded w-2/3"></div>
      </div>
      <div className="flex gap-1 md:gap-2 mb-4 md:mb-6">
        <div className="h-5 md:h-6 bg-slate-700 rounded-full w-12 md:w-16"></div>
        <div className="h-5 md:h-6 bg-slate-700 rounded-full w-16 md:w-20"></div>
        <div className="h-5 md:h-6 bg-slate-700 rounded-full w-14 md:w-18"></div>
      </div>
      <div className="h-4 md:h-5 bg-slate-700 rounded w-24"></div>
    </div>
  );
}

async function BlogList() {
  const posts = await getBlogPosts();

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16 md:py-20">
        <div className="mb-6">
          <svg className="w-16 h-16 md:w-20 md:h-20 mx-auto text-slate-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">No Blog Posts Yet</h3>
        <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
          Stay tuned for upcoming articles, tutorials, and insights on web development and technology!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-slate-900 text-slate-100">
        <div className="mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6">
              Blog
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Exploring web development, sharing insights, and documenting my journey in technology. 
              Read about the latest trends, tutorials, and personal experiences in the world of coding.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <Suspense 
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {[...Array(6)].map((_, i) => (
                  <BlogSkeleton key={i} />
                ))}
              </div>
            }
          >
            <BlogList />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}