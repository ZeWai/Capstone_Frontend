import { Modal, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { loginUserThunk } from '../../../../store/auth/action'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import './Login.css'


export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const auth = useSelector((state) => state.authStore.auth);
    const role = useSelector((state) => state.authStore.role);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        if (auth) {
            if (role === 'client') {
                navigate('/dashboard')
            } else if (role === 'admin') {
                navigate('/admin')
            } else if (role === 'farmer') {
                navigate('/farm_planner')
            }
        }
    }, [auth, role, navigate]);

    const login = (e) => {
        e.preventDefault();
        username.length > 0 &&
            password.length > 0 &&
            dispatch(loginUserThunk(username, password)
            )
    }

    return (
        <>
            <Modal.Header className="modalheader">
                Log In
            </Modal.Header>
            <Modal.Body className='modalbody'>
                <Row>
                    <Col />
                    <Col>
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.currentTarget.value.trim())}
                        />
                    </Col>
                    <Col />
                </Row>
                <br />
                <Row>
                    <Col />
                    <Col>
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                        // onKeyPress={EnterPress}
                        />
                        <br />
                    </Col>
                    <Col />
                </Row>
                <br /><br /><br />
            </Modal.Body>
            <Modal.Footer className="modalfooter">
                <button className="loginbutton" onClick={login}>Login</button>

            </Modal.Footer>
        </>
    )
}
