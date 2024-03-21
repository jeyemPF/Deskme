// components/Header.js

import Link from 'next/link';
import MainLogo from '../main-logo';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white flex justify-between items-center ">
     <div className="container  flex justify-between items-center bg-gray-400 " >

        <Link href="/">
          <MainLogo/>
        </Link>
        <nav>
          <ul className="flex space-x-4 flex-col">
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
