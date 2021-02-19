import React from "react";
import {Card, CardBody } from "reactstrap";
function Header({name, title}){
    return(
        <div >
            <Card className="my-2 bg-warning">
                <CardBody>
                <h1 className="text-center my-5 bg-warning">Welcome to Courses Applicaion</h1>
                </CardBody>
            </Card>
        
        <p>{name} {title}</p>
      
        </div>
        );
}
export default Header;