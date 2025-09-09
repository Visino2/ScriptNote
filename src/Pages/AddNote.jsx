import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";

export default function AddNote() {
  const [heading, setHeading] = useState("");
  const [note, setNote] = useState("");

  // Count words dynamically
  const wordCount = note.trim() === "" ? 0 : note.trim().split(/\s+/).length;

  // Format today’s date (DD/MM/YYYY)
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB");

  return (
    // Content area only (sidebar/navbar remain intact)
    <div className="p-8 bg-gray-50 flex flex-col items-center w-full h-full">
      {/* Page Title */}
      <h2 className="text-2xl font-bold mb-6">Add New Note</h2>

      {/* Note Box */}
      <div className="relative bg-white rounded-2xl shadow-md p-6 h-[550px] w-full max-w-6xl ml-50">
        {/* Heading Input */}
        <input
          type="text"
          placeholder="HEADING...."
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="w-full p-3 mb-4 rounded-md bg-gray-100 border border-gray-200 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        {/* Note Textarea */}
        <textarea
          placeholder="Take a note...."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full min-h-[220px] p-3 rounded-md bg-gray-100 border border-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        {/* Microphone Icon */}
        <FaMicrophone className="absolute top-8 right-8 text-gray-500 hover:text-pink-600 cursor-pointer transition-transform duration-200 hover:scale-110" />
      </div>

      {/* Footer (Word Count + Date) */}
      <div className="flex justify-between items-center text-sm text-gray-600 mt-4 w-full max-w-2xl">
        <p>Word count: {wordCount}</p>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
}
