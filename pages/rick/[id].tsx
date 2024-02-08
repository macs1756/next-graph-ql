import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import { useRouter } from "next/router";




function SingleCard() {

  const router = useRouter();
  const { id } = router.query;

  const GET_RICK_SINGLE = gql`
  query getEpisode {
    character(id: ${id}){
      name
      image
      location{
        name
      }
    }
  }
`;

  const { loading, error, data } = useQuery(GET_RICK_SINGLE);

  console.log(data);


  return (
    <div>
      {
        error ? <div>Error on server</div> : (
          loading ? <div>Loading...</div> :
            (
              <div className="flex-column flex">
              <div>
                <Image src={data.character.image} alt='main' width={800} height={500} />
              </div>
              <h2></h2>
              <h2>{data.character.name}</h2>
              <p>{data.character.location.name}</p>
               </div>
            )
        )
      }
    </div>
  );
}

export default SingleCard;