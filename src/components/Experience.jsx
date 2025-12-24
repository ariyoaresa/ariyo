
const experiences = [
    { role: "Freelancer", company: "Ariz Tech", date: "2022 - 2024" },
    { role: "Frontend Developer", company: "RentEase NG", date: "2025 - Now" },
    { role: "Frontend Enginner", company: "Mikaelson Initiative Org", date: "2025 - Now" },
];

const Experience = () => {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <span className="px-3 py-1 border border-gray-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 inline-block">Experience</span>
                    <h2 className="text-4xl font-serif max-w-lg">A Yearly snapshot of my technical growth.</h2>
                </div>

                <div className="border-t border-black">
                    {experiences.map((exp, index) => (
                        <div key={index} className="group border-b border-gray-200 py-10 flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors px-4 cursor-pointer">
                            <div className="md:w-1/3">
                                <h3 className="text-xl font-bold font-serif group-hover:translate-x-2 transition-transform duration-300">{exp.role}</h3>
                                <p className="text-gray-500 text-sm mt-1">{exp.company}</p>
                            </div>
                            <div className="md:w-1/3 hidden md:block">
                                <p className="text-gray-400 text-xs max-w-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                    Involved in the development and maintenance of web applications, ensuring a seamless user experience and efficient backend operations.
                                </p>
                            </div>
                            <div className="md:w-1/3 text-right mt-4 md:mt-0">
                                <span className="text-2xl font-serif font-medium">{exp.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
