import React, { useState, useEffect } from "react";
import { loginUserThunk } from '../../store/auth/action'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import './Home.css'

export default function Home() {
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

    const EnterPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            username.length > 0 &&
                password.length > 0 &&
                dispatch(loginUserThunk(username, password)
                )
        }
    }
    return (
        <div className='content'>

            <div className='loginbox'>
                <div className="heading1"><h1>Rooftop Republic</h1></div>
                <div className="heading2"><span>Log In</span></div>
                <div className="input">
                    <label>Username</label>
                    <br />
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.currentTarget.value.trim())}
                    />
                    <br /><br />
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        onKeyPress={EnterPress}
                    /></div>
                <div className="btn"><button onClick={login}>Login</button></div>
            </div>
        </div>
    );
}
