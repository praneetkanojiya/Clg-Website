import Head from 'next/head';
import contentData from '../data/content.json';

export default function Notices() {
    const { notices } = contentData;

    // Sort notices by date descending
    const sortedNotices = [...notices].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <>
            <Head>
                <title>Notice Board - {contentData.collegeName}</title>
            </Head>

            <div className="bg-gray-50 min-h-screen py-16">
                <div className="container-custom max-w-4xl mx-auto">
                    <div className="mb-12">
                        <h1 className="section-title">Notice Board</h1>
                        <p className="text-gray-600 mt-2">Stay updated with the latest announcements, schedules, and college news.</p>
                    </div>

                    <div className="space-y-6">
                        {sortedNotices.length > 0 ? (
                            sortedNotices.map((notice) => (
                                <div key={notice.id} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h2 className="text-xl font-bold text-primary">{notice.title}</h2>
                                        <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ml-4">
                                            {new Date(notice.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                                        </span>
                                    </div>
                                    <div className="text-gray-700 mt-4 whitespace-pre-wrap">
                                        {notice.content}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                                <p className="text-gray-500">No recent notices available.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
