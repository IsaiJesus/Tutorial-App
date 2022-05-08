import { useState, useContext } from 'react';
import SearchContext from 'context/SearchContext'; 
import { useRouter } from 'next/router';

const FormPresentation = () => { 

  const { setSearch } = useContext(SearchContext);
  const router = useRouter();

  const [change, setChange] = useState("");

  const handleChange = (e) => {
    setChange(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (change === "") return;

    setSearch(change);
    setChange("");
    router.push("/search");
  };

  return (
    <form className="w-full border flex items-center rounded-lg">
      <button
        onClick={handleSubmit}
        className="fas fa-search text-blue-800 hover:text-black w-1/12 py-3 text-center border-r"
      ></button>
      <input
        onChange={handleChange}
        placeholder="Search for tutorial"
        className="w-11/12 py-3 pl-3 rounded-lg outline-none"
      />
    </form>
  );
};

export default FormPresentation;
