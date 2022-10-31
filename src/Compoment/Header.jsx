import React, {useState} from 'react';
import {NavLink, Link} from "react-router-dom";
import {Container} from 'react-bootstrap';
import Logo from '../assets/images/logo-dark.png';
// import {Link} from 'react-scroll';
import { SpeedDialAction } from '@mui/material';



const Header = () => {      
    //Add & Remove Class
    //menu JS
	const [toggle, settoggle] = useState(false);

    const togglMenu = () =>  {
        settoggle(!toggle);
		
		//Personal Div Ma class Toggle karava mate 
        document.querySelector(".mobile-nav__wrapper").classList.toggle("cm_overflow");
    }

    // mobile menu toggle
    const[drop_one_btn,setclass_o] = useState(true);

    const sub_menu_trigger = () =>{
      var x = window.matchMedia("(max-width: 1199px)");
      if (x.matches) {
          let drop_one_block = document.querySelector('.dropdown');
          if(drop_one_btn) {
            drop_one_block.classList.add('active');
            setclass_o(false)
          } else {
            drop_one_block.classList.remove('active');
            setclass_o(true)
          }
      }
    }

    const[drop_one_btn_l,setclass_l] = useState(true);

    const sub_menu_trigger_l = () =>{
      var x = window.matchMedia("(max-width: 1199px)");
      if (x.matches) {
          let drop_one_block_l = document.querySelector('.dropdown_two');
          if(drop_one_btn_l) {
            drop_one_block_l.classList.add('active');
            setclass_l(false)
          } else {
            drop_one_block_l.classList.remove('active');
            setclass_l(true)
          }
      }
}

    return(
        <>
        <div className='header_wrap'>
            <header >
                <Container>
                    <div className='header_block'>
                        <div className="logo_hold">
                            <a href='' to="/"><img src={Logo} alt="image"/></a>
                            <span className="mobile-nav__toggler" onClick={togglMenu}>
                                <img src="https://www.linkpicture.com/q/menu_1.png" alt="menu" />
                            </span>
                        </div>

                        <div className="menu_block mobile-nav__wrapper">
                            <div className="mobile-nav__overlay mobile-nav__toggler"></div>
                            <div className='menu_item mobile-nav__content'>
                                <div className='mobile_menu'>
                                    <div className="logo_mobile-box"> 
                                        <a href="#0" aria-label="logo image"><img src="https://test.saluto.in/FarmAutomation/Content/images/logo-dark.png" width="220" alt="" /></a>
                                        <span className="mobile-nav__close mobile-nav__toggler" onClick={togglMenu}><img src="https://www.linkpicture.com/q/close_1.png" alt="menu" /></span> 
                                    </div>
                                </div>
                                <ul className="menu_wrep">
                                    <li className='active'><NavLink to="/" className='menu_list'>Home</NavLink></li>
                                    <li className='dropdown'>
                                        <a href="#0" className='menu_list' onClick={sub_menu_trigger}>Our Solution 
                                        <button aria-label="dropdown toggler" className='dropdown_icon'>
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.17188 7.01659L0.292516 1.99695L1.72641 0.603127L7.9996 7.05666L1.54606 13.3299L0.152238 11.896L5.17188 7.01659Z" fill="white"/>
                                            </svg>
                                        </button>
                                        </a>
                                        <ul className="m_menu">
                                            <li><NavLink to="/Solution" >Paddock Management</NavLink></li>
                                            <li><a href="/Solution#nutrition_section">Herd Nutrition Management</a></li>
                                            <li><a href="/Solution#management_section">Information Management</a></li>
                                        </ul>
                                    </li>
                                    <li className='dropdown dropdown_two'>
                                        <a href='#0' className='menu_list' onClick={sub_menu_trigger_l}>Who We Are <button aria-label="dropdown toggler" className='dropdown_icon'><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.17188 7.01659L0.292516 1.99695L1.72641 0.603127L7.9996 7.05666L1.54606 13.3299L0.152238 11.896L5.17188 7.01659Z" fill="white"/>
                                            </svg></button></a>
                                        <ul className="m_menu">
                                            <li><NavLink to="/aboutus">About Us</NavLink></li>
                                            <li><a href="/aboutus#about-team" >Our Team</a></li>
                                        </ul>    
                                    </li>
                                    <li><a href='#' className='menu_list'>Blog</a></li>
                                    <li><NavLink to='/faq' className='menu_list'>FAQs</NavLink></li>
                                </ul>
                                <div className='header_btn'>
                                    <a href="/faq#intersted_section">Intersted?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
        </div>
        </>
    );
}


export default Header;