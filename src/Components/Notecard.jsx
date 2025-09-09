import { FaPen } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NoteCard({ note }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`w-64 p-4 rounded-lg shadow-md ${note.color} flex flex-col gap-2`}
    >
      {/* Date and Pen Icon */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">{note.date}</span>
        <FaPen className="text-gray-600 cursor-pointer" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold">{note.title}</h3>

      {/* Content (multiple paragraphs) */}
      {note.content.map((para, index) => (
        <p key={index} className="text-sm text-gray-700">
          {para}
        </p>
      ))}
    </motion.div>
  );
}
