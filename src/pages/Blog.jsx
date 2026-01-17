import BlogHeader from '../components/BlogHeader';
import BlogCard from '../components/BlogCard';
import Contact from '../components/Contact';
import { useCachedArticles } from '../hooks/useCachedArticles';

const Blog = () => {
    const { articles, loading, error } = useCachedArticles();

    return (
        <div className="min-h-screen bg-gray-50">
            <BlogHeader />

            {/* Hero Section */}
            <section className="bg-white text-black py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
                        Thoughts & Insights
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Articles about web development, productivity, and building cool things on the internet.
                    </p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    {loading && (
                        <div className="flex justify-center items-center py-20">
                            <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
                        </div>
                    )}

                    {error && (
                        <div className="text-center py-20">
                            <p className="text-red-500 text-lg">{error}</p>
                            <p className="text-gray-500 mt-2">Please try again later.</p>
                        </div>
                    )}

                    {!loading && !error && articles.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No articles found.</p>
                        </div>
                    )}

                    {!loading && !error && articles.length > 0 && (
                        {alert(articles)}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {articles.map((article) => (
                                <BlogCard key={article.id} article={article} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Contact Section */}
            <Contact />
        </div>
    );
};

export default Blog;
