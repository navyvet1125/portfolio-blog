import React from 'react';
import Link from 'next/link';

const Nav: React.FC = () => {
    return (
        <nav className="bg-white-800 bg-opacity-20 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-white font-bold text-xl">Evan J. Washington</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" className="text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            <Link href="#about" className="text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                            <Link href="#" className="text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
                            <Link href="#" className="text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                            <Link href="#" className="text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;