import './Navbar.css'
import logo from '../../../public/assets/images/logo1.png'

const Navbar = () => {
  return (
    <>
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

            <button class='menu-btn' onClick={()=>{}}>
                <span class={'material-symbols-outlined'} style={{fontSize:'1.8rem'}}>
                    
                </span>
            </button>
        </div>
    </nav>
    </>
  )
}

export default Navbar