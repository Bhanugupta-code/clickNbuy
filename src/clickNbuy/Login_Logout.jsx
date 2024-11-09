import React from 'react'
import './project.css'
export const Register = (props) => {


    // For Hide & Show password and confirm password.
    const Check = (arg) => {
        var password = document.getElementById("Password");
        var store = password.getAttribute('type');
        var Confirm_password = document.getElementById("Confirm_password");
        var store2 = password.getAttribute('type');
        if (store === 'password' && store2 === 'password') {
            password.setAttribute('type', 'text');
            Confirm_password.setAttribute('type', 'text');
        }
        else {
            password.setAttribute('type', 'password');
            Confirm_password.setAttribute('type', 'password');
        }
    }


    // For strong password we have at least 8 character.
    const confirm = (arg) => {
        var password = document.getElementById("Password").value;
        var Confirm_password = document.getElementById("Confirm_password").value;
        if (password.length >= 8) {
            if (password === Confirm_password) {
                document.getElementById("err").innerText = "";
                document.getElementById("err").style.display = "none";
            }
            else {
                document.getElementById("err").style.display = "";
                document.getElementById("err").innerText = "Confirm password doesn't match.";
            }
            document.getElementById("err2").innerText = "";
        }
        else {
            document.getElementById("err2").innerText = "Password has minimum 8 characters.";
        }
    }

    return (
        <div className='bac'>
            <form onSubmit={props.submit} className='container w-25 py-3 rounded-3 bac2 px-5 text-white'>
                <label> Username : </label><br /><input required type='Text' id='username' placeholder='Enter Username' className='fs-4 w-100 m-2 border-1 px-2 py-1 rounded-2' name="username"></input><br />
                <label> Password : </label><br /><input id='Password' required type='password' placeholder='Enter Password' className='fs-4 w-100 m-2 border-1 px-2 py-1 rounded-2' name='password'></input><br />
                <label> Confirm Password : </label><br /><input required id='Confirm_password' type='password' placeholder='Confirm Password' className='fs-4 w-100 m-2 border-1 px-2 py-1 rounded-2' name='Confirm_password' onKeyUp={() => confirm(this)}></input><br />
                <p id='err' className='w-100 text-danger'></p>
                <p id='err2' className='w-100 text-danger'></p>
                <input type='Checkbox' onClick={() => Check(this)}></input> <label>Check Password</label>
                <button className='btn btn-success w-100 fs-5 px-2 m-2'>Register</button>
            </form>
        </div>
    )
}


export const Login = (props) => {


    // For Hide & Show password and confirm password.
    const Check = (arg) => {
        var password = document.getElementById("Password");
        var store = password.getAttribute('type');
        var Confirm_password = document.getElementById("Confirm_password");
        var store2 = password.getAttribute('type');
        if (store === 'password' && store2 === 'password') {
            password.setAttribute('type', 'text');
            Confirm_password.setAttribute('type', 'text');
        }
        else {
            password.setAttribute('type', 'password');
            Confirm_password.setAttribute('type', 'password');
        }
    }


    // For strong password we have at least 8 character.
    const confirm = (arg) => {
        var password = document.getElementById("Password").value;
        var Confirm_password = document.getElementById("Confirm_password").value;
        if (password.length >= 8) {
            if (password === Confirm_password) {
                document.getElementById("err").innerText = "";
                document.getElementById("err").style.display = "none";
            }
            else {
                document.getElementById("err").style.display = "";
                document.getElementById("err").innerText = "Confirm password doesn't match.";
            }
            document.getElementById("err2").innerText = "";
        }
        else {
            document.getElementById("err2").innerText = "Password has minimum 8 characters.";
        }
    }
    return (
        <div className='bac'>
            <form onSubmit={props.submit} className='container w-25 py-3 rounded-3 bac2 px-5 text-white'>
                <label> Username : </label><br /><input type='Text' id='username' placeholder='Enter Username' className='fs-4 w-100 m-2 border-1 px-2 py-1 rounded-2' name="username"></input><br />
                <label> Password : </label><br /><input id='Password' type='password' placeholder='Enter Password' className='fs-4 w-100 m-2 border-1 px-2 py-1 rounded-2' name='password'></input><br />
                <label> Confirm Password : </label><br /><input id='Confirm_password' type='password' placeholder='Confirm Password' className='fs-4 w-100 m-2 border-1 px-2 py-1 rounded-2' name='Confirm_password' onKeyUp={() => confirm(this)}></input><br />
                <p id='err' className='w-100 text-danger'></p>
                <p id='err2' className='w-100 text-danger'></p>
                <input type='Checkbox' onClick={() => Check(this)}></input> <label>Check Password</label>
                <button className='btn btn-success w-100 fs-5 px-2 m-2'>Register</button>
            </form>
        </div>
    )
}

