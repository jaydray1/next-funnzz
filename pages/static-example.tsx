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
        <div className="container">
            <h1>Static Home</h1>
            <Link href="/">Go back home!</Link>
            <div className="grid grid-cols-4 gap-4">
                {
                    characters.results.map((character) => (
                      <Link href={{pathname: `/character/${character.name}`, query: { image: character.image, name: character.name }}}>
                        <button className="rounded-lg border-solid border-2 border-red-500 hover:scale-110 p-10">
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