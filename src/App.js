import {React, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowStudentsPage from "./pages/showStudentsPage";

import './styles/App.css';

function App() {

  const [email,setEmail] = useState("");

  return (

    <div>
      <BrowserRouter>

        <Routes>

          <Route path="/home" element={<ShowStudentsPage />} />
         
        </Routes>

      </BrowserRouter>

    </div>

  );

}

export default App;