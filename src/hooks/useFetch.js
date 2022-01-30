import { useState, useEffect } from 'react';

const useFetch = () => {
  const [tutorials, setTutorials] = useState([]);

  const getData = async () => {
    const res = await fetch("https://suspicious-volhard-e36ba7.netlify.app/api/tutorials");
    const data = await res.json();
    setTutorials(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return { tutorials }
}

export default useFetch;