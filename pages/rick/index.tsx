import React from 'react';
import { useQuery } from '@apollo/client';
import Catalog from '@/Components/Catalog';
import { GET_RICK } from '@/schemas';

function News() {
  const { loading, error, data } = useQuery(GET_RICK);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (

    <Catalog
    title='Rick and Morty (Chapters Rick)'
    data={data}
    loading={loading}
    error={error}
    linkPart='/rick/'
     />
  );
}

export default News;


