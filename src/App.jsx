import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudyProvider } from "./context/StudyContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Planner from "./pages/Planner.jsx";
import Progress from "./pages/Progress.jsx";
import Dashboard from "./pages/Dashboard.jsx";
 
export default function App() {
  return (
    <StudyProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Planner />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </StudyProvider>
  );
}