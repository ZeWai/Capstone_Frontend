import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap";
import Login from './Login/Login'
import './Navbar.css'

export default function Navbar() {
    const [modal, setModal] = useState(false);
    const modalClose = () => setModal(false);

    return (
        <div className="navbar">
            <ul className="navbaritem">
                <li className='brandname'><img alt='logo' src='https://cdn.shopify.com/s/files/1/0273/3250/9795/files/Rooftop_Republic_White_Logo_2048x2048.png?v=1584432103'></img></li>
                <li className='navitem loginbtn' onClick={() => {
                    setModal(!modal);
                }}>Login</li>
                <Modal show={modal} onHide={modalClose} centered size="md">
                    <Login />
                </Modal>
                <Link to='/contect'><li className='navitem'>Contact Us</li></Link>
                <Link to='/home'><li className='navitem'>Home</li></Link>
            </ul>
        </div >
    );
}
