import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import "../Login/style.css";
import logo from "../Assests/logo.png";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const submit = async (e) => {
        e.preventDefault();

        await fetch('https://fsd-feb-netflix-api.herokuapp.com/api/login/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(res => (res.ok ?
                res.json().then(resp => {
                    localStorage.setItem('token', resp.token)
                    setRedirect(true)
                })
                :
                res.json().then(resp => {
                    alert(resp.non_field_errors + " \nPlease try again...");
                    setRedirect(false)
                })
            ))
    }

    if (redirect) {
        return <Redirect to="/latest-show" />
    }

    return (
        <div className="bdy">
            <div>
                <img src={logo} className="logo_s" alt="logo" />
            </div>
            <div className="container w-75 ">
                <form className="container form_bdy w-50" onSubmit={submit}>
                    <h2 className="text-white">Sign in</h2>
                    <div className="form-group mt-5">
                        <input type="text" className="form-control inp_s" placeholder="mukul07" required
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-4">
                        <input type="password" className="form-control inp_s" placeholder="68585@mM" required
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="bt_c btn btn-lg mt-3 w-100">Sign-in</button>
                    <div className="form-check mt-3">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label text-white">Remember me</label>
                    </div>
                </form>
            </div>
        </div>
    )
}
