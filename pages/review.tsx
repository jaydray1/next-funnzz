import Link from "next/link"
import { collection, getDocs } from 'firebase/firestore'
import { dbInstance } from "../firebase/clientApp"
import React from "react"

export async function getServerSideProps() {
    const query = await getDocs(collection(dbInstance, "applicant"))
    const transformDocs = query.docs.reduce((acc, curr) => {
        return [...acc, curr._document.data.value.mapValue.fields]
    }, [])

    return { props: { applicants: transformDocs }}
}

const NameLine = (props) => <div {...props}></div>

const Review = ({ applicants }) => {
    const [applicantData, setApplicantData] = React.useState({})
      return (
        <div className="container mt-10">
            <Link href="/" className="bg-black hover:bg-white hover:text-black border-solid border-2 border-black  text-white font-bold py-2 px-4 rounded"><span>&larr;</span> ET phone home <img className="w-8 h-8 inline-block mb-1" src="/et200a.jpg"/></Link>
            <div className="flex">
                <div className="w-2/5">
                    <h2 className="mt-10 text-xl font-bold">New Applications</h2>
                {
                    applicants.map((applicant) => (
                        <NameLine className="italic cursor-pointer" key={applicant.firstname.stringValue} onClick={() => setApplicantData(applicant)}>{`${applicant.lastName.stringValue}, ${applicant.firstname.stringValue}`}</NameLine>
                    ))
                }
                </div>
                <div className="w-1/2">
                    <h2 className="mt-10 text-xl font-bold">Current in review</h2>
                    {
                        applicantData?.lastName ? (
                            <>
                                <p className="text-xl font-medium">First Name: <span className="text-base font-normal ml-4">{applicantData?.firstname?.stringValue}</span></p>
                                <p className="text-xl font-medium">Last Name: <span className="text-base font-normal ml-4">{applicantData?.lastName?.stringValue}</span></p>
                                <p className="text-xl font-medium">Address: <span className="text-base font-normal ml-4">{`${applicantData?.streetNumber?.stringValue} ${applicantData?.streetName?.stringValue}`}</span></p>
                                <p className="text-xl font-medium">Address: <span className="text-base font-normal ml-4">{applicantData?.city?.stringValue}</span></p>
                                <p className="text-xl font-medium">Address: <span className="text-base font-normal ml-4">{applicantData?.state?.stringValue}</span></p>
                                <div className="flex">
                                    <button>Approve</button>
                                    <button>Deny</button>
                                </div>
                            </>
                        ) : (
                            <p>Please choose an applicant to begin reviewing</p>
                        )
                    }
                </div>
            </div>
        </div>
      )
}
export default Review