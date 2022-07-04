import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from './logo1.png';

const Header = () => {
  return (
    <header>
        <div className="logo">
            <Link to='/'><img src={logo} className='App-logo' alt='logo' /></Link>
        </div>
        <div className="links">
            <Link to='/Newdetails' className='addCustomers'>Add Customer</Link>
            <Link to='/' className='allCustomers'>All Customer</Link>
        </div>
    </header>
  )
}

export default Header
