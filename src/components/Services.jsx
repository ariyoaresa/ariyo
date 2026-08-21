
const services = [
    { title: "Full Stack Web Apps", desc: "End-to-end web applications built with modern frameworks, robust state management, and clean architecture.", link: "#" },
    { title: "Backend & API Architecture", desc: "Scalable RESTful & GraphQL APIs, secure authentication, database modeling (SQL/NoSQL), and integrations.", link: "#" },
    { title: "Frontend Engineering", desc: "High-performance, responsive interfaces with micro-interactions, accessibility, and modern UI design systems.", link: "#" },
    { title: "SaaS & Cloud Deployment", desc: "Cloud infrastructure setup, CI/CD automation, serverless solutions, and performance optimization.", link: "#" },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 pr-12">
                        <span className="px-3 py-1 border border-gray-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 inline-block">Services</span>
                        <h2 className="text-4xl font-serif leading-tight mb-6">Full-Stack Solutions Tailored for Scale.</h2>
                        <p className="text-gray-500 mb-8">
                            From robust database foundations to polished, responsive interfaces, explore how I build complete web solutions.
                        </p>
                        <a href="#contact" className="px-8 py-3 bg-black text-white rounded-full text-sm font-bold hover:bg-gray-800 transition-colors inline-block">
                            See All
                        </a>
                    </div>

                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-xl flex flex-col justify-between min-h-[250px] transition-all duration-300 group hover:-translate-y-1 hover:bg-black hover:text-white border border-gray-200"
                            >
                                <div>
                                    <h3 className="text-xl font-bold mb-3 font-serif">{service.title}</h3>
                                    <p className={`text-sm ${service.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                                        {service.desc}
                                    </p>
                                </div>
                                <div className="flex justify-end">
                                    <span className="text-2xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform hover:text-white">
                                        ↗
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
