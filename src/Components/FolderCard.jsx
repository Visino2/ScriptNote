import { FaFile, FaEllipsisV } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FolderCard({ folder }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`w-48 p-4 rounded-lg shadow-md ${folder.color} flex flex-col justify-between`}
    >
      {/* File Icon and Menu Icon */}
      <div className="flex justify-between items-center mb-2">
        <FaFile className="text-gray-700 text-xl" />
        <FaEllipsisV className="text-gray-700 cursor-pointer" />
      </div>

      {/* Folder Name */}
      <h3 className="text-lg font-bold">{folder.name}</h3>
      <p className="text-sm text-gray-600">{folder.date}</p>
    </motion.div>
  );
}
