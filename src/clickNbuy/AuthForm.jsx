import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './project.css';
import axios from 'axios';
export const AuthForm = ({ onAuth }) => {
    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const validatePassword = () => {
        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long.');
        } else {
            setPasswordError('');
        }

        if (isRegister && password !== confirmPassword) {
            setError("Confirm password doesn't match.");
        } else {
            setError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username : username,
            password : password,
        }
        if (!error && !passwordError && username) {
            alert(isRegister ? "Registration Successful! 🎉" : "Login Successful! ✅");
            onAuth(); 
            axios.post("http://localhost:3003/users",data).then(()=>{
                console.log("Data Sent Successfully.");
            })
            .catch((err)=>{
                console.log("Error : " + err);
            })
            navigate('/main');
        }
    };

    return (
        <div className='bac'>
            <form onSubmit={handleSubmit} className='container py-5 rounded-3 bac2 px-5 text-white'>
                {/* <h2>{isRegister ? "Register" : "Login"}</h2> */}
                <label> Username: </label>
                <input required type='text' placeholder='Enter Username' className='fs-4 w-100 m-2 border-1 px-2 py-1 rounded-2' value={username} onChange={(e) => setUsername(e.target.value)} />

                <label> Password: </label>
                <input required type={showPassword ? 'text' : 'password'} placeholder='Enter Password' className='fs-4 w-100 m-2 border-1 px-2 py-1 rounded-2' value={password} onChange={(e) => setPassword(e.target.value)} onBlur={validatePassword} />

                {isRegister && (
                    <>
                        <label> Confirm Password: </label>
                        <input required type={showPassword ? 'text' : 'password'} placeholder='Confirm Password' className='fs-4 w-100 m-2 border-1 px-2 py-1 rounded-2' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} onBlur={validatePassword} />
                        <p className='w-100 text-danger'>{error}</p>
                    </>
                )}

                <p className='w-100 text-danger'>{passwordError}</p>
                <input type='checkbox' onClick={() => setShowPassword(!showPassword)} /> <label>Show Password</label>
                <button type="submit" className='btn btn-success w-100 fs-5 px-2 m-2'>{isRegister ? "Register" : "Login"}</button>
                <hr />
                <p className="text-center mb-0">
                    {isRegister ? "Already have an account?" : "Don't have an account?"}
                </p>
                <button className="btn btn-primary w-100 fs-5 px-2 m-2 mb-0" style={{ cursor: "pointer" }} onClick={() => setIsRegister(!isRegister)}> {isRegister ? "Login" : "Register"}</button>
            </form>
        </div>
    );
};
