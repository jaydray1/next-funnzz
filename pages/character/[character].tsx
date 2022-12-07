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
        <div className="container mt-10">
            <Link href="/static-example" className="bg-black hover:bg-white hover:text-black border-solid border-2 border-black  text-white font-bold py-2 px-4 rounded"><span>&larr;</span> ET phone Ricks <img className="w-8 h-8 inline-block mb-1" src="/et200a.jpg"/></Link>
            <h1 className="text-7xl mt-28 w-100 text-center">{name}</h1>
        </div>
    )
}
export default Character