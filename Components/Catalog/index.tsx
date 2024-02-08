import Image from "next/image";
import Link from "next/link";

function Catalog({title, error, loading, data, linkPart}: any) {
  return (
    <div>
    <h3><Link href='/'>Home</Link></h3>
    <h2></h2>
    <h2>{title}</h2>
    <div className='d-flex'>
      {
        error ? <div>Error on server</div> : (
          loading ? <div>Loading...</div> :
            data.characters.results.map((e: any) => (
              <li className='flex-column'>

                <Link href={linkPart + e?.id}>
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

export default Catalog;