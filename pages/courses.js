import Head from 'next/head';
import contentData from '../data/content.json';

export default function Courses() {
    return (
        <>
            <Head>
                <title>Programs We Offer - {contentData.collegeName}</title>
            </Head>

            <div className="bg-gray-50 py-16 min-h-screen">
                <div className="container-custom max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Programs We Offer</h1>
                        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                            Explore our comprehensive academic streams, expertly designed to build a strong foundation for your higher education and future career.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {contentData.courses.map((faculty, index) => (
                            <div key={faculty.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transform transition-all hover:shadow-md">
                                <div className="bg-primary px-8 py-6 relative overflow-hidden">
                                    {/* Decorative gradient */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
                                    <h2 className="text-3xl font-bold text-white relative z-10 flex items-center">
                                        <span className="bg-white/20 text-white rounded-lg px-3 py-1 mr-4 text-xl">0{index + 1}</span>
                                        {faculty.name}
                                    </h2>
                                    <p className="text-primary-100 mt-2 text-sm sm:text-base relative z-10 opacity-90">{faculty.description}</p>
                                </div>

                                <div className="p-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {faculty.tracks.map((track, tIndex) => (
                                            <div key={tIndex} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                                <h3 className="text-xl font-bold text-primary mb-4 pb-2 border-b border-gray-200 flex items-center">
                                                    <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                                                    {track.name}
                                                </h3>
                                                <ul className="space-y-3">
                                                    {track.subjects.map((subject, sIndex) => {
                                                        const isCompulsory = subject.includes("(Compulsory");
                                                        return (
                                                            <li key={sIndex} className={`flex items-start text-sm sm:text-base ${isCompulsory ? 'text-gray-500 italic' : 'text-gray-700'}`}>
                                                                <span className="mr-3 mt-1 text-primary/50 text-xs">&#9642;</span>
                                                                <span className="flex-1 leading-snug">{subject}</span>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center bg-primary/5 rounded-2xl p-8 border border-primary/10">
                        <h3 className="text-2xl font-bold text-primary mb-3">Ready to join our diverse community?</h3>
                        <p className="text-gray-600 mb-6 max-w-xl mx-auto">Admissions for the upcoming academic session are currently open. Apply online today.</p>
                        <a href="/admission" className="btn-primary inline-flex items-center px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
