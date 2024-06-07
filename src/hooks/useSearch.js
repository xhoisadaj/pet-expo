import { useState, useCallback } from 'react';

export const useSearch = (apiPath) => {
    const [queryTerm, setQueryTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searchError, setSearchError] = useState("");

    const handleSearch = async (event) => {
        event.preventDefault();
        const query = event.target.search.value;
        setQueryTerm(query);
        const url = `https://freetestapi.com/api/v1/${apiPath}?search=${query}`;
     

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.length === 0) {
                setSearchError("WE FOUND NOTHING FOR YOU! SEARCH SOMETHING ELSE");
            } else {
                setSearchError("");
            }
            setSearchResults(data);
        } catch (error) {
            console.error("An error occurred while searching.");
            setSearchError("An error occurred while searching.");
        }
    };

    const handleReset = useCallback(() => {
        setQueryTerm("");
        setSearchResults([]);
        setSearchError("");
    }, []);

    return { queryTerm, searchResults, searchError, handleSearch, handleReset };
};
