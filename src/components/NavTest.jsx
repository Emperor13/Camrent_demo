import React from "react";
import { FiDisc,FiChevronDown, FiMenu } from "react-icons/fi"
import { useState } from "react";
import classes from './NavTest.css';
import CamRentLogo from '../assets/camrent_1.png';


function NavTest() {

    const [click, setClick] = useState(false);
    const clickHandler = () => setClick(!click);

    const closeMenuHandler = () => setClick(false);


    return (
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                    <img
                        alt=""
                        src={CamRentLogo}
                        width="50"
                        height="50"
                        className="inline-block align-top"
                    />
                        <a href="#">Camrent </a>
                    </div>
                    <ul className="menu">
                        <li className="menu-link">
                            <a href="#">ABOUT <FiChevronDown className="icon-size"/></a>                            
                        </li>
                        <li className="menu-link">
                            <a href="#">CONTACT <FiChevronDown className="icon-size"/></a>                           
                        </li>
                        <li className="menu-link">
                            <a href="#">PRODUCTS <FiChevronDown className="icon-size"/></a>
                        </li>
                    </ul>
                    <div className="mobile-menu">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavTest;