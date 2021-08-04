import React from 'react'
import './AdminLogin.css'
import axios from 'axios'
import { useState } from 'react'
import { BASE_URL } from '../util/RequestConstant'
import Popup from './Popup'
import { Redirect } from "react-router-dom";

const AdminLogin = () => {


    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [authenticated, setAuthenticated] = useState(false)
    const [formAuth, setFormAuth] = useState({
        username: '',
        password: ''
    });

    const onInputChange = (event) => {
        event.preventDefault()
        setFormAuth({ ...formAuth, [event.target.name]: event.target.value })
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}/admin/login`, formAuth)
            .then(response => {
                const token = response.data
                console.log(token)
                localStorage.setItem('jwt-token', `Bearer ${token.jwtToken}`)
                setAuthenticated(true)
            })
            .catch(err => {
                setButtonPopUp(true)
            });
    }


    return (
        <>
        {authenticated ? <Redirect to={{
            pathname: "/system-admin-dashboard",
            state: {authenticated:authenticated}
        }}/>: ""}

            <div className="form-div-position">
                <form onSubmit={onSubmitForm} className="form-style">
                    <label>Admin Login</label>
                    <div>
                        <input onChange={onInputChange} className="admin-input" type="text" placeholder="Admin username" name="username" required />
                    </div>
                    <div>
                        <input onChange={onInputChange} className="admin-input" type="password" placeholder="Admin password" name="password" required />
                    </div>
                    <div>
                        <button className="btn-login-admin" type="submit">Login</button>
                    </div>
                </form>
            </div>
            <div>
                <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                    <h3>Erro!</h3>
                    <p>Credenciais invalidas</p>
                </Popup>
            </div>
        </>

    )
}

export default AdminLogin
