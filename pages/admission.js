import Head from 'next/head';
import contentData from '../data/content.json';

export default function Admission() {
    return (
        <>
            <Head>
                <title>Admission - {contentData.collegeName}</title>
            </Head>

            <div className="bg-primary text-white py-16">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold">Admission</h1>
                    <p className="mt-4 text-lg text-primary-light">Join our legacy of academic excellence.</p>
                </div>
            </div>

            <div className="container-custom py-16">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4">Admission Inquiry Form</h2>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="John" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="Doe" required />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="john@example.com" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="+91 XXXXXXXXXX" required />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Interested Stream *</label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" required>
                                <option value="">Select a Stream</option>
                                {contentData.courses.map((course) => (
                                    <option key={course.id} value={course.id}>{course.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Previous School/College</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="Name of institution" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Additional Message or Query</label>
                            <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="Your message here..."></textarea>
                        </div>

                        <div>
                            <button type="submit" className="w-full btn-primary py-3 text-lg">
                                Submit Application Inquiry
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 text-center mt-4">
                            Our admission team will contact you within 2 working days.
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}
