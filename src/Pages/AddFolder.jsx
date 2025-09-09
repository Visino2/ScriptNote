import { FaFolder } from "react-icons/fa";

export default function Folders() {
  const folders = [
    { id: 1, name: "Movie Review", color: "bg-pink-200", tab: "bg-pink-500" },
    { id: 2, name: "Class Notes", color: "bg-blue-200", tab: "bg-blue-600" },
    { id: 3, name: "Book Lists", color: "bg-yellow-200", tab: "bg-yellow-400" },
    { id: 4, name: "Movie Review", color: "bg-pink-200", tab: "bg-pink-500" },
    { id: 5, name: "Class Notes", color: "bg-blue-200", tab: "bg-blue-600" },
    { id: 6, name: "Book Lists", color: "bg-yellow-200", tab: "bg-yellow-400" },
  ];

  return (
    <main className="ml-64 mt-15 p-6 bg-gray-200 min-h-screen">
    

      <div className="grid grid-cols-3 gap-4">
        {folders.map((folder) => (
          <div
            key={folder.id}
            className="w-[200px] h-[240px] flex flex-col items-center justify-center rounded-lg space-y-3 "
          >
            {/* Folder Shape */}
            <div
              className={`relative w-full h-28 rounded-t-lg shadow-xl ${folder.color}`}
            >
              {/* Folder Tab */}
              <div
                className={`absolute top-0 left-0 w-16 h-5 rounded-t-md ${folder.tab}`}
              ></div>
            </div>

            {/* Folder Name */}
            <p className="mt-3 font-semibold">{folder.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
