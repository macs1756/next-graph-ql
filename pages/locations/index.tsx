import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useEffect, useState } from "react";

function Locations() {

  const [currentPage, setCurrentPage] = useState<number>(1)

  const GET_LOCATIONS = gql`
  query getLocations {
    locations(page: ${currentPage}) {
      results {
        id
        name
      }
    }
  }
  `;

  const { loading, error, data } = useQuery(GET_LOCATIONS);
 
  const nextPage = () => setCurrentPage(prev => prev + 1)

  useEffect(() => {
    if (currentPage > 1 && data?.locations?.results?.length === 0) setCurrentPage(1)
  }, [data])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;


  return (
    <>
      <button onClick={nextPage}>Get more</button>
      <h2></h2>
      <Link href='/'><h2>Home</h2></Link>
      <h2></h2>
      <ul>
        {
          data.locations.results.map((e:any)=>(
              <li>{e?.name}</li>
          ))
        }
      </ul>
    </>
  );
}

export default Locations;