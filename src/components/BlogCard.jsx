const BlogCard = ({ article }) => {
    const {
        title,
        description,
        url,
        social_image,
        readable_publish_date,
        reading_time_minutes,
        tag_list,
    } = article;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
        >
            {/* Cover Image */}
            <div className="relative overflow-hidden aspect-video">
                <img
                    src={social_image || 'https://via.placeholder.com/800x400?text=No+Image'}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Tags */}
                {tag_list && tag_list.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                        {tag_list.slice(0, 3).map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-gray-600 transition-colors line-clamp-2">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{readable_publish_date}</span>
                    <span>{reading_time_minutes} min read</span>
                </div>
            </div>
        </a>
    );
};

export default BlogCard;
