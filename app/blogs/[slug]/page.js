import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { CopyLinkButton } from '../../../components/ShareButtons';

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blogs/${slug}`, {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      return {
        title: 'Blog Post Not Found | Aleem Talha',
        description: 'The requested blog post could not be found.',
      };
    }
    
    const post = await res.json();
    
    return {
      title: `${post.title} | Aleem Talha Blog`,
      description: post.excerpt || `Read about ${post.title} - insights and tutorials on web development by Aleem Talha.`,
      keywords: post.tags ? [...post.tags, 'Aleem Talha', 'web development', 'tutorial'] : ['web development', 'tutorial', 'Aleem Talha'],
      authors: [{ name: 'Aleem Talha' }],
      creator: 'Aleem Talha',
      publisher: 'Aleem Talha',
      category: post.category || 'Technology',
      openGraph: {
        title: post.title,
        description: post.excerpt || `Read about ${post.title} - insights and tutorials on web development.`,
        type: 'article',
        publishedTime: post.date,
        modifiedTime: post.updatedAt || post.date,
        authors: ['Aleem Talha'],
        section: post.category || 'Technology',
        tags: post.tags || [],
        url: `https://aleemtalha.com/blogs/${slug}`,
        siteName: 'Aleem Talha Portfolio',
        locale: 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt || `Read about ${post.title} - insights and tutorials on web development.`,
        creator: '@aleemtalha',
        site: '@aleemtalha',
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
      alternates: {
        canonical: `https://aleemtalha.com/blogs/${slug}`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post Not Found | Aleem Talha',
      description: 'The requested blog post could not be found.',
    };
  }
}

// Enable ISR for blog posts
export const revalidate = 3600; // Revalidate every hour

async function getBlogPost(slug) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blogs/${slug}`, {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      return null;
    }
    
    return res.json();
  } catch (error) {
    return null;
  }
}

// Generate static paths for known blog posts
export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blogs`, {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      return [];
    }
    
    const posts = await res.json();
    
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    return [];
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-slate-900 text-slate-100">
        <div className="container mx-auto px-6 py-20">
          <nav className="mb-8">
            <Link
              href="/blogs"
              className="inline-flex items-center text-blue-200 hover:text-blue-300 font-medium group transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </nav>

          <article className="bg-slate-800 border border-slate-700 rounded-xl p-8 md:p-12 shadow-2xl">
            <header className="mb-12">
              <div className="flex flex-wrap items-center text-sm text-slate-400 mb-6 gap-4">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  {post.category}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {post.readTime} min read
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-slate-700 text-slate-300 text-sm rounded-full border border-slate-600 hover:bg-slate-600 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <div className="prose prose-lg prose-invert">
              <div 
                className="blog-content text-slate-300 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            <footer className="mt-16 pt-8 border-t border-slate-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <h3 className="text-xl font-bold text-white">
                  Share this article
                </h3>
                <div className="flex space-x-4">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blogs/${slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 transition-colors p-3 bg-slate-700 hover:bg-slate-600 rounded-lg border border-slate-600"
                    aria-label="Share on Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <span className="text-sm">Twitter</span>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blogs/${slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-400 hover:text-blue-600 transition-colors p-3 bg-slate-700 hover:bg-slate-600 rounded-lg border border-slate-600"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <CopyLinkButton 
                    url={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blogs/${slug}`}
                    className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors p-3 bg-slate-700 hover:bg-slate-600 rounded-lg border border-slate-600"
                  />
                </div>
              </div>
            </footer>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}