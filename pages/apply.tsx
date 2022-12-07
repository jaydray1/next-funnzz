import Link from "next/link"

const Apply = () => {
    return (
        <>
            <Link href="/">Go back home!</Link>
            <div className="container mt-10">
                <form>
                    <div className="relative">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-2/3 text-sm bg-transparent rounded-lg border focus:ring-1 border-black peer" placeholder=" " />
                        <label htmlFor="floating_outlined" className="absolute text-md text-black-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name</label>
                    </div>
                    <div className="relative mt-8">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-2/3 text-sm bg-transparent rounded-lg border focus:ring-1 border-black peer" placeholder=" " />
                        <label htmlFor="floating_outlined" className="absolute text-md text-black-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name</label>
                    </div>
                    <div className="relative mt-8">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-2/3 text-sm bg-transparent rounded-lg border focus:ring-1 border-black peer" placeholder=" " />
                        <label htmlFor="floating_outlined" className="absolute text-md text-black-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name</label>
                    </div>
                    <div className="relative mt-8">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-2/3 text-sm bg-transparent rounded-lg border focus:ring-1 border-black peer" placeholder=" " />
                        <label htmlFor="floating_outlined" className="absolute text-md text-black-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name</label>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Apply