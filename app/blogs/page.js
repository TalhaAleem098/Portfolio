import { Suspense } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Blog | Your Name',
  description: 'Read my latest thoughts, tutorials, and insights on web development, technology, and more.',
  keywords: ['blog', 'web development', 'technology', 'tutorials', 'programming'],
  openGraph: {
    title: 'Blog | Your Name',
    description: 'Read my latest thoughts, tutorials, and insights on web development, technology, and more.',
    type: 'website',
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
    <article className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-2">
        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
        <span className="mx-2">•</span>
        <span>{post.category}</span>
        <span className="mx-2">•</span>
        <span>{post.readTime} min read</span>
      </div>
      <h2 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors">
        <a href={`/blogs/${post.slug}`}>{post.title}</a>
      </h2>
      <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
        {post.excerpt}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags?.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={`/blogs/${post.slug}`}
        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group"
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
      </a>
    </article>
  );
}

function BlogSkeleton() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 animate-pulse">
      <div className="h-48 bg-slate-200 dark:bg-slate-700 rounded-lg mb-4"></div>
      <div className="flex items-center mb-2">
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-20"></div>
        <span className="mx-2">•</span>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-16"></div>
        <span className="mx-2">•</span>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-20"></div>
      </div>
      <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-3"></div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3"></div>
      </div>
      <div className="flex gap-2 mb-4">
        <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-16"></div>
        <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-20"></div>
      </div>
      <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-24"></div>
    </div>
  );
}

async function BlogList() {
  const posts = await getBlogPosts();

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-2">No Blog Posts Yet</h3>
        <p className="text-slate-600 dark:text-slate-400">
          Stay tuned for upcoming articles and tutorials!
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-20">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent mb-4">
              Blog
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Exploring web development, sharing insights, and documenting my journey in tech
            </p>
          </div>

          {/* Blog Posts Grid */}
          <Suspense 
            fallback={
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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