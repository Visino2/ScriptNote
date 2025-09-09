import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you could also clear auth tokens/localStorage if needed
    navigate("/signin");
  };

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

      {/* Profile + Logout */}
      <div
        onClick={handleLogout}
        className="flex gap-2 items-center cursor-pointer hover:opacity-80 transition"
      >
        <img src="/proflle.png" alt="profile" className="h-8 w-8 rounded-full" />
        <div className="text-gray-700 font-medium">Hello Bello</div>
      </div>
    </div>
  );
}
