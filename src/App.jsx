import {   Routes, Route, Navigate } from "react-router-dom";
import About from "./features/about";
import CrudApp from "./components/CrudApp";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";

function App() {
  return (
 
   
     <div className="min-h-screen bg-gray-200">
      <Routes>

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/profile" element={<CrudApp />} />

      <Route path="/about" element={<About />} />

      <Route path="/" element={<Navigate to="/login" />} />

      </Routes>
       
     </div>
   
  );
}

 

export default App;