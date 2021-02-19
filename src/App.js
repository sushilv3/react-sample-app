import React from "react";
// import Header from "./components/header";
import {Button, Col, Container, Row} from "reactstrap";
import{ToastContainer, toast} from "react-toastify"; 
import Home from "./components/Home"
import AllCourse from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import Header from "./components/header";
import Menus from "./components/menus";
import {BrowserRouter as Router, Route} from "react-router-dom";
//functional component
function App() {

  const btnHandle = ()=>{
    // toast("this is my first toast message");
    toast.success("Done",{position:"top-center"});
  };
  return (
    <div>
    
      <Router>
        <ToastContainer/>
        <Container>
          <Header/>
          <Row>
            <Col md={4}>
              <Menus/>
            </Col>
            <Col md={8}>
              <Route path="/" component={Home} exact />
              <Route path="/add-course" component={AddCourse} exact />
              <Route path="/view-courses" component={AllCourse} exact />
            </Col>
          </Row>
        </Container>
      </Router>
     
     
      
    </div>
  
    
    );
}

export default App;
