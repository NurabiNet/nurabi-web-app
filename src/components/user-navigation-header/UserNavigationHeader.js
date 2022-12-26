import { NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import './UserNavigationHeader.css'
import classes from './UserNavigationHeader.module.css'

function UserNavigationHeader() {
  return (
    
            
          <nav className={classes.NavBar}>
                <div className="logo">
                   
                </div>
                <div className="hamburger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className="nav-links user-nav-links">
                    <li><NavLink to="/user/dashboard" activeClassName={classes.active} className="m-2" >DashBoard</NavLink></li>
                    <li><NavLink to="/user/courses" activeClassName={classes.active} className="m-2" >My Courses</NavLink></li>
                    <li><NavLink to="/user/tracking-system" activeClassName={classes.active} className="m-2" >My Tracking Systems</NavLink></li>
                    <li><NavLink to="/user/initiatives" activeClassName={classes.active} className="m-2" >My Initiatives</NavLink></li>
                    <li><NavLink to="/user/personality-analysis" activeClassName={classes.active} className="m-2" >Personality Analysis</NavLink></li>

                    <li><NavLink to="/my/bankQuestions" activeClassName={classes.active} className="m-2" >Bank Questions</NavLink></li>
                    <li><NavLink to="/user/sessions" activeClassName={classes.active} className="m-2" >My Sessions</NavLink></li>
                    <li><NavLink to="/consultants/1" activeClassName={classes.active} className="m-2" >Consultant Details</NavLink></li>
                    <li><NavLink to="/show/user/profile" activeClassName={classes.active} className="m-2" >Profile</NavLink></li>
                    
                    
                   
                   
                </ul>
            </nav>
  
  );
}

export default UserNavigationHeader;