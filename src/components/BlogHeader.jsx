import { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogHeader = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className='bg-white text-black relative'>
            <div className="container mx-auto px-6 py-6">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-6 h-6 bg-black rounded-sm"></div>
                        <span className="text-xl font-bold tracking-tight font-serif">Ariyo Aresa.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <span className="text-sm font-medium tracking-widest uppercase text-gray-400">
                            Blog
                        </span>
                        <Link
                            to="/"
                            className="px-6 py-2 rounded-full border border-gray-600 text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300"
                        >
                            Back to Home
                        </Link>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-6 h-0.5 bg-black mt-1.5 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-6 h-0.5 bg-black mt-1.5 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        ></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <span className="text-lg font-medium tracking-widest uppercase text-gray-400">
                        Blog
                    </span>
                    <Link
                        to="/"
                        onClick={handleLinkClick}
                        className="px-8 py-3 rounded-full border-2 border-black text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default BlogHeader;
