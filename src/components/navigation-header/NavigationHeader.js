import { NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import './NavigationHeader.css'
import classes from './NavigationHeader.module.css'

function NavigationHeader() {
  return (
    
            
          <nav className="main-nav">
                <div className="logo">
                   
                </div>
                <div className="hamburger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className="nav-links">
                    <li><NavLink to="/courses" activeClassName={classes.active} className="m-2" >Courses List</NavLink></li>
                    <li><NavLink to="/bank-questions" activeClassName={classes.active} className="m-2" >Bank Questions</NavLink></li>
                    <li><NavLink to="/user/tracking-system/intro" activeClassName={classes.active} className="m-2" >Tracking Systems Intro</NavLink></li>
                    <li><NavLink to="/consultants" activeClassName={classes.active} className="m-2" >Consultants</NavLink></li>
                    <li><NavLink to="/consultants/1" activeClassName={classes.active} className="m-2" >Consultant Details</NavLink></li>
                    <li><NavLink to="/persinality/test" activeClassName={classes.active} className="m-2" >Personality Test</NavLink></li>
                    <li><NavLink to="/initiatives" activeClassName={classes.active} className="m-2" >Initiatives</NavLink></li>
                    <li><NavLink to="/login" activeClassName={classes.active} className="m-2" >Login</NavLink></li>
                    
                   
                   
                </ul>
            </nav>
  
  );
}

export default NavigationHeader;