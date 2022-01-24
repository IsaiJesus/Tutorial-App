import useFetch from "hooks/useFetch";

const Search = ({ searchField }) => {
  const { tutorials } = useFetch();

  const filteredTutorials = tutorials.filter((tutorial) => {
    return tutorial.title.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div
      className={
        filteredTutorials.length === 0 || searchField === ""
          ? "hidden"
          : "rounded-md shadow-md flex flex-col p-3 bg-white absolute top-12 max-h-56 w-full overflow-y-auto"
      }
    >
      {filteredTutorials.map((tutorial) => (
        <a
          key={tutorial._id}
          target="_blank"
          rel="noreferrer"
          href={tutorial.url}
          className="hover:underline p-1 font-semibold"
        >
          <p className="truncate">{tutorial.title}</p>
        </a>
      ))}
    </div>
  );
};

export default Search;
