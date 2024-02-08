import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Catalog from '@/Components/Catalog';




function News() {

  const [currentPage, setCurrentPage] = useState<number>(1)

  const GET_RICK = gql`
query RickChapters{
  characters(page: ${currentPage}, filter: { name: "rick" }) {
    results {
      id
      name
      image
    }
  }
}
`;

  const { loading, error, data } = useQuery(GET_RICK);

  const nextPage = () => setCurrentPage(prev => prev + 1)

  useEffect(() => {
    if (currentPage > 1 && data.characters.results.length === 0) setCurrentPage(1)
  }, [data])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <button onClick={nextPage}>Get more</button>
      <h2></h2>
      <Catalog
        title='Rick and Morty (Chapters Rick)'
        data={data}
        loading={loading}
        error={error}
        linkPart='/rick/'
      />
    </>
  );
}

export default News;


