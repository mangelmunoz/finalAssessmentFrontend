import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from 'react-router-dom';



function StudentData(props){


    const navigate = useNavigate();


    const handleDeleteStudent = (event) => {

        event.preventDefault();

        navigate('../deleteStudent/' + props.object.id);
            
    }

    const handleUpdateStudent = (event) => {

        event.preventDefault();

        navigate('../studentData/' + props.object.id);
            
    }

    
    
    return (
        <>
           <div className="studentDetails card" id={props.object.id}>
                
                <div className='card-body studentDetailsCardBody'>
                    <div className="studentName">
                        <label>{props.object.firstName + " " + props.object.lastName}</label>
                    </div>
                    <div className="phoneNumber">
                        <label>{props.object.phoneNumber}</label>
                    </div>
                    <div className="email">
                        <label>{props.object.email}</label>
                    </div>
                    <div className="buttonsDiv">
                        <button className='btn btn-success deleteButton' type="button" onClick={handleDeleteStudent}>Delete</button>
                        <button className='btn btn-success updateButton' type="button" onClick={handleUpdateStudent}>Update data</button>
                    </div>
                    
                </div>
           </div>
        </>
    )
}

export default StudentData;