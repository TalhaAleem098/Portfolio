// Sample blog posts data - in production, this would come from a database
export const blogPosts = [
  {
    slug: 'getting-started-with-nextjs-15',
    title: 'Getting Started with Next.js 15: New Features and Improvements',
    excerpt: 'Explore the latest features in Next.js 15 including improved App Router, enhanced performance, and new developer tools that make building React applications more efficient.',
    content: `
      <h2>Introduction</h2>
      <p>Next.js 15 brings exciting new features and improvements that enhance developer experience and application performance. In this comprehensive guide, we'll explore the key updates and how to leverage them in your projects.</p>
      
      <h2>Key Features in Next.js 15</h2>
      
      <h3>1. Enhanced App Router</h3>
      <p>The App Router continues to evolve with better performance and new capabilities:</p>
      <ul>
        <li>Improved server components performance</li>
        <li>Better streaming support</li>
        <li>Enhanced error handling</li>
      </ul>
      
      <h3>2. Turbopack Improvements</h3>
      <p>Turbopack, the Rust-based bundler, now offers:</p>
      <ul>
        <li>Faster hot module replacement (HMR)</li>
        <li>Better memory usage optimization</li>
        <li>Improved cold start times</li>
      </ul>
      
      <h3>3. Server Actions Enhancement</h3>
      <p>Server Actions have been refined with:</p>
      <pre><code>async function createPost(formData) {
  'use server';
  
  const title = formData.get('title');
  const content = formData.get('content');
  
  // Handle form submission
  await savePost({ title, content });
  
  redirect('/posts');
}</code></pre>
      
      <h2>Migration Guide</h2>
      <p>Upgrading to Next.js 15 is straightforward. Here's what you need to know:</p>
      
      <h3>Package Updates</h3>
      <pre><code>npm install next@15 react@18 react-dom@18</code></pre>
      
      <h3>Configuration Changes</h3>
      <p>Update your <code>next.config.js</code> to leverage new features:</p>
      <pre><code>/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: true,
    serverActions: true
  }
};

module.exports = nextConfig;</code></pre>
      
      <h2>Performance Benefits</h2>
      <p>Our benchmarks show significant improvements:</p>
      <ul>
        <li>30% faster build times</li>
        <li>25% reduction in bundle size</li>
        <li>Improved Core Web Vitals scores</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Next.js 15 represents a significant step forward in React development tooling. The enhanced performance, improved developer experience, and new features make it an excellent choice for modern web applications.</p>
      
      <blockquote>
        <p>"The future of web development is here with Next.js 15. It's faster, more efficient, and developer-friendly than ever before."</p>
      </blockquote>
      
      <p>Start building with Next.js 15 today and experience the difference!</p>
    `,
    date: '2024-01-15',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'JavaScript', 'Web Development'],
    readTime: 8,
    image: '/images/nextjs-15-blog.jpg'
  },
  {
    slug: 'mastering-tailwind-css-best-practices',
    title: 'Mastering Tailwind CSS: Best Practices and Advanced Techniques',
    excerpt: 'Learn advanced Tailwind CSS techniques, optimization strategies, and best practices for building maintainable and scalable user interfaces.',
    content: `
      <h2>Why Tailwind CSS?</h2>
      <p>Tailwind CSS has revolutionized how we approach styling in modern web development. Its utility-first approach offers unprecedented flexibility while maintaining consistency across your application.</p>
      
      <h2>Best Practices for Tailwind CSS</h2>
      
      <h3>1. Component Extraction</h3>
      <p>As your project grows, extract common patterns into reusable components:</p>
      <pre><code>// Button component
function Button({ variant = 'primary', size = 'md', children, ...props }) {
  const baseClasses = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const classes = \`\${baseClasses} \${variants[variant]} \${sizes[size]}\`;
  
  return (
    &lt;button className={classes} {...props}&gt;
      {children}
    &lt;/button&gt;
  );
}</code></pre>
      
      <h3>2. Custom Configuration</h3>
      <p>Extend Tailwind's default configuration to match your design system:</p>
      <pre><code>// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          // ... more shades
          900: '#1e3a8a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      }
    }
  }
};</code></pre>
      
      <h3>3. Responsive Design Patterns</h3>
      <p>Leverage Tailwind's responsive utilities for mobile-first design:</p>
      <pre><code>&lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6 lg:p-8"&gt;
  &lt;!-- Card content --&gt;
&lt;/div&gt;</code></pre>
      
      <h2>Advanced Techniques</h2>
      
      <h3>1. Dynamic Classes with clsx</h3>
      <p>Use the <code>clsx</code> library for conditional styling:</p>
      <pre><code>import clsx from 'clsx';

function Alert({ type, message }) {
  return (
    &lt;div className={clsx(
      'p-4 rounded-md',
      {
        'bg-red-100 text-red-700': type === 'error',
        'bg-green-100 text-green-700': type === 'success',
        'bg-yellow-100 text-yellow-700': type === 'warning'
      }
    )}&gt;
      {message}
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>2. CSS-in-JS Integration</h3>
      <p>Combine Tailwind with CSS-in-JS for complex animations:</p>
      <pre><code>// Using @apply directive
.custom-animation {
  @apply transform transition-all duration-300 ease-in-out;
}

.custom-animation:hover {
  @apply scale-105 shadow-lg;
}</code></pre>
      
      <h3>3. Performance Optimization</h3>
      <p>Optimize your build size with PurgeCSS (built into Tailwind):</p>
      <pre><code>// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  // ... rest of config
};</code></pre>
      
      <h2>Common Pitfalls to Avoid</h2>
      <ul>
        <li><strong>Over-abstracting too early:</strong> Start with utility classes and extract components when patterns emerge</li>
        <li><strong>Ignoring design systems:</strong> Customize Tailwind to match your brand guidelines</li>
        <li><strong>Not using responsive utilities:</strong> Always design mobile-first with Tailwind's responsive prefixes</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Tailwind CSS empowers developers to build beautiful, consistent interfaces rapidly. By following these best practices and leveraging advanced techniques, you can create maintainable and scalable styling solutions.</p>
      
      <p>The key is finding the right balance between utility classes and component abstraction for your specific project needs.</p>
    `,
    date: '2024-01-12',
    category: 'CSS',
    tags: ['Tailwind CSS', 'CSS', 'Frontend', 'UI Design'],
    readTime: 10,
    image: '/images/tailwind-css-blog.jpg'
  },
  {
    slug: 'react-server-components-deep-dive',
    title: 'React Server Components: A Deep Dive into the Future of React',
    excerpt: 'Understanding React Server Components, their benefits, implementation strategies, and how they reshape the way we build React applications.',
    content: `
      <h2>What are React Server Components?</h2>
      <p>React Server Components (RSC) represent a paradigm shift in React development, allowing components to run on the server while maintaining the interactive capabilities we love about React.</p>
      
      <h2>Key Benefits</h2>
      
      <h3>1. Zero Bundle Size Impact</h3>
      <p>Server components don't ship JavaScript to the client:</p>
      <pre><code>// This component runs on the server
async function UserProfile({ userId }) {
  const user = await fetchUser(userId); // Direct database access
  
  return (
    &lt;div className="profile"&gt;
      &lt;h1&gt;{user.name}&lt;/h1&gt;
      &lt;p&gt;{user.bio}&lt;/p&gt;
      &lt;Avatar src={user.avatar} /&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>2. Direct Backend Access</h3>
      <p>Access databases, file systems, and APIs directly without exposing sensitive information:</p>
      <pre><code>import { db } from '@/lib/database';

async function PostList() {
  // This runs on the server
  const posts = await db.posts.findMany({
    where: { published: true },
    include: { author: true }
  });
  
  return (
    &lt;div&gt;
      {posts.map(post =&gt; (
        &lt;PostCard key={post.id} post={post} /&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre>
      
      <h2>Server vs Client Components</h2>
      
      <h3>When to Use Server Components</h3>
      <ul>
        <li>Fetching data from APIs or databases</li>
        <li>Accessing server-only resources</li>
        <li>Keeping sensitive information on the server</li>
        <li>Reducing client bundle size</li>
      </ul>
      
      <h3>When to Use Client Components</h3>
      <ul>
        <li>Adding interactivity (event handlers)</li>
        <li>Using browser-only APIs</li>
        <li>Managing component state</li>
        <li>Using React hooks</li>
      </ul>
      
      <h2>Implementation Patterns</h2>
      
      <h3>1. The Composition Pattern</h3>
      <pre><code>// Server Component
async function Layout({ children }) {
  const user = await getCurrentUser();
  
  return (
    &lt;div&gt;
      &lt;Header user={user} /&gt;
      &lt;main&gt;{children}&lt;/main&gt;
      &lt;Sidebar /&gt;
    &lt;/div&gt;
  );
}

// Usage
function Page() {
  return (
    &lt;Layout&gt;
      &lt;InteractiveComponent /&gt; {/* Client component */}
    &lt;/Layout&gt;
  );
}</code></pre>
      
      <h3>2. Passing Props Down</h3>
      <pre><code>// Server Component
async function BlogPost({ slug }) {
  const post = await getPost(slug);
  
  return (
    &lt;article&gt;
      &lt;h1&gt;{post.title}&lt;/h1&gt;
      &lt;LikeButton postId={post.id} initialLikes={post.likes} /&gt;
    &lt;/article&gt;
  );
}

// Client Component
'use client';
import { useState } from 'react';

function LikeButton({ postId, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  
  return (
    &lt;button onClick={() =&gt; setLikes(likes + 1)}&gt;
      ❤️ {likes}
    &lt;/button&gt;
  );
}</code></pre>
      
      <h2>Performance Implications</h2>
      
      <h3>Streaming and Suspense</h3>
      <pre><code>import { Suspense } from 'react';

function Dashboard() {
  return (
    &lt;div&gt;
      &lt;QuickStats /&gt; {/* Fast loading component */}
      
      &lt;Suspense fallback={&lt;ChartsLoading /&gt;}&gt;
        &lt;AnalyticsCharts /&gt; {/* Slower component */}
      &lt;/Suspense&gt;
      
      &lt;Suspense fallback={&lt;TableLoading /&gt;}&gt;
        &lt;DataTable /&gt; {/* Another slow component */}
      &lt;/Suspense&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h2>Best Practices</h2>
      
      <h3>1. Minimize Client Components</h3>
      <p>Keep interactivity at the leaf nodes of your component tree.</p>
      
      <h3>2. Use Streaming Wisely</h3>
      <p>Break up slow operations with Suspense boundaries.</p>
      
      <h3>3. Optimize Data Fetching</h3>
      <pre><code>// Good: Parallel data fetching
async function UserDashboard({ userId }) {
  // These run in parallel
  const [user, posts, analytics] = await Promise.all([
    getUser(userId),
    getUserPosts(userId),
    getAnalytics(userId)
  ]);
  
  return (
    &lt;div&gt;
      &lt;UserInfo user={user} /&gt;
      &lt;PostsList posts={posts} /&gt;
      &lt;Analytics data={analytics} /&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h2>Future Outlook</h2>
      <p>React Server Components represent the future of React development. They solve long-standing problems around bundle size, SEO, and performance while maintaining the developer experience we love.</p>
      
      <p>As the ecosystem evolves, we can expect:</p>
      <ul>
        <li>Better tooling and debugging support</li>
        <li>More framework integration</li>
        <li>Improved caching strategies</li>
        <li>Enhanced streaming capabilities</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>React Server Components aren't just a new feature—they're a new way of thinking about React applications. By leveraging the server for what it does best and the client for interactivity, we can build faster, more efficient applications.</p>
    `,
    date: '2024-01-10',
    category: 'React',
    tags: ['React', 'Server Components', 'Performance', 'Architecture'],
    readTime: 12,
    image: '/images/react-server-components-blog.jpg'
  },
  {
    slug: 'javascript-performance-optimization-2024',
    title: 'JavaScript Performance Optimization: Modern Techniques for 2024',
    excerpt: 'Comprehensive guide to JavaScript performance optimization including modern bundling strategies, code splitting, and runtime optimizations.',
    content: `
      <h2>Performance Matters More Than Ever</h2>
      <p>In 2024, JavaScript performance optimization is crucial for user experience, SEO rankings, and business success. Let's explore the latest techniques and tools.</p>
      
      <h2>Modern Bundling Strategies</h2>
      
      <h3>1. Code Splitting with Dynamic Imports</h3>
      <pre><code>// Route-based splitting
const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));

function App() {
  return (
    &lt;Router&gt;
      &lt;Suspense fallback={&lt;LoadingSpinner /&gt;}&gt;
        &lt;Routes&gt;
          &lt;Route path="/" element={&lt;HomePage /&gt;} /&gt;
          &lt;Route path="/about" element={&lt;AboutPage /&gt;} /&gt;
        &lt;/Routes&gt;
      &lt;/Suspense&gt;
    &lt;/Router&gt;
  );
}</code></pre>
      
      <h3>2. Component-Level Splitting</h3>
      <pre><code>// Split heavy components
function Dashboard() {
  const [showAnalytics, setShowAnalytics] = useState(false);
  
  return (
    &lt;div&gt;
      &lt;button onClick={() =&gt; setShowAnalytics(true)}&gt;
        Load Analytics
      &lt;/button&gt;
      
      {showAnalytics && (
        &lt;Suspense fallback={&lt;div&gt;Loading analytics...&lt;/div&gt;}&gt;
          &lt;AnalyticsChart /&gt;
        &lt;/Suspense&gt;
      )}
    &lt;/div&gt;
  );
}

const AnalyticsChart = lazy(() => 
  import('./AnalyticsChart').then(module => ({
    default: module.AnalyticsChart
  }))
);</code></pre>
      
      <h2>Runtime Optimizations</h2>
      
      <h3>1. Efficient DOM Manipulation</h3>
      <pre><code>// Bad: Multiple DOM updates
function updateList(items) {
  items.forEach(item => {
    document.getElementById('list').innerHTML += \`&lt;li&gt;\${item}&lt;/li&gt;\`;
  });
}

// Good: Batch DOM updates
function updateList(items) {
  const fragment = document.createDocumentFragment();
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    fragment.appendChild(li);
  });
  document.getElementById('list').appendChild(fragment);
}</code></pre>
      
      <h3>2. Debouncing and Throttling</h3>
      <pre><code>// Debounced search
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => clearTimeout(handler);
  }, [value, delay]);
  
  return debouncedValue;
}

// Usage
function SearchInput() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  
  useEffect(() => {
    if (debouncedQuery) {
      performSearch(debouncedQuery);
    }
  }, [debouncedQuery]);
  
  return (
    &lt;input 
      value={query}
      onChange={(e) =&gt; setQuery(e.target.value)}
      placeholder="Search..."
    /&gt;
  );
}</code></pre>
      
      <h2>Memory Management</h2>
      
      <h3>1. Avoiding Memory Leaks</h3>
      <pre><code>// Cleanup event listeners
useEffect(() => {
  function handleScroll() {
    // Handle scroll
  }
  
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

// Cleanup intervals
useEffect(() => {
  const interval = setInterval(() => {
    // Update data
  }, 1000);
  
  return () => clearInterval(interval);
}, []);</code></pre>
      
      <h3>2. Efficient Data Structures</h3>
      <pre><code>// Use Maps for frequent lookups
const userCache = new Map();

function getUser(id) {
  if (userCache.has(id)) {
    return userCache.get(id);
  }
  
  const user = fetchUser(id);
  userCache.set(id, user);
  return user;
}

// Use Sets for unique values
const uniqueIds = new Set();
items.forEach(item => uniqueIds.add(item.id));
const uniqueItems = [...uniqueIds];</code></pre>
      
      <h2>Web Workers for Heavy Computation</h2>
      
      <h3>Main Thread</h3>
      <pre><code>// worker.js
self.onmessage = function(e) {
  const { data, operation } = e.data;
  
  switch(operation) {
    case 'process-data':
      const result = processLargeDataset(data);
      self.postMessage({ result });
      break;
    case 'calculate':
      const calculation = performHeavyCalculation(data);
      self.postMessage({ calculation });
      break;
  }
};

// main.js
const worker = new Worker('worker.js');

worker.postMessage({
  operation: 'process-data',
  data: largeDataset
});

worker.onmessage = function(e) {
  const { result } = e.data;
  updateUI(result);
};</code></pre>
      
      <h2>Modern Performance APIs</h2>
      
      <h3>1. Performance Observer</h3>
      <pre><code>// Monitor Core Web Vitals
function observePerformance() {
  // Largest Contentful Paint
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      console.log('LCP:', entry.startTime);
    }
  }).observe({ entryTypes: ['largest-contentful-paint'] });
  
  // First Input Delay
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      console.log('FID:', entry.processingStart - entry.startTime);
    }
  }).observe({ entryTypes: ['first-input'] });
}</code></pre>
      
      <h3>2. Intersection Observer for Lazy Loading</h3>
      <pre><code>function LazyImage({ src, alt, ...props }) {
  const [imageSrc, setImageSrc] = useState(null);
  const imgRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => observer.disconnect();
  }, [src]);
  
  return (
    &lt;img
      ref={imgRef}
      src={imageSrc || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiLz48L3N2Zz4='}
      alt={alt}
      {...props}
    /&gt;
  );
}</code></pre>
      
      <h2>Build-Time Optimizations</h2>
      
      <h3>1. Tree Shaking</h3>
      <pre><code>// Instead of importing entire library
import _ from 'lodash';

// Import only what you need
import { debounce, throttle } from 'lodash';

// Or use ES modules
import debounce from 'lodash/debounce';</code></pre>
      
      <h3>2. Bundle Analysis</h3>
      <pre><code>// webpack-bundle-analyzer
npm install --save-dev webpack-bundle-analyzer

// Add to package.json
{
  "scripts": {
    "analyze": "npx webpack-bundle-analyzer build/static/js/*.js"
  }
}</code></pre>
      
      <h2>Performance Monitoring</h2>
      
      <h3>Real User Monitoring</h3>
      <pre><code>// Custom performance tracking
function trackPerformance(name, fn) {
  return async (...args) => {
    const start = performance.now();
    const result = await fn(...args);
    const end = performance.now();
    
    // Send to analytics
    analytics.track('performance', {
      operation: name,
      duration: end - start,
      timestamp: Date.now()
    });
    
    return result;
  };
}

// Usage
const optimizedFetch = trackPerformance('api-call', fetch);</code></pre>
      
      <h2>Conclusion</h2>
      <p>JavaScript performance optimization in 2024 requires a multi-faceted approach combining modern tooling, efficient coding practices, and continuous monitoring. Focus on:</p>
      
      <ul>
        <li>Smart code splitting and lazy loading</li>
        <li>Efficient DOM manipulation and memory management</li>
        <li>Leveraging modern APIs and Web Workers</li>
        <li>Continuous performance monitoring</li>
      </ul>
      
      <p>Remember: premature optimization is the root of all evil, but informed optimization based on real metrics is the path to success.</p>
    `,
    date: '2024-01-08',
    category: 'JavaScript',
    tags: ['JavaScript', 'Performance', 'Optimization', 'Web Development'],
    readTime: 15,
    image: '/images/js-performance-blog.jpg'
  }
];

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Return all blog posts sorted by date (newest first)
    const sortedPosts = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    return Response.json(sortedPosts, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
      }
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return Response.json(
      { error: 'Failed to fetch blog posts' }, 
      { status: 500 }
    );
  }
}