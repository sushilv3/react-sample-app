import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import{Card, CardBody, CardTitle,CardSubtitle,CardText,CardFooter,Button,Container} from "reactstrap";
import base_url from "../api/bootapi";

const Course=({course, update})=>{
    const deleteCourse =(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                console.log(response.data);
                toast.success("course deleted");
                update(id);
            },(error)=>{
                toast.error("courses not deleted server proble");
            }
        )
    }
    const editCourse=(id)=>{
        // axios.put(`${base_url/courses/${id}}`).then
    }
    
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color="warning ml-3" onClick={()=>editCourse(course)}>Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
}

export  default Course;
