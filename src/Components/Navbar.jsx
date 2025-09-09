import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-64 right-0 h-16 bg-white shadow-md flex items-center justify-between px-6">
        <h1 className="text-4xl font-bold text-gray-800">NOTES</h1>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-2/4">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none ml-2 w-full"
        />
      </div>

    
      <div className="flex gap-2 text-center">
        <img src="/proflle.png" alt="profilr"  className="h-7 w-7"/>
        <div className="text-gray-700 font-medium">Hello Bello</div>
      </div>
    </div>
  );
}
