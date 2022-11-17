import { useEffect, useState, useNavigate } from "react";
import React from "react";



function StudentData(props){

    // const navigate = useNavigate();


    const handleDeleteStudent = (event) => {

        event.preventDefault();

        // navigate('../deleteStudent/' + props.object.id);
            
    }

    const handleUpdateStudent = (event) => {

        event.preventDefault();

        // navigate('../studentData/' + props.object.id);
            
    }

    
    
    return (
        <>
           <div className="studenDetails card" id={props.object.id}>
                
                <div className='card-body flightDetailsCardBody'>
                    <div className="studentName">
                        <label>{props.object.firstName + " " + props.object.lastName}</label>
                    </div>
                    <div className="phoneNumber">
                        <label>{props.object.phoneNumber}</label>
                    </div>
                    <div className="email">
                        <label>{props.object.email}</label>
                    </div>
                    
                    <button className='btn btn-success' type="button" onClick={handleDeleteStudent}>Delete</button>
                    <button className='btn btn-success' type="button" onClick={handleUpdateStudent}>Update data</button>
                    
                </div>
           </div>
        </>
    )
}

export default StudentData;