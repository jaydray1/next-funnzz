import { gql } from "@apollo/client";
import Link from "next/link"
import Image from 'next/image'
import client from "../apollo-client";

export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
        query Characters {
          characters {
            info {
              count
            }
            results {
              name
              status
              species
              image
              id
            }
          }
        }
      `,
    });
  
    return {
      props: {
        characters: data.characters,
      },
   };
  }

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

const StaticExample = ({ characters }) => {
    return (
        <div className="container mt-10">
            <Link href="/" className="bg-black hover:bg-white hover:text-black border-solid border-2 border-black  text-white font-bold py-2 px-4 rounded"><span>&larr;</span> ET phone home <img className="w-8 h-8 inline-block mb-1" src="/et200a.jpg"/></Link>
            <div className="mt-10 grid grid-cols-4 gap-4">
                {
                    characters.results.map((character) => (
                      <Link href={{pathname: `/character/${character.name}`, query: { image: character.image, name: character.name }}}>
                        <button className="opacity-75 rounded-lg border-solid border-2 p-10 hover:opacity-100">
                                <Image
                                    loader={myLoader}
                                    src={character.image}
                                    alt="Picture of the author"
                                    width={150}
                                    height={150}
                                    className="rounded-lg border-solid border-2 border-blue-500"
                                    />
                                <div className="w-36">{character.name}</div>
                        </button>
                      </Link>
                    ))
                }
            </div>
        </div>
    )
}
export default StaticExample