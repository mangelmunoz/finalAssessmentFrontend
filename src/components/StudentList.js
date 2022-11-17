import React from "react";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import StudentData from './StudentData'


function StudentList(props) {

    const [students, setStudents] = useState([]);

    const navigate = useNavigate();


    const handleAddStudent = (event) => {

        event.preventDefault();

        navigate('../add');
            
    }

    useEffect(() => {
    
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        let string = "http://localhost:8080/api/student/all";
        fetch(string, requestOptions)
        .then(response => {
            return response.json();
        } )
        .then( (response) => {

            let studentsArray =  [];

            response.forEach(element => {
                studentsArray.push(element);
            });
            
            setStudents(studentsArray);
            
        } ).catch(error => console.log('error', error));

    }, [])


    return (

        <div className="row justify-content-center studentListDiv">
            <div className="card col-6">
                <div className="card-body">
                    <div className="row">
                        <div className="col-5">
                            <label>List of students</label>
                        </div>
                        <div className="offset-2 col-5 topButtons">
                        <button className='btn btn-primary addStudentButton' type="button" onClick={handleAddStudent}>Add new student</button>
                    </div>
                    </div>
                    <div>
                       
                        {
                            students.map(
                                (student, key) => (<StudentData object={student} key={key}></StudentData>)
                            )
                        }     
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentList;