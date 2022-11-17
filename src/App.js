import {React, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStudentPage from "./pages/addStudenPage";
import ShowStudentsPage from "./pages/showStudentsPage";
import UpdateStudentPage from "./pages/updateStudentPage";

import './styles/App.css';

function App() {

  return (

    <div>
      <BrowserRouter>

        <Routes>

          <Route path="/home" element={<ShowStudentsPage />} />
          <Route path="/add" element={<AddStudentPage/> } />
          <Route path="/update/:id" element={<UpdateStudentPage/> } />
        </Routes>

      </BrowserRouter>

    </div>

  );

}

export default App;