import { useFetch } from "../hooks/useFetch"
import { AnimalCard } from "../components"
import { useSearchParams } from "react-router-dom"
import { useTitle } from "../hooks/useTitle";
export const Search = ({apiPath}) => {

const [searchParams] = useSearchParams();
const queryTerm = searchParams.get("q");

const {data: animals} = useFetch(apiPath, queryTerm);
useTitle(`Search results for ${queryTerm}`);
 
  return (
    <main>
          <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{animals.length === 0 ? `No result found for ${queryTerm}` : `Result for ${queryTerm}`}</p>
      </section>

    <section className='max-w-7xl mx-auto py-7'>
      <div className='flex justify-start flex-wrap'>
        {animals.map((animal) => (
          <AnimalCard key={animal.id} apiPath={apiPath} animal={animal} />
        ))} 
      </div>
    </section>
  </main>
  )
}
