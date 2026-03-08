import Head from 'next/head';
import contentData from '../data/content.json';

export default function Courses() {
    return (
        <>
            <Head>
                <title>Courses - {contentData.collegeName}</title>
            </Head>

            <div className="bg-gray-100 py-16">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h1 className="section-title">Programs We Offer</h1>
                        <p className="text-gray-600 mt-4 text-lg">
                            Explore our diverse range of academic streams designed to set the foundation for your future career.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {contentData.courses.map((course) => (
                            <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="h-48 bg-primary relative">
                                    {/* Decorative background pattern */}
                                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
                                    <div className="absolute bottom-4 left-4 text-secondary text-5xl font-bold opacity-30">
                                        0{contentData.courses.indexOf(course) + 1}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{course.name}</h3>
                                    <p className="text-gray-600 mb-6">{course.description}</p>
                                    <button className="text-primary font-semibold hover:text-primary-dark tracking-wide">
                                        VIEW SYLLABUS &rarr;
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
