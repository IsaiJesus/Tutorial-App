import { useState, useContext } from 'react';
import SearchContext from 'context/SearchContext'; 
import { useRouter } from 'next/router';

const Presentation = () => {
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
    <div className="grid grid-cols-1 sm:grid-cols-12 items-center pt-4 sm:pt-12">
      <div className="sm:col-span-7 sm:col-start-2 sm:col-end-8 flex flex-col justify-center p-5">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Look for tutorials for any topic.
        </h1>
        <h2 className="text-lg md:text-3xl font-semibold mb-5">
          Or add one for other people to see.
        </h2>
        <form className="w-full border flex items-center rounded-lg">
          <button
            onClick={handleSubmit}
            className="fas fa-search text-blue-800 hover:text-black w-1/12 py-3 text-center border-r"
          ></button>
          <input
            onChange={handleChange}
            placeholder="Buscar tutorial"
            className="w-11/12 py-3 pl-3 rounded-lg outline-none"
          />
        </form>
      </div>
      <div className="sm:col-span-4 sm:col-start-8">
        <img src="/images/homepage.png" alt="Busca tutoriales" />
      </div>
    </div>
  );
};

export default Presentation;