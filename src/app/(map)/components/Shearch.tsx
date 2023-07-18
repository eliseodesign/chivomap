import { BiSearchAlt as SearchIcon } from "react-icons/bi";

export const Shearch = () => {
    return (
        <form
            className="absolute w-full justify-center items-center z-30 top-0 left-0 rounded out-top">
            <div
                className="flex w-[90%] mx-auto">
                <SearchIcon
                    className="text-white text-[40px] absolute inset-y-0 left-[5%] flex items-center pl-3 pointer-events-none z-30" />

                <input
                    type="text"
                    placeholder="Busca distritos, municipios, departamentos"
                    className="relative w-full p-3 pl-[50px] text-sm  bg-primary border-gray-600 placeholder-gray-400 text-white rounded focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
        </form>
    )
}
{/* <form className="buscador">
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only text-white fixed z-30 top-0 left-0">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-primary hover:bg-blue-700 focus:ring-blue-800">Search</button>
    </div>
</form>  */}