import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaFolderPlus, FaStickyNote, FaCalendarAlt, FaTrash, FaCog } from "react-icons/fa";

export default function Sidebar() {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <FaHome />, path: "/" },
    { id: "add-folder", label: "Add New Folder", icon: <FaFolderPlus />, path: "/add-folder" },
    { id: "add-note", label: "Add New Note", icon: <FaStickyNote />, path: "/add-note" },
    { id: "calendar", label: "Calendar", icon: <FaCalendarAlt />, path: "/calendar" },
    { id: "trash", label: "Trash", icon: <FaTrash />, path: "/trash" },
    { id: "settings", label: "Profile Settings", icon: <FaCog />, path: "/settings" },
  ];

  return (
    <aside className="w-64 bg-white h-screen shadow-md fixed left-0 top-0 p-6 flex flex-col">
      {/* Logo */}
      <div className="flex flex-col items-center mb-10">
        <img src="/Scriptoria.png" alt="Logo" className="w-16 h-16 rounded-lg" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-3">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-pink-500 text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-100 hover:text-black"
                }`
              }
            >
              {({ isActive }) => (
                <motion.div
                  animate={
                    isActive
                      ? { scale: [1, 1.1, 1] } // bounce when active
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  {item.icon} {item.label}
                </motion.div>
              )}
            </NavLink>
          </motion.div>
        ))}
      </nav>
    </aside>
  );
}
