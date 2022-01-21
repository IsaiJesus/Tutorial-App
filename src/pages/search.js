import { useState, useEffect, useContext } from 'react';
import SearchContext from 'context/SearchContext';
import Head from 'next/head';
import TitleSection from 'components/TitleSection';
import NotFound from 'components/NotFound';
import Tutorial from 'components/Tutorial';

const Search = () => {

  const { searchField } = useContext(SearchContext);
  
  const title = `Resultados de busqueda: ${searchField}`;

  const [tutorials, setTutorials] = useState([]);

  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/tutorials");
    const data = await res.json();
    setTutorials(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredProducts = tutorials.filter(
    tutorial => {
      return (
        tutorial
        .title
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  return (
    <div>
      <Head>
        <title>Resultados de busqueda: {searchField}</title>
      </Head>
      <div className="py-8 sm:py-14 px-5">
        <div className="mb-6">
          <TitleSection title={title}/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map(tutorial => (
            <Tutorial key={tutorial._id} {...tutorial}/>
          ))}
        </div>
      </div>
      <NotFound />
    </div>
  );
};

export default Search;