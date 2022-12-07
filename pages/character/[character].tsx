import Link from "next/link"

export const getServerSideProps = ({ params }) => {
 return {
    props: {
        name: params.character
    }
 }
}

const Character = ({ name }) => {
    return (
        <div className="container">
            <h1>Character</h1>
            <Link href="/static-example">Go back home!</Link>
            <p>{name}</p>
        </div>
    )
}
export default Character