import { useState, useEffect, useContext } from "react";
import SearchContext from "context/SearchContext";
import Head from "next/head";
import TitleSection from "components/TitleSection";
import NotFound from "components/NotFound";
import Tutorial from "components/Tutorial";
import { useRouter } from "next/router";

const Search = () => {
  const { search } = useContext(SearchContext);
  const router = useRouter();

  const title = `Search results: ${search}`;

  const [tutorials, setTutorials] = useState([]);

  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/tutorials");
    const data = await res.json();
    setTutorials(data);
  };

  useEffect(() => {
    if(search === ""){
      router.back(); 
    }
    
    getData();
  }, []);

  const filteredTutorials = tutorials.filter((tutorial) => {
    return tutorial.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <Head>
        <title>Search results: {search}</title>
      </Head>
      {filteredTutorials.length === 0 || search === "" ? (
        <NotFound />
      ) : (
        <div className="py-8 sm:py-14 px-5">
          <div className="mb-6">
            <TitleSection title={title} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredTutorials.map((tutorial) => (
              <Tutorial key={tutorial._id} {...tutorial} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;

/*{filteredTutorials.length === 0 || search === "" ? (
  <NotFound />
) : (
  <div className="py-8 sm:py-14 px-5">
    <div className="mb-6">
      <TitleSection title={title} />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredTutorials.map((tutorial) => (
        <Tutorial key={tutorial._id} {...tutorial} />
      ))}
    </div>
  </div>
)}*/