import { Link } from 'react-router-dom';

const BlogHeader = () => {
    return (
        <header className='bg-white text-black'>
            <div className="container mx-auto px-6 py-6">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-6 h-6 bg-black rounded-sm"></div>
                        <span className="text-xl font-bold tracking-tight font-serif">Ariyo Aresa.</span>
                    </Link>

                    <div className="flex items-center gap-8">
                        <span className="text-sm font-medium tracking-widest uppercase text-gray-400">
                            Blog
                        </span>
                        <Link
                            to="/"
                            className="px-6 py-2 rounded-full border border-gray-600 text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default BlogHeader;
