import {   Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./features/dashboard";
import About from "./features/about";

function App() {
  return (
 
   
     <div className="min-h-screen bg-gray-200">
      <Routes>

      <Route path="/profile" element={<Dashboard />} />

      <Route path="/about" element={<About />} />

      <Route path="/" element={<Navigate to="/profile" />} />

      </Routes>
       
     </div>
   
  );
}

 

export default App;