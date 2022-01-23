import { createContext, useState } from 'react';

const SearchContext = createContext();

const SearchProvider = ({children}) => {
  /*const [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value.trim());
  };

  const data = { searchField, handleChange }*/

  const [search, setSearch] = useState("");

  const data = { search, setSearch }

  return(
    <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
  )
}

export {SearchProvider}
export default SearchContext;