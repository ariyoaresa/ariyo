
const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
                    <h2 className="text-5xl md:text-7xl font-serif leading-tight max-w-2xl">
                        Let's Connect <br /> There
                    </h2>
                    <a
                        href="mailto:ariyoaresa89@gmail.com"
                        className="mt-8 md:mt-0 px-8 py-3 rounded-full border border-gray-700 hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 group"
                    >
                        <span>Hire Me Now</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>

                <div className="grid md:grid-cols-4 gap-12 border-t border-gray-800 pt-16 text-sm text-gray-400">
                    <div className="md:col-span-1">
                        <a href="#" className="text-2xl font-bold text-white font-serif flex items-center gap-2 mb-4">
                            <div className="w-5 h-5 bg-white rounded-sm"></div>
                            Ariyo Aresa.
                        </a>
                        <p className="mb-4">Full Stack Engineering & Web Architecture.</p>
                        <div className="flex gap-4">
                            <a href="https://x.com/ariyoaresa" className="hover:text-white transition-colors">Twitter</a>
                            <a href="https://linkedin.com/in/ariyoaresa" className="hover:text-white transition-colors">LinkedIn</a>
                            <a href="https://instagram.com/ariyoaresa" className="hover:text-white transition-colors">Instagram</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Address</h4>
                        <p>No 3-5 Olorunlogbon quarters, Apata,<br />Ibadan, Nigeria</p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contact</h4>
                        <a href="mailto:ariyoaresa89@gmail.com">ariyoaresa89@gmail.com</a>
                        <a href="tel:+2347081134216">+234 708 113 4216</a>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Menu</h4>
                        <ul className="space-y-2">
                            <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#projects" className="hover:text-white transition-colors">Work</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 text-center text-xs text-gray-700">
                    &copy; {new Date().getFullYear()} Ariyo Aresa. All rights reserved.
                </div>
            </div>
        </section>
    );
};

export default Contact;
