import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
export class Login extends Component {
    render() {
        return (
            <div className='Login'>
                <form >
                <h2>Login</h2>
                <input 
                        type='text'
                        placeholder='username'
                        autoFocus
                />  
                <input 
                        type='password'
                        placeholder='password'
                />
                <input 
                        type='Submit'
                />
                
                </form>
                <div>
                    <Link to='/'>
                        Home
                    </Link>
                    <Link to='/Register'>
                        Sign Up ?
                    </Link>
                </div>
            </div>
        )
    }
}

export default Login
