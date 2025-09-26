import { blogPosts } from '../route.js';

export async function GET(request, { params }) {
  try {
    const slug = params.slug;
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Find the blog post by slug
    const post = blogPosts.find(p => p.slug === slug);
    
    if (!post) {
      return Response.json(
        { error: 'Blog post not found' }, 
        { status: 404 }
      );
    }
    
    return Response.json(post, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
      }
    });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return Response.json(
      { error: 'Failed to fetch blog post' }, 
      { status: 500 }
    );
  }
}
