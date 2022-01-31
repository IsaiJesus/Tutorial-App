import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import FormNavbar from './FormNavbar';

const Navbar = () => {

  const [menuActive, setMenuActive] = useState(false);

  //change the navbar to make it responsive
  const handleToggleMenu = () => {
    setMenuActive(!menuActive);
  }

  return (
    <nav className="flex flex-col sm:flex-row bg-blue-800 py-2 px-6 sm:items-center justify-between sm:space-x-12">
      <div className="w-full sm:w-auto flex justify-between">
        <Link href="/">
          <a>
            <Image
              width={65}
              height={65}
              src="/logos/logo.png"
              alt="comohacerlo"
            />
          </a>
        </Link>
        <button
          className="fas fa-bars sm:hidden text-black hover:text-gray-300 text-2xl"
          onClick={handleToggleMenu}
        ></button>
      </div>
      <div
        className={
          menuActive
            ? "flex flex-col sm:flex-row sm:items-center sm:space-x-12"
            : "hidden sm:flex sm:flex-row sm:items-center sm:space-x-12"
        }
      >
        <div className="flex flex-col sm:flex-row sm:space-x-8 my-4 sm:ml-8">
          <Link href="/sections/education">
            <a className="text-white font-medium hover:text-blue-300 py-1" onClick={handleToggleMenu}>
              Education
            </a>
          </Link>
          <Link href="/sections/entertainment">
            <a className="text-white font-medium hover:text-blue-300 py-1" onClick={handleToggleMenu}>
              Entetertainment
            </a>
          </Link>
          <Link href="/sections/home">
            <a className="text-white font-medium hover:text-blue-300 py-1" onClick={handleToggleMenu}>
              Home
            </a>
          </Link>
        </div>
        <FormNavbar handleToggleMenu={handleToggleMenu}/>
      </div>
    </nav>
  );
};

export default Navbar;