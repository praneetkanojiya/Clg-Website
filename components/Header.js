import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import contentData from '../data/content.json';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Courses', href: '/courses' },
        { name: 'Admission', href: '/admission' },
        { name: 'Notice Board', href: '/notices' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-primary text-white text-xs sm:text-sm py-2">
                <div className="container-custom flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                    <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
                        <span>&#9993; {contentData.contact.email}</span>
                        <span>&#9742; {contentData.contact.phone}</span>
                    </div>
                    <div className="flex space-x-3">
                        <a href="#" className="hover:text-secondary transition-colors">Facebook</a>
                        <a href="#" className="hover:text-secondary transition-colors">Twitter</a>
                        <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="container-custom py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 sm:space-x-3 w-[80%] sm:w-auto">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 relative overflow-hidden rounded-full border-2 border-primary shrink-0">
                            <Image
                                src="http://latelkcollege.liveblog365.com/wp-content/uploads/2025/05/Navy-Gold-Modern-Circle-Class-Logo-150x150.png"
                                alt="Late Laxmilal Kanojiya Junior College Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                            <h1 className="text-sm sm:text-xl md:text-2xl font-bold text-primary leading-tight truncate">
                                Late Laxmilal Kanojiya<br className="hidden sm:block" />
                                <span className="sm:hidden"> </span>
                                <span className="text-secondary text-xs sm:text-sm md:text-base font-semibold">Junior College</span>
                            </h1>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} className="font-medium text-gray-700 hover:text-primary transition-colors">
                                {item.name}
                            </Link>
                        ))}
                        <Link href="/admission" className="btn-secondary">
                            Apply Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-primary focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Panel */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 bg-gray-50 rounded-lg p-4 shadow-inner">
                        <div className="flex flex-col space-y-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block font-medium text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-200 last:border-0"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <Link href="/admission" className="btn-secondary block text-center w-full">
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
