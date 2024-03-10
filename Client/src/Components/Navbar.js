import { Link } from "react-router-dom";
import logo from "../Images/shey-logo.png"

function Navbar() {
    const handleSearch=() => {
        
    }
    return ( 
        <div className="mx-auto bg-black px-6 grid grid-cols-3 gap-4">
            <Link to="/"><div>
               <img className="bg-black" src={logo} alt="" width={100} height={100}/>
            </div></Link>
            <div>
                <label htmlFor="search-form" className="flex items-center justify-center">
                    <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input p-2 w-full mt-2 rounded-lg hover:"
                                placeholder="Search for..." 
                                onChange={(e) => handleSearch(e.target.value)}
                    />
                    <span className="text-white flex ms-2 items-center justify-center mt-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg></span>
                    </label>
            </div>
            <div className="group grid grid-cols-2 gap-4 col-end-7 col-span-2">
                <div className="flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <div className="p-1 hidden group-hover:flex w-28 h-28 bg-slate-200
                     rounded-lg absolute right-6 top-12 text-black z-40">
                        <p className="text-black text-left pt-2 ps-3">Login</p>
                    </div>
                </div>
                <div className="flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                </div>
            </div>
        </div>
     );
}

export default Navbar;