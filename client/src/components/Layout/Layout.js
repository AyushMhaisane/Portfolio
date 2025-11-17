import React from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import './Layout.css';
import Menus from '../Menus/Menus';

// MODIFICATION: Removed 'Home' component from this file.
// This component now ONLY renders the sidebar.

const Layout = ({ toggle, handleToggle }) => {
  return (
    <>
      <div className='sidebar-section'>
        {/* The sidebar class controls its width */}
        <div className={toggle ? "sidebar-toggle sidebar" :'sidebar'}>
            <div className='sidebar-toggle-icons'>
                <p onClick={handleToggle}>
                    {
                        toggle ? <AiOutlineDoubleLeft size={30} /> : <AiOutlineDoubleRight size={30} />
                    }
                </p>
            </div>
            <Menus toggle={toggle}/>
        </div>
        
        {/* MODIFICATION: Removed the content wrapper and <Home /> component from here.
            It is now in App.js. 
        */}
      </div>
    </>
  )
}

export default Layout;