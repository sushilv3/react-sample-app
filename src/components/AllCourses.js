import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
const AllCourse=()=>{

    useEffect(()=>{
        document.title = "All Courses";
    },[]);
    
    //function to call server:
    const getAllCoursesfromServer = ()=>{
        axios.get(`${base_url}/courses`).then(
        (response)=>{
            //success
            // console.log(response);
            console.log(response.data);
            toast.success("Courses has been loaded");
            setCourses(response.data);
        },
        (error)=>{
            //for error
            console.log(error)
            toast.error("Something went wrong");
        });
    };

    //calling loading course function
    useEffect(()=>{
        getAllCoursesfromServer()
    },[]);

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id !=id))
    }

   const [courses,setCourses] = useState([
        // {title:"Java Course", description:"this is demo course"},
        // {title:"Python Course", description:"this is demo course"},
        // {title:"Reactjs Course", description:"this is demo course"},
        // {title:"Angular Course", description:"this is demo course"}
    ]);

return(
    <div>
        <h1>All Course</h1>
        <p>List for courses are as follows</p>
       
            {
                courses.length > 0 ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses}/>) : "No course"
            }

    </div>
);

}
export default AllCourse;