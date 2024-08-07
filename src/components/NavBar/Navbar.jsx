import './Navbar.css'
import logo from '../../../public/assets/images/logo1.png'
import { useState } from 'react'
import MobileNav from '../mobileNav/MobileNav'

const Navbar = () => {

    const [openMenu,setOpenMenu]=useState(false)
    const toggleMenu =()=>{
        setOpenMenu(!openMenu)
    }

  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img className='logo' src={logo} alt="" />

            <ul>
                <li>
                    <a className='menu-items'>Home</a>
                </li>
                <li>
                    <a className='menu-items'>Skills</a>
                </li>
                <li>
                    <a className='menu-items'>Work Experience</a>
                </li>
                <li>
                    <a className='menu-items'>Contact</a>
                </li>

                <button className='contact-btn' onClick={()=>{}}>Hire Me</button>
            </ul>

            <button className='menu-btn' onClick={toggleMenu}>
                <span className={'material-symbols-outlined'} style={{fontSize:'1.8rem'}}>
                    {openMenu? 'close':'menu'}
                </span>
            </button>
        </div>
    </nav>
    </>
  )
}

export default Navbar