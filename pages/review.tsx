import Link from "next/link"
import { collection, getDocs } from 'firebase/firestore'
import { dbInstance } from "../firebase/clientApp"

export async function getServerSideProps() {
    const query = await getDocs(collection(dbInstance, "applicant"))
    console.log(query.docs)
    const transformDocs = query.docs.reduce((acc, curr) => {
        return [...acc, curr._document.data.value.mapValue.fields]
    }, [])

    return { props: { applicants: transformDocs }}
}

const Review = ({ applicants }) => {
      return (
        <div className="container">
            <h1>Static Home</h1>
            <Link href="/">Go back home!</Link>
            {
                applicants.map((applicant) => (
                    <div key={applicant.firstname.stringValue}>{applicant.firstname.stringValue}</div>
                ))
            }
        </div>
      )
}
export default Review