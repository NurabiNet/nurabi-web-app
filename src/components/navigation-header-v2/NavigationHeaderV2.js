import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import './NavigationHeaderV2.css'
import classes from './NavigationHeaderV2.module.css'

function NavigationHeaderV2() {
  return (
    <Navbar  expand="lg">
      <Container className={`NavContainer ${classes.NavBar}`}>
        <Navbar.Brand href="/" className={`m-2 ${classes.Logo}`}>Nurabi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/courses" activeClassName={classes.active} className={`m-2 ${classes.MainNavHeaderLink}`} >Courses</NavLink>
            <NavLink to="/consultants" activeClassName={classes.active} className={`m-2 ${classes.MainNavHeaderLink}`} >Consultants</NavLink>
            <NavLink to="/bank-questions" activeClassName={classes.active} className={`m-2 ${classes.MainNavHeaderLink}`} >Bank Questions</NavLink>
            <NavLink to="/persinality/test" activeClassName={classes.active} className={`m-2 ${classes.MainNavHeaderLink}`} >Personality Test</NavLink>
            <NavLink to="/initiatives" activeClassName={classes.active} className={`m-2 ${classes.MainNavHeaderLink}`} >Initiatives</NavLink>
            <NavLink to="/user/consultation/request" activeClassName={classes.active} className={`m-2 ${classes.MainNavHeaderLink}`} >Request Consultation</NavLink>
            <NavLink to="/cart" activeClassName={classes.active} className={`m-2 ${classes.MainNavHeaderLink}`} >Cart</NavLink>
            <NavLink to="/login" activeClassName={classes.active} className={`m-2 ${classes.MainNavHeaderLink}`} >Login</NavLink>
            <NavDropdown title="Dashboard" id="basic-nav-dropdown" className="m-2 DashboardDropDown">
                    <p><NavLink to="/user/dashboard" activeClassName={classes.active} className={`m-2 ${classes.MainNavHeaderLink}`} >DashBoard</NavLink></p>
                    <p><NavLink to="/user/courses" activeClassName={classes.active} className={`m-2 ${classes.MainNavHeaderLink}`} >My Courses</NavLink></p>
                    <p><NavLink to="/user/tracking-system" activeClassName={classes.active} className={`m-2 ${classes.MainNavHeaderLink}`} >My Tracking Systems</NavLink></p>
                    <p><NavLink to="/user/initiatives" activeClassName={classes.active} className={`m-2 ${classes.MainNavHeaderLink}`} >My Initiatives</NavLink></p>
                    <p><NavLink to="/user/personality-analysis" activeClassName={classes.active} className={`m-2 ${classes.MainNavHeaderLink}`} >Personality Analysis</NavLink></p>

                    <p><NavLink to="/my/bankQuestions" activeClassName={classes.active} className={`m-2 ${classes.MainNavHeaderLink}`} >My Bank Questions</NavLink></p>
                    <p><NavLink to="/user/sessions" activeClassName={classes.active} className={`m-2 ${classes.MainNavHeaderLink}`} >My Sessions</NavLink></p>
                    <p><NavLink to="/show/user/profile" activeClassName={classes.active} className={`m-2 ${classes.MainNavHeaderLink}`} >Profile</NavLink></p>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationHeaderV2;