import Link from "next/link"
import React from "react"
import { collection, addDoc } from 'firebase/firestore'
import { dbInstance } from "../firebase/clientApp"

const Apply = () => {
    const [values, setValues] = React.useState({
        firstName: '',
        lastName: '',
        birthDay: '',
        birthYear: '',
        streetNumber: '',
        address: '',
        city: '',
        state: '',
        postalCode: ''
    })
    const [submitting, setSubmitting] = React.useState(false)
    const handleSubmit = async (e) => {
        setSubmitting(true)
        e?.preventDefault()
        try {
            await addDoc(collection(dbInstance, "applicant"), values)
        } catch (error) {
            alert(error)
            setSubmitting(false)
        }
        setSubmitting(false)
    }
    
    const handleInputChange = (event) => {
        const { name, value } = event.target

            setValues({
            ...values,
            [name]: value
            })
    }

    return (
        <div className="container mt-10">
            <Link href="/" className="bg-black hover:bg-white hover:text-black border-solid border-2 border-black  text-white font-bold py-2 px-4 rounded"><span>&larr;</span> ET phone home <img className="w-8 h-8 inline-block mb-1" src="/et200a.jpg"/></Link>
            <div className="container mt-10">
                <h1 className="text-6xl">Tell us about yourself and Let's make some mooo-nayyy 🤑!!</h1>
                <h2 className="text-xl mt-5">Please ensure all fields have a value</h2>
                <form className="mt-10">
                    <div className="relative">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-2/5 text-sm bg-transparent rounded-lg border focus:ring-1 border-black peer" placeholder=" " name="firstName" value={values.firstName} onChange={handleInputChange} />
                        <label htmlFor="floating_outlined" className="absolute text-md text-black-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">First Name</label>
                    </div>
                    <div className="relative mt-8">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-2/5 text-sm bg-transparent rounded-lg border focus:ring-1 border-black peer" placeholder=" " name="lastName" value={values.lastName} onChange={handleInputChange}/>
                        <label htmlFor="floating_outlined" className="absolute text-md text-black-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Last Name</label>
                    </div>
                    <div className="relative mt-8">
                        <input type="number" min="1" max="30" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-1/4 text-sm bg-transparent rounded-lg border focus:ring-1 border-black peer" placeholder=" " name="birthDay" value={values.birthDay} onChange={handleInputChange}/>
                        <label htmlFor="floating_outlined" className="absolute text-md text-black-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Birth Day</label>
                    </div>
                    <div className="relative mt-8">
                        <input type="month" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-1/4 text-sm bg-transparent rounded-lg border focus:ring-1 border-black peer" placeholder=" " name="birthMonth" value={values.birthYear} onChange={handleInputChange} />
                        <label htmlFor="floating_outlined" className="absolute text-md text-black-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Birth Month/year</label>
                    </div>
                    <div className="relative mt-8">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-2/3 text-sm bg-transparent rounded-lg border focus:ring-1 border-black peer" placeholder=" " name="streetNumber" value={values.streetNumber} onChange={handleInputChange} />
                        <label htmlFor="floating_outlined" className="absolute text-md text-black-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Street Number</label>
                    </div>
                    <div className="relative mt-8">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-2/3 text-sm bg-transparent rounded-lg border focus:ring-1 border-black peer" placeholder=" " name="address" value={values.address} onChange={handleInputChange} />
                        <label htmlFor="floating_outlined" className="absolute text-md text-black-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Address</label>
                    </div>
                    <div className="relative mt-8">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-2/3 text-sm bg-transparent rounded-lg border focus:ring-1 border-black peer" placeholder=" " name="city" value={values.city} onChange={handleInputChange} />
                        <label htmlFor="floating_outlined" className="absolute text-md text-black-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">City</label>
                    </div>
                    <div className="relative mt-8">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-2/3 text-sm bg-transparent rounded-lg border focus:ring-1 border-black peer" placeholder=" " name="state" value={values.state} onChange={handleInputChange} />
                        <label htmlFor="floating_outlined" className="absolute text-md text-black-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">State</label>
                    </div>
                    <div className="relative mt-8">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-1/6 text-sm bg-transparent rounded-lg border focus:ring-1 border-black peer" placeholder=" " name="postalCode" value={values.postalCode} onChange={handleInputChange} />
                        <label htmlFor="floating_outlined" className="absolute text-md text-black-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Postal Code</label>
                    </div>
                    <button className="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5 mb-10" type="button">
                            Submit
                        </button>
                </form>
            </div>
        </div>
    )
}
export default Apply