
import { motion } from "motion/react";

const About = () => {
    return (
        <section id="about" className="py-32 bg-white">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                {/* Left Video Placeholder */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative group cursor-pointer"
                    >
                        {/* Abstract decorative background instead of actual video */}
                        <div className="absolute inset-0 bg-linear-to-br from-gray-200 to-gray-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-black border-b-8 border-b-transparent ml-1"></div>
                            </div> */}
                        </div>
                        <div className="absolute bottom-6 left-6 max-w-xs">
                            <p className="text-sm font-medium text-gray-500 mb-1">About Me</p>
                            <p className="text-xl font-serif text-black leading-tight">Engineering has always been more than just a job.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Right Stats */}
                <div>
                    <div className="mb-12">
                        <h2 className="text-5xl font-serif mb-8 text-black">Passion <span className="italic text-gray-400">&</span> Precision</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            I specialize in building digital products that balance aesthetic appeal with technical robustness. With over 5 years of experience, I've helped transformative brands tell their story through the web.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-12">
                        <div className="border-t border-gray-200 pt-6">
                            <h3 className="text-6xl font-serif font-bold text-black mb-2">+320</h3>
                            <p className="text-gray-500">Projects successfully completed for clients worldwide.</p>
                        </div>
                        <div className="border-t border-gray-200 pt-6">
                            <h3 className="text-6xl font-serif font-bold text-black mb-2">+280</h3>
                            <p className="text-gray-500">Happy clients ranging from startups to Fortune 500s.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
