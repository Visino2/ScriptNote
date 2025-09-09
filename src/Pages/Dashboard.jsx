import { useState } from "react";
import NoteCard from "../Components/Notecard";
import FolderCard from "../Components/FolderCard"
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

export default function Dashboard() {
  const [activeFilter, setActiveFilter] = useState("all");
  const navigate = useNavigate();

  const notes = [
    {
      id: 1,
      title: "Mid test exam",
      date: "8/22/2022",
      content: [
        "What is the difference between UI design?",
        "This question addresses the fundamental distinction where UI (User Interface) focuses on the visual and interactive elements of a product.",
        "It focuses on the visual and interactive element of the product from the user's perspective."
      ],
      color: "bg-blue-100"
    },
    {
      id: 2,
      title: "Mid test exam",
      date: "8/22/2022",
      content: [
        "What is the difference between UI design?",
        "This question addresses the fundamental distinction where UI (User Interface) focuses on the visual and interactive elements of a product.",
        "It focuses on the visual and interactive element of the product from the user's perspective."
      ],
      color: "bg-pink-100"
    },
    {
      id: 3,
      title: "Mid test exam",
      date: "8/22/2022",
      content: [
        "What is the difference between UI design?",
        "This question addresses the fundamental distinction where UI (User Interface) focuses on the visual and interactive elements of a product.",
        "It focuses on the visual and interactive element of the product from the user's perspective."
      ],
      color: "bg-yellow-100"
    }
  ];

  const folders = [
    { id: 1, name: "Movie Review", date: "8/22/2025", color: "bg-blue-200" },
    { id: 2, name: "Movie Review", date: "8/22/2025", color: "bg-pink-200" },
    { id: 3, name: "Movie Review", date: "8/22/2025", color: "bg-yellow-200" }
  ];

  const filterFolders = (filter) => {
    setActiveFilter(filter);
    console.log(`Filter applied: ${filter}`);
  };

  return (
    <main className="ml-64 mt-16 p-6 bg-gray-100 min-h-screen overflow-y-auto items-center text-center">

      <div className="flex gap-4 mt-15 mb-6 flex-wrap">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}

        {/* Add Note Box with Motion */}
        <motion.div
          onClick={() => navigate("/add-note")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-35 h-60 border-2 border-dashed flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50 rounded-lg text-center"
        >
          <FaPlus className="text-xl mb-1" />
          Add Note
        </motion.div>
      </div>

      {/* Recent Folders Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">Recent Folders</h2>

        {/* Tabs */}
        <div className="flex items-end gap-4 mb-6">
          {["Today", "This Week", "This Month"].map((label) => {
            const key = label.toLowerCase();
            const active = activeFilter === key;
            return (
              <button
                key={label}
                onClick={() => filterFolders(key)}
                className={`pb-2 font-medium ${
                  active
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {activeFilter === "this week" ? (
          <div className="flex flex-col gap-4">
            {/* Row 1 */}
            <div className="flex gap-4">
              {[0, 1, 2].map((i) => {
                const folder = folders[i % folders.length];
                return (
                  <div key={`r1-${i}`} className="w-[275px] h-[175px] rounded-2xl overflow-hidden">
                    <FolderCard folder={{ ...folder, id: `${folder.id}-r1-${i}` }} />
                  </div>
                );
              })}
              <div className="w-[275px] h-[175px]" />
            </div>

            {/* Row 2 */}
            <div className="flex gap-4">
              {[3, 4, 5].map((i) => {
                const folder = folders[i % folders.length];
                return (
                  <div key={`r2-${i}`} className="w-[275px] h-[175px] rounded-2xl overflow-hidden">
                    <FolderCard folder={{ ...folder, id: `${folder.id}-r2-${i}` }} />
                  </div>
                );
              })}

              {/* Add Folder with Motion */}
              <motion.div
                onClick={() => navigate("/add-folder")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-[140px] h-[200px] border-2 border-dashed flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50 rounded-2xl"
              >
                <FaPlus className="text-xl mb-1" />
                Add Folder
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {folders.map((folder) => (
              <div key={folder.id} className="w-[275px] h-[175px] rounded-2xl overflow-hidden">
                <FolderCard folder={folder} />
              </div>
            ))}

            {/* Add Folder with Motion */}
            <motion.div
              onClick={() => navigate("/add-folder")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-[140px] h-[200px] border-2 border-dashed flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50 rounded-2xl"
            >
              <FaPlus className="text-xl mb-1" />
              Add Folder
            </motion.div>
          </div>
        )}
      </section>
    </main>
  );
}
