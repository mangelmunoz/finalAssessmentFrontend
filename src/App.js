import {React, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStudentPage from "./pages/addStudenPage";
import ShowStudentsPage from "./pages/showStudentsPage";

import './styles/App.css';

function App() {

  return (

    <div>
      <BrowserRouter>

        <Routes>

          <Route path="/home" element={<ShowStudentsPage />} />
          <Route path="/add" element={<AddStudentPage/> } />
         
        </Routes>

      </BrowserRouter>

    </div>

  );

}

export default App;