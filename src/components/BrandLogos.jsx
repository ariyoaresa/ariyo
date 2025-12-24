
const brands = ["Mikaelson Initiative Org", "Basecrow", "OAHS OSA", "RentEase NG"];

const BrandLogos = () => {
    return (
        <div className="py-12 border-y border-gray-100 overflow-hidden bg-white">
            <div className="container mx-auto px-6 mb-4">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-400">Trusted By</span>
            </div>
            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center space-x-12 pr-12 min-w-full shrink-0">
                    {[...brands, ...brands, ...brands].map((brand, index) => (
                        <span key={index} className="text-3xl font-serif font-bold text-gray-300 hover:text-black transition-colors duration-300 cursor-default px-8">
                            {brand}
                        </span>
                    ))}
                </div>
                <div aria-hidden="true" className="animate-marquee whitespace-nowrap flex items-center space-x-12 pr-12 min-w-full shrink-0">
                    {[...brands, ...brands, ...brands].map((brand, index) => (
                        <span key={index} className="text-3xl font-serif font-bold text-gray-300 hover:text-black transition-colors duration-300 cursor-default px-8">
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandLogos;
