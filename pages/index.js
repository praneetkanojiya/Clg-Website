import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import contentData from '../data/content.json';

export default function Home() {
    const { home, notices } = contentData;

    return (
        <>
            <Head>
                <title>Home - {contentData.collegeName}</title>
            </Head>

            {/* Hero Section */}
            <section className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center bg-gray-900 text-white overflow-hidden mt-0 sm:mt-0">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="http://latelkcollege.liveblog365.com/wp-content/uploads/2025/05/DSC_4763-scaled.jpg"
                        alt="Campus Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full mt-4 sm:mt-0">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 slide-in-bottom leading-tight">{home.heroTitle}</h1>
                    <p className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 font-light text-gray-200 px-2 sm:px-0">{home.heroSubtitle}</p>
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center items-center">
                        <Link href="/admission" className="btn-secondary text-base sm:text-lg px-8 py-3 w-full sm:w-auto text-center">
                            Apply Now
                        </Link>
                        <Link href="/courses" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-colors duration-200 w-full sm:w-auto text-center">
                            Explore Courses
                        </Link>
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container-custom grid gap-10 md:grid-cols-2 md:gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="section-title">About Our College</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {contentData.organization} is dedicated to fostering an environment where students can thrive academically and personally. {home.aboutSnippet}
                        </p>
                        <Link href="/about" className="text-primary font-semibold hover:text-secondary-dark inline-flex items-center transition-colors">
                            Read More
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="bg-primary/5 p-6 rounded-lg text-center transform hover:-translate-y-1 transition-transform">
                            <div className="text-4xl text-primary mb-2">&#x1F393;</div>
                            <h3 className="font-bold text-gray-800">Expert Faculty</h3>
                        </div>
                        <div className="bg-secondary/10 p-6 rounded-lg text-center transform hover:-translate-y-1 transition-transform">
                            <div className="text-4xl text-secondary mb-2">&#128218;</div>
                            <h3 className="font-bold text-gray-800">Library</h3>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-lg text-center transform hover:-translate-y-1 transition-transform">
                            <div className="text-4xl text-primary mb-2">&#9878;</div>
                            <h3 className="font-bold text-gray-800">Labs</h3>
                        </div>
                        <div className="bg-secondary/10 p-6 rounded-lg text-center transform hover:-translate-y-1 transition-transform">
                            <div className="text-4xl text-secondary mb-2">&#127942;</div>
                            <h3 className="font-bold text-gray-800">Sports</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Notices Section */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-10">
                        <h2 className="section-title">Latest Notices & Announcements</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {notices.slice(0, 2).map((notice) => (
                            <div key={notice.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <span className="text-sm font-semibold text-secondary mb-2 block">{new Date(notice.date).toLocaleDateString()}</span>
                                {notice.link ? (
                                    <Link href={notice.link}>
                                        <h3 className="text-xl font-bold text-primary hover:text-secondary mb-2 cursor-pointer transition-colors">{notice.title}</h3>
                                    </Link>
                                ) : (
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{notice.title}</h3>
                                )}
                                <p className="text-gray-600 mb-4">{notice.content}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/notices" className="btn-primary">
                            View All Notices
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
