import { FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

export default function TrashPage() {
  return (
    <div className="p-6 mt-10 min-h-screen">
      {/* Title */}
      <div className="flex gap-2 text-2xl font-semibold">
        <span>Trash</span>
        <FaTrash className="text-gray-500" />
      </div>

      <hr className="my-4 border-gray-300" />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center mt-15">
        {/* Animated Trash Icon */}
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaTrash className="text-8xl text-gray-400 mb-4 cursor-pointer" />
        </motion.div>

        {/* Text */}
        <div className="items-center justify-center flex flex-col">
          <p className="text-gray-600 font-medium">No files or folder in the trash.</p>
          <p className="text-gray-500 text-sm max-w-md mt-2 text-center">
            Move files you don’t need anymore to the Trash.
            <br />
            Click <span className="font-semibold">“Empty trash”</span> from the Trash Menu 
            to permanently delete items and free up storage space.
          </p>
        </div>
      </div>
    </div>
  );
}
