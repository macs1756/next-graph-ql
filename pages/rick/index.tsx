import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';
import Catalog from '@/Components/Catalog';

const GET_NEWS = gql`
query RichChapters{
  characters(page: 2, filter: { name: "rick" }) {
    results {
      id
      name
      image
    }
  }
}
`;

function News() {
  const { loading, error, data } = useQuery(GET_NEWS);

  console.log(data);

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
