import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-12 pb-6">
            <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                    <h3 className="text-xl font-bold mb-4 text-secondary">Late Laxmilal Kanojiya Junior College</h3>
                    <p className="text-gray-300 text-sm mb-4">
                        Bahuuddeshiya Shikshan Sanstha. Providing quality education and inspiring minds for a better future.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4 text-secondary">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                        <li><Link href="/admission" className="hover:text-white transition-colors">Admission</Link></li>
                        <li><Link href="/notices" className="hover:text-white transition-colors">Notice Board</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4 text-secondary">Contact Us</h3>
                    <ul className="space-y-3 text-gray-300 text-sm list-none">
                        <li className="flex items-start">
                            <span className="mr-2">&#128205;</span>
                            <span>123 College Road, City Name, State, 123456</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">&#9742;</span>
                            <span>+91 (123) 456-7890</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">&#9993;</span>
                            <span>admissions@latelkcollege.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container-custom border-t border-primary-dark pt-6 text-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} Late Laxmilal Kanojiya Junior College. All rights reserved.</p>
            </div>
        </footer>
    );
}
