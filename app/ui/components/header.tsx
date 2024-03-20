// components/Header.js

import Link from 'next/link';
import MainLogo from '../main-logo';

const Header = () => {
  return (
    <header className="bg-fff-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <MainLogo/>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className='text-black hover:text-gray-300'>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className='text-black hover:text-gray-300'>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className='text-black hover:text-gray-300'>
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className='text-black hover:text-gray-300'>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className='text-black hover:text-gray-300'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
