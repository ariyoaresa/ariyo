
import { motion } from "motion/react";

const projects = [
    {
        title: "AI Powered Workspace",
        category: "Full Stack & AI Development",
        url: "https://beta.vision-board.tech"
    },
    {
        title: "Educational Platform",
        category: "Full Stack & API Integration",
        url: "https://nuesapedia.vercel.app"
    },
    {
        title: "Cultural & Language Platform",
        category: "Full Stack Web Application",
        url: "https://awalalasa.app"
    },
    {
        title: "NGO Web Platform",
        category: "Full Stack Engineering",
        url: "https://mikaelsoninitiative.org"
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="px-3 py-1 border border-gray-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 inline-block">Full Stack Work</span>
                        <h2 className="text-4xl font-serif max-w-lg leading-tight">Explore my portfolio of full stack web applications.</h2>
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
                                <img
                                    src={project.image || `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`}
                                    alt={project.title}
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover object-top opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-85"
                                />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 bg-linear-to-t from-black/85 via-black/40 to-transparent">
                                    <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">{project.category}</span>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-3xl font-bold font-serif text-white group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
                                        <span className="text-white/70 group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
                                            ↗
                                        </span>
                                    </div>
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
