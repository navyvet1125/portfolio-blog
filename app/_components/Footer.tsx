import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className='bg-blue-800'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-white text-sm">&copy; {new Date().getFullYear()} Evan J. Washington</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="https://www.linkedin.com/in/justejw/" className="text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <Image src="linkedin.svg" alt="LinkedIn" width={24} height={24}/>
                            </Link>
                            <Link href="https://www.instagram.com/evn_j82/" className="text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <Image src="instagram.svg" alt="Instagram"  width={24} height={24}/>
                            </Link>
                            <Link href="https://github.com/navyvet1125" className="text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <Image src="github.svg" alt="Instagram"  width={24} height={24}/>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;