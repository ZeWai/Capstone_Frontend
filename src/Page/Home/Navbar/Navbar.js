import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
            <ul className="navbaritem">
                <li className='brandname'><img alt='logo' src='https://cdn.shopify.com/s/files/1/0273/3250/9795/files/Rooftop_Republic_White_Logo_2048x2048.png?v=1584432103'></img></li>
                <Link to='/login'><li className='navitem'>Login</li></Link>
                <Link to='/contect'><li className='navitem'>Contact Us</li></Link>
                <Link to='/about'><li className='navitem'>About Us</li></Link>
                <Link to='/home'><li className='navitem'>Home</li></Link>
            </ul>
        </div>
    );
}
