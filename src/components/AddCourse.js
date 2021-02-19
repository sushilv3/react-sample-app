import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Form, FormGroup, Input, Label, Button } from "reactstrap";
import base_url from "./../api/bootapi";

const AddCourse=()=>{
    useEffect(()=>{
        document.title="Add Course";
    });
    const[course,setCourse] = useState({});
    //form handler function
    const handleForm=(e)=>{
        console.log(course);
        postDataToServer(course);

        e.preventDefault();
    };

    //creating function to post data on server
    const postDataToServer = (course)=>{
        axios.post(`${base_url}/courses`,course).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Course added successfully");
            },(error)=>{
                console.log(error);
                console.log("error");
                toast.success("Something went wrong");
            }
        )
    };
    return (
        <div>
            <h1 className="text-center my-3"> Fill Course details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for = "courseId">Course id</label>
                    <Input type="text" placeholder="Enter here" name="courseId" id="courseId" onChange={(e)=>{setCourse({...course, id:e.target.value})}}/>
                </FormGroup>

                <FormGroup>
                    <label for = "courseTitle">Course Title</label>
                    <Input type="text" placeholder="Enter title here" name="courseTitle" id="courseTitle" onChange={(e)=>{setCourse({...course, title:e.target.value})}}/>
                </FormGroup>

                <FormGroup>
                    <label for = "courseDescription">Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" name="courseDescription" id="courseDescription" style={{height:150}} onChange={(e)=>{setCourse({...course, description:e.target.value})}}/>
                </FormGroup>

                <Container className="text-center">
                    <Button type ="submit" color="success">Add Course</Button>
                    <Button type="reset" color="warning ml-2">Clear</Button>
                </Container>
            </Form>
        </div>
    );
};
export default AddCourse;