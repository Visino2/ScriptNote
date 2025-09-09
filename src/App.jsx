import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

import Dashboard from "./Pages/Dashboard";
import AddFolder from "./Pages/AddFolder"
import AddNote from "./Pages/AddNote"
import Calendar from "./Pages/Calender";
import Trash from "./Pages/Trash";
import Settings from "./Pages/Settings";

export default function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <Routes>
            <Route path="/" Component={Dashboard} />
             <Route path="/add-folder" Component={AddFolder} />
            <Route path="/add-note" Component={AddNote} />
             <Route path="/calendar" Component={Calendar} />
             <Route path="/trash" Component={Trash} />
            <Route path="/settings" Component={Settings} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}
