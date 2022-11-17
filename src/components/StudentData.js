import { useEffect, useState } from "react";
import React from "react";
import { useNavigate, useParams } from 'react-router-dom';



function StudentData(props){


    const navigate = useNavigate();
    
    const handleDeleteStudent = (event) => {

        event.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let requestOptionsPost = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
        };

        console.log(props.object.id)
        fetch("http://localhost:8080/api/student/delete/" + props.object.id, requestOptionsPost)
        .then((response) => response.json())
        .then(() => navigate("../home"))
        .catch((error) => console.log("error", error));

    }


    const handleUpdateStudent = (event) => {

        event.preventDefault();

        navigate('../update/' + props.object.id);
            
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