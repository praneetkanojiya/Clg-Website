import Head from 'next/head';
import contentData from '../data/content.json';

export default function Contact() {
    const { contact } = contentData;

    return (
        <>
            <Head>
                <title>Contact Us - {contentData.collegeName}</title>
            </Head>

            <div className="bg-primary text-white py-16">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                    <p className="mt-4 text-lg text-primary-light">We're here to help and answer any question you might have.</p>
                </div>
            </div>

            <div className="container-custom py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="section-title mb-8">Get in Touch</h2>
                        <div className="bg-gray-50 p-8 rounded-lg space-y-8 h-full">
                            <div className="flex items-start">
                                <div className="bg-white p-3 rounded-full text-secondary text-xl mr-4 shadow-sm">&#128205;</div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">Address</h3>
                                    <p className="text-gray-600 mt-1">{contact.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-white p-3 rounded-full text-secondary text-xl mr-4 shadow-sm">&#9742;</div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">Phone</h3>
                                    <a href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`} className="text-primary hover:text-secondary mt-1 block transition-colors">{contact.phone}</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-white p-3 rounded-full text-secondary text-xl mr-4 shadow-sm">&#9993;</div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">Email</h3>
                                    <a href={`mailto:${contact.email}`} className="text-primary hover:text-secondary mt-1 block transition-colors">{contact.email}</a>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h3 className="font-bold text-gray-800 mb-4">Office Hours</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex justify-between"><span>Monday - Friday</span> <span>8:00 AM - 4:00 PM</span></li>
                                    <li className="flex justify-between"><span>Saturday</span> <span>9:00 AM - 1:00 PM</span></li>
                                    <li className="flex justify-between"><span>Sunday</span> <span className="text-red-500">Closed</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
                        <form action="https://api.web3forms.com/submit" method="POST" className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 space-y-6">
                            <input type="hidden" name="access_key" value="2906f8ef-1350-465e-b1e7-1f94838784c8" />
                            {/* Optional: Add a subject to the email */}
                            <input type="hidden" name="subject" value="New Contact Form Submission from Website" />
                            {/* Optional: Add a redirect URL after submission
                               <input type="hidden" name="redirect" value="https://latelkcollege.liveblog365.com/success" /> 
                            */}

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                <input type="text" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="Enter your full name" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="Enter your email" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input type="text" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="How can we help?" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea rows={5} name="message" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="Enter your message here..." required></textarea>
                            </div>

                            <button type="submit" className="w-full btn-primary py-3 text-lg mt-4">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
