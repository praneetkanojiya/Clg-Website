import Head from 'next/head';
import Image from 'next/image';
import contentData from '../data/content.json';

export default function About() {
    return (
        <>
            <Head>
                <title>About Us - {contentData.collegeName}</title>
            </Head>

            {/* Page Header */}
            <div className="bg-primary text-white py-16">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold">About Us</h1>
                    <p className="mt-4 text-lg text-primary-light">Discover our history, mission, and vision.</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="section-title">Our History</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Founded under the aegis of {contentData.organization}, the Late Laxmilal Kanojiya Junior College has been a beacon of knowledge and excellence. We started with a vision to provide accessible, high-quality education to students from all walks of life.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Over the years, our campus has grown not just in infrastructure but in the academic prowess of our faculty and alumni. Our dedication to holistic development ensures that every student who passes through our doors is prepared for the challenges of tomorrow.
                        </p>
                    </div>
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="http://latelkcollege.liveblog365.com/wp-content/uploads/2025/05/DSC_4742-scaled.jpg"
                            alt="College function"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="mt-20 grid md:grid-cols-2 gap-12">
                    <div className="bg-gray-50 p-8 rounded-lg border-t-4 border-primary">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                            <span className="text-secondary text-3xl mr-3">&#128161;</span> Our Mission
                        </h3>
                        <p className="text-gray-600">
                            To empower students with a robust foundation of knowledge and skills, enabling them to achieve their highest academic potential and become responsible citizens.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg border-t-4 border-secondary">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                            <span className="text-primary text-3xl mr-3">&#128065;</span> Our Vision
                        </h3>
                        <p className="text-gray-600">
                            To be a globally recognized institution of educational excellence, fostering innovation, leadership, and a lifelong commitment to learning.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
