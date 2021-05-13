import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
export class Register extends Component {
    render() {
        return (
            <div className='Register'>
                <form >
                <h2>Register</h2>
                <input 
                        type='text'
                        placeholder='first name *'
                        autoFocus
                />
                <input 
                        type='text'
                        placeholder='last name *'
                        
                />
                <input 
                        type='text'
                        placeholder='username *'
                        
                />  
                <input 
                        type='password'
                        placeholder='password *'
                />
                <input 
                        type='Submit'
                        value='Register'
                />
                
                </form>
                <div>
                    <Link to='/'>
                        Home
                    </Link>
                    <Link to='/Login'>
                        Sign In
                    </Link>
                </div>
            </div>
        )
    }
}

export default Register
