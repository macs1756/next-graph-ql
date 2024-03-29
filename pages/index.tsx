import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ul>
          <li><Link href='/rick'>Chapters with rick</Link></li>
          <li><Link href='/locations'>Locations cartoons</Link></li>
        </ul>
            
      </main>
    </>
  );
}
