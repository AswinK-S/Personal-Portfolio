import './MobileNav.css'
import propTypes from 'prop-types'

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className='logo' src="" alt="" />
          <ul>
            <li>
              <a className='menu-items' href="#home">Home</a>
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

            <button className='contact-btn' onClick={()=>{}}>
              Hire Me
            </button>
          </ul>

        </div>

      </div>
    </>

  )
}
MobileNav.propTypes ={
  isOpen:propTypes.func.isRequired,
  toggleMenu:propTypes.func.isRequired
}

export default MobileNav