import { useState, useEffect } from 'react';

const Search = ({ searchField }) => {
  const [tutorials, setTutorials] = useState([]);

  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/tutorials");
    const data = await res.json();
    setTutorials(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredTutorials = tutorials.filter((tutorial) => {
    return tutorial.title.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div
      className={
        filteredTutorials.length === 0 || searchField === ""
          ? "hidden"
          : "rounded-md shadow-md flex flex-col p-3 bg-white absolute top-12 w-full"
        }
    >
      {filteredTutorials.map((tutorial) => (
        <a
          key={tutorial._id}
          target="_blank"
          rel="noreferrer"
          href={tutorial.url}
          className="hover:underline p-1 truncate font-semibold"
        >
          {tutorial.title}
        </a>
      ))}
    </div>
  );
};

export default Search;
