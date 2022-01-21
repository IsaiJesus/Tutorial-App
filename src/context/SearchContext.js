import { createContext, useState } from 'react';

const SearchContext = createContext();

const SearchProvider = ({children}) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const data = { searchField, handleChange }

  return(
    <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
  )
}

export {SearchProvider}
export default SearchContext;