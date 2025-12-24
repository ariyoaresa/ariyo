
import { motion } from "motion/react";

const projects = [
    {
        title: "AI Powered Web App",
        category: "Full Stack Development",
        url: "https://wishcad.vercel.app"
    },
    {
        title: "Educational Platform",
        category: "Frontend Development & API integration",
        url: "https://nuesapedia.vercel.app"
    },
    {
        title: "Web3 Landing Page",
        category: "frontend development",
        url: "https://basecrow.com"
    },
    {
        title: "NGO Website",
        category: "Frontend Engineering",
        url: "https://mikaelsoninitiative.org"
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="px-3 py-1 border border-gray-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 inline-block">Development Work</span>
                        <h2 className="text-4xl font-serif max-w-lg leading-tight">Explore my portfolio of robust web solutions.</h2>
                    </div>
                    <a href="https://github.com/ariyoaresa" className="hidden md:inline-block text-sm font-bold border-b border-black pb-1 hover:text-gray-600 transition-colors">View on GitHub</a>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer block"
                        >
                            <div className="aspect-3/2 rounded-2xl overflow-hidden relative bg-gray-900">
                                <iframe
                                    src={project.url}
                                    className="absolute inset-0 w-[400%] h-[400%] scale-[0.25] origin-top-left border-0 pointer-events-none hover:blur-sm opacity-60 transition-opacity duration-500 group-hover:opacity-90"
                                    title={project.title}
                                    loading="lazy"
                                    scrolling="no"
                                />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 bg-linear-to-t from-black/80 to-transparent">
                                    <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">{project.category}</span>
                                    <h3 className="text-3xl font-bold font-serif text-white group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="text-sm font-bold border-b border-black pb-1">View all projects</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
