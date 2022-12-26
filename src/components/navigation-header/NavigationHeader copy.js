import { NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import classes from './NavigationHeader.module.css'

function NavigationHeader() {
  return (
    
      <Container>
          <NavLink to="/courses" activeClassName={classes.active} className="m-2" >Courses List</NavLink>
          <NavLink to="/courses/1" activeClassName={classes.active} className="m-2" >Course Details</NavLink>
          <NavLink to="/lesson/1" activeClassName={classes.active} className="m-2" >Lesson Details</NavLink>
          <NavLink to="/user/courses" activeClassName={classes.active} className="m-2" >User Courses</NavLink>
      </Container>
  );
}

export default NavigationHeader;