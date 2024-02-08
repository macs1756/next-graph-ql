import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';

const GET_NEWS = gql`
query Allnews{
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
    <div>
      <h2>Rick and Morty</h2>

      <div className='d-flex'>
        {
          error ? <div>Error on server</div> : (
            loading ? <div>Loading...</div> :
              data.characters.results.map((e: any) => (
                <li className='flex-column'>

                  <Link href="">
                    <Image src={e?.image} alt='card image' width={300} height={200} />
                  </Link>


                  {e?.name}
                </li>
              ))
          )
        }
      </div>

    </div>
  );
}

export default News;
