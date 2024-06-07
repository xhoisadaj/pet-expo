import { useState, useEffect } from 'react';

export const useFetch = (apiPath) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const url = `https://freetestapi.com/api/v1/${apiPath}?limit=6`;
     

        async function fetchAnimals() {
            try {
                const response = await fetch(url) 
                const data = await response.json();
                if (data.length === 0) {
                    setError("WE FOUND NOTHING FOR YOU! SEARCH SOMETHING ELSE");
                } else {
                    setError("");
                }
                setData(data);
            } catch (error) {
                console.error("An error occurred while fetching data.");
                setError("An error occurred while fetching data.");
            }
        }

        fetchAnimals();
    }, [apiPath]);

    return { data, error };
};
