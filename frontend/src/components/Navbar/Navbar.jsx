import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({setShowLogin}) => {

    const[menu,setMenu] = useState("")
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {getTotalCartAmount} = useContext(StoreContext);
    

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    //   };


  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
{/* 
        <div className='navbar-hamburger'>
        <img src={assets.hamburger_icon} alt='Menu' onClick={toggleMenu} />
        </div> */}

        {/* <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}> */}
        <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
            <a href='#footer' onClick={() => setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>

        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar