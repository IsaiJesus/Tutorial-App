import { useState, useEffect } from 'react';

const useFetch = () => {
  const [tutorials, setTutorials] = useState([]);

  const getData = async () => {
    const res = await fetch("https://tutorial-app-isai.netlify.app/api/tutorials");
    const data = await res.json();
    setTutorials(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return { tutorials }
}

export default useFetch;