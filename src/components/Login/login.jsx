import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../auth"
export const Login = () => {
    const [user,setUser] = useState(' ')
    const navi = useNavigate();
    const auth = useAuth();
    const handleLogin= () =>{
        auth.login(user);
        navi('/Projects/admin');
    }
    return (
        <div>
            <label>
                Username:{' '}
                <input type='text' onChange={(e) => setUser(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}