import React from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import './Layout.css';
import Menus from '../Menus/Menus';


const Layout = ({ toggle, handleToggle }) => {
  return (
    <>
      <div className='sidebar-section'>
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
        
      
      </div>
    </>
  )
}

export default Layout;
