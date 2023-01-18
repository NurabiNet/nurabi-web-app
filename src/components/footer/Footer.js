import { Fragment } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <Fragment>
      <div className='footer'>
        <div className='container'>

          <div className='row justify-content-between'>

            <div className='FooterLogo'>
                <img src="/nurabi.png" alt='footerImg' />
            </div>

            <div className='col-md-3 mb-4'>
              <h4 className='FooterTitle'>About Nurabi</h4>
              <p className='aboutNurabi'>
              Now Use Our app Nurabi to help you in Son developing skills and self educations Now Use Our app Nurabi to help you in Son developing skills and self educations
              </p>
            </div>

            <div className='col-md-2 mb-4'>
              <h4 className='FooterTitle'>Site Map</h4>
              <div className='Sitemap'>
                <p className='SiteLink'><NavLink to="/">Home</NavLink></p>
                <p className='SiteLink'><NavLink to="/courses">Courses</NavLink></p>
                <p className='SiteLink'><NavLink to="/consultants">Consultants</NavLink></p>
                <p className='SiteLink'><NavLink to="/contact-us">Contact Us</NavLink></p>
                <p className='SiteLink'><NavLink to="/terms-and-conditions">Terms And Conditions</NavLink></p>
              </div>
            </div>

            <div className='col-md-2 mb-4'>
              <h4 className='FooterTitle'>Links</h4>
              <div className='Sitemap'>
                <p className='SiteLink'><NavLink to="https://play.google.com/store/apps/details?id=com.nurabi">App Store</NavLink></p>
                <p className='SiteLink'><NavLink to="https://apps.apple.com/eg/app/nurabi-app/id1593607736">Play Store</NavLink></p>
                <p className='SiteLink'><NavLink to="/login">Login</NavLink></p>
                <p className='SiteLink'><NavLink to="/register">Register</NavLink></p>
              </div>
            </div>

            <div className='col-md-4 mb-4'>
              <h4 className='FooterTitle'>Get In Touch With Us</h4>
              <div className='Sitemap'>
                <NavLink to="/"><img src='/contact/phone.png' className='ContactImg' alt="phone" /></NavLink>
                <NavLink to="/"><img src='/contact/whatsapp.png' className='ContactImg' alt="whatsapp" /></NavLink>
                <NavLink to="/"><img src='/contact/mail.png' className='ContactImg' alt="mail" /></NavLink>
                <NavLink to="/"><img src='/contact/web.png' className='ContactImg' alt="web" /></NavLink>
                <NavLink to="/"><img src='/contact/location.png' className='ContactImg' alt="location" /></NavLink>
              </div>
            </div>

            <div className='col-md-12 SocialIcons'>
              <FaFacebookF className='SocialIcon' />
              <FaInstagram className='SocialIcon' />
              <FaLinkedin className='SocialIcon' />
              <FaTwitter className='SocialIcon' />
            </div>

          </div>

        </div>
      </div>
      <div className='CopyRight'>
        Copyright © belongs to Nurabi
      </div>
    </Fragment>
  );
}

export default Footer;