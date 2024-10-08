// Write your code here
import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'

import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const Header = () => (
  <nav>
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="trigger-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu />
          </button>
        }
      >
        {close => (
          <div className="model">
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>
            <ul>
              <Link to="/">
                <li>
                  <AiFillHome />
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li>
                  <BsInfoCircleFill />
                  About
                </li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header
