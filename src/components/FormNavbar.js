import { useState, useContext } from 'react';
import SearchContext from 'context/SearchContext';
import { useRouter } from 'next/router';
import Search from './Search';

const FormNavbar = ({handleToggleMenu}) => {

  const { setSearch } = useContext(SearchContext);
  const router = useRouter();

  const [change, setChange] = useState("");

  const handleChange = (e) => {
    setChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(change === "") return; 

    handleToggleMenu();
    setSearch(change);
    setChange("");
    router.push("/search");
  }

  return (
    <form className="flex bg-white mb-2 sm:mb-0 sm:ml-8 sm:w-full rounded-full relative">
      <button
        onClick={handleSubmit}
        className="fas fa-search text-blue-800 hover:text-black pl-3 pr-1"
      ></button>
      <input
        type="text"
        placeholder="Buscar tutorial"
        autoComplete="off"
        className="rounded-full outline-none py-2 px-3 w-full placeholder-gray-500 text-black"
        onChange={handleChange}
        value={change}
      />
      <Search searchField={change} />
    </form>
  );
};

export default FormNavbar;
