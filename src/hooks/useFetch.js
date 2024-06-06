import  { useState,useEffect  } from 'react'

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const url = `https://freetestapi.com/api/v1/${apiPath}?limit=6&query=${queryTerm}`

    useEffect(() => {
        async function fetchAnimals() {
          try {
            const response = await fetch(url);
         
            const data = await response.json();
            setData(data);
          } catch (error) {
            console.error(error);
          }
        }
        fetchAnimals();
      }, [url]);


      return { data }
}

