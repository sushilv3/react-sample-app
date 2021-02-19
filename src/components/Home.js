import React, { useEffect } from "react";
import {Jumbotron,Container,Button} from "reactstrap";
const Home=()=>{
    useEffect(()=>{
        document.title="Home Page";
    });
return (
    <div>
        <Jumbotron className="text-center">
            <h1>This is Home Page</h1>
            <p>Developed By Sushil</p>  
            <Container>
             <Button color="primary">Start Using</Button>
            </Container>      
        </Jumbotron>
    </div>
);
};
export default Home;
