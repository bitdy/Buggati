import {BiMenu} from 'react-icons/bi'
import {CiLocationOn } from 'react-icons/ci'
import "./Header.css"

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="header_main">
        <div className="header_menu ">
           <BiMenu className="header_menu_logo"/>
        </div>
        <div className="header_logo text-center ">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="header_location ">
          <span>Find a BUGATTI Partner</span>
          <CiLocationOn className='header_location_logo' />
        </div>
      </div>
    </header>
  )
}

export default Header