import React, { useState } from 'react';
import './Menus.css';
import { 
    MdHome, 
    MdPerson, 
    MdSchool, 
    MdCode, 
    MdWork, 
    MdDashboard, 
    MdContactMail 
} from "react-icons/md"; 

import PassportPhoto from '../../assets/images/profile.jpeg';
import { Link } from 'react-scroll';


const menuItems = [
    { name: "Home", target: "home", icon: MdHome, offset: -10 },
    { name: "About", target: "about", icon: MdPerson, offset: -10 },
    { name: "Education", target: "education", icon: MdSchool, offset: -10 },
    { name: "Tech Stack", target: "techstack", icon: MdCode, offset: -10 },
    { name: "Projects", target: "projects", icon: MdDashboard, offset: -10 },
    { name: "Experience", target: "work", icon: MdWork, offset: -10 },
    { name: "Contact", target: "contact", icon: MdContactMail, offset: -70, duration: 500 }, 
];

const Menus = (props) => {
    const [activeLink, setActiveLink] = useState('home');

    const NavLinkItem = ({ item, isExpanded }) => {
        const Icon = item.icon; 

        return (
            <div className='nav-link'>
                <Link 
                    to={item.target}
                    smooth={true} 
                    spy={true}
                    offset={item.offset} 
                    duration={item.duration || 100} 
                    onSetActive={() => setActiveLink(item.target)}
                    className={activeLink === item.target ? 'active' : ''}
                >
                    <Icon size={25} /> 
                    {isExpanded && <span className="ms-2">{item.name}</span>} 
                </Link>
            </div>
        );
    };

    return (
        <>
            {props.toggle ? (
                <>
                    <div className='navbar-profile-pic'>
                        <img src={PassportPhoto} alt="Profile" />
                    </div>
                    
                    <div className='nav-items'>
                        <div className='nav-item'>
                            {menuItems.map((item) => (
                                <NavLinkItem key={item.target} item={item} isExpanded={true} />
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='nav-items'>
                        <div className='nav-item'>
                            {menuItems.map((item) => (
                                <NavLinkItem key={item.target} item={item} isExpanded={false} />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Menus;
