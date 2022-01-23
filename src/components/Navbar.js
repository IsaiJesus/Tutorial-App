import Link from 'next/link';
import Image from 'next/image';
import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Search from '../components/Search';
import SearchContext from 'context/SearchContext';

const Navbar = () => {

  const { setSearch } = useContext(SearchContext);
  const router = useRouter();

  const [menuActive, setMenuActive] = useState(false);
  const [change, setChange] = useState("");

  const handleChange = (e) => {
    setChange(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(change === "") return; 

    setSearch(change);
    setChange("");
    router.push("/search");
  }

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
          className="fas fa-bars sm:hidden text-black hover:text-gray-300"
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
            <a className="text-white font-medium hover:text-blue-300 py-1">
              Education
            </a>
          </Link>
          <Link href="/sections/entertainment">
            <a className="text-white font-medium hover:text-blue-300 py-1">
              Entetertainment
            </a>
          </Link>
          <Link href="/sections/home">
            <a className="text-white font-medium hover:text-blue-300 py-1">
              Home
            </a>
          </Link>
        </div>
        <form className="flex bg-white mb-2 sm:mb-0 sm:ml-8 sm:w-full rounded-full relative">
          <button onClick={handleSubmit} className="fas fa-search text-blue-800 hover:text-black pl-3 pr-1"></button>
          <input
            type="text"
            placeholder="Buscar tutorial"
            autoComplete="off"
            className="rounded-full outline-none py-2 px-3 w-full placeholder-gray-500 text-black"
            onChange={handleChange}
          />
          <Search searchField={change}/>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;