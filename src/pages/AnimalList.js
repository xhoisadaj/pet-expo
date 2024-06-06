
import { AnimalCard } from '../components';
import { useFetch } from '../hooks/useFetch';
import {  useNavigate } from "react-router-dom";
export const AnimalList = ({apiPath}) => {
  
  const {data : animals} = useFetch(apiPath);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  }

  return (
    <main>
<section>
<form onSubmit={handleSubmit}>
                <input type="text" id="search-navbar" name="search" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete="off" />
              </form>
</section>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
          {animals.map((animal) => (
            <AnimalCard key={animal.id} apiPath={apiPath} animal={animal} />
          ))} 
        </div>
      </section>
    </main>
  );
};
