import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function ProfileSettings() {
  const [profilePic, setProfilePic] = useState(null);
  const [profileName, setProfileName] = useState("@ Bello Baba");
  const [username, setUsername] = useState("@ Bellobala11");

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  // Handle delete image
  const handleDelete = () => {
    setProfilePic(null);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Saved:\nProfile Name: ${profileName}\nUsername: ${username}`);
  };

  return (
    <div className="p-8 pr-80">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-10">Profile Settings</h2>

      {/* Profile Picture Section */}
      <div className="flex flex-col items-center gap-4 mb-12">
        {/* Image */}
        {profilePic ? (
          <img
            src={profilePic}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-gray-200 shadow-md transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <FaUserCircle className="text-8xl text-gray-400 transition-transform duration-300 hover:scale-105" />
        )}

        {/* Buttons */}
        <div className="flex gap-4">
          <label className="px-5 py-2 bg-pink-600 text-white rounded-lg cursor-pointer shadow hover:bg-pink-700 transition">
            Change picture
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
          <button
            type="button"
            onClick={handleDelete}
            className="px-5 py-2 bg-pink-100 text-pink-700 rounded-lg shadow hover:bg-pink-200 transition"
          >
            Delete picture
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8 max-w-lg mx-auto">
        {/* Profile Name */}
        <div>
          <label className="block font-medium mb-2">Profile name</label>
          <input
            type="text"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            className="w-full p-4 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
          />
        </div>

        {/* Username */}
        <div>
          <label className="block font-medium mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 hover:scale-105 transition-transform"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
