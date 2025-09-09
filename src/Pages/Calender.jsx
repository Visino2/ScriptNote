import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  // Get info for current month
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  // Build days array with empty slots for alignment
  const days = [];
  for (let i = 0; i < firstDay; i++) days.push("");
  for (let i = 1; i <= lastDate; i++) days.push(i.toString().padStart(2, "0"));

  // Example highlights
  const highlights = {
    "02": "bg-pink-500 text-white",
    "07": "bg-black text-white font-bold",
    "16": "bg-black text-white font-bold",
    "17": "bg-yellow-400 text-black font-bold",
    "20": "bg-pink-500 text-white"
  };

  // Change month
  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  return (
    <main className="ml-64 mt-8 p-6 bg-gray-200 min-h-screen">
      <motion.div
        className="bg-yellow-200 rounded-3xl p-8 mx-auto shadow flex flex-col mt-15"
        style={{ width: "605px", height: "647px" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-lg">Calendar</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={prevMonth}
              className="px-2 py-1 rounded hover:bg-yellow-300 transition"
            >
              ◀
            </button>
            <span className="font-medium text-lg">
              {monthNames[month]} {year}
            </span>
            <button
              onClick={nextMonth}
              className="px-2 py-1 rounded hover:bg-yellow-300 transition"
            >
              ▶
            </button>
          </div>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 text-center font-medium mb-2">
          {daysOfWeek.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Dates with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${month}-${year}`} // 👈 re-renders with animation when month changes
            className="grid grid-cols-7 gap-y-4 text-center flex-grow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {days.map((day, i) => (
              <div key={i}>
                {day ? (
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-8 h-8 flex items-center justify-center rounded-full mx-auto cursor-pointer ${
                      highlights[day] || "bg-white text-gray-800"
                    }`}
                  >
                    {day}
                  </motion.div>
                ) : (
                  <div />
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
