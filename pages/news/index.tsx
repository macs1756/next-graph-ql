import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const GET_NEWS = gql`
query Allnews{
  characters(page: 2, filter: { name: "rick" }) {
    results {
      id
      name
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
    <div>
      <h2>Rick and Morty</h2>

      {
        error ? <div>Error on server</div> : (
          loading ? <div>Loading...</div> : 
          data.characters.results.map((e:any) => (
            <li>{e?.name}</li>
          ))
        )
      }
     
    </div>
  );
}

export default News;
