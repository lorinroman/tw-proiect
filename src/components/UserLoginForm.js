import React from 'react'
import { useState } from 'react'
import HeadersStudent from './HeadersStudent'
import './UserLoginForm.css'


const SERVER = 'http://localhost:8080'

function UserLoginForm(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const [showStudentHeaders, setShowStudentHeaders] = useState(false)


    const logUser = async()=> {
        const response = await fetch(`${SERVER}/users?username=${username}`)
        const data = await response.json()

        if (data && data[0].password == password) {
            alert('Successfully logged in')
            setShowStudentHeaders(!showStudentHeaders)
        }
        else {
            alert('Wrong password')
            setShowStudentHeaders(showStudentHeaders)
            
        }
    }

 
    return (
    
        <body>
            {!showStudentHeaders &&<div className='user-login-form'>
                <div className='username'>
                    <text id='text1'>Username:</text>
                    <input type='text' placeholder='username' onChange={(evt) => setUsername(evt.target.value)} />
                </div>
                <div className='password'>
                    <text id='text1'>Password:</text>
                    <input type='password' placeholder='password' onChange={(evt) => setPassword(evt.target.value)} />
                </div>
                <div className='LoginUser'>
                    <input type='button' id='btnLoginUser' onClick={logUser} value='Log in' />
                </div>
            </div>}
            
            <div>
                {showStudentHeaders && <HeadersStudent/>}
            </div>
        </body>
    )
}

export default UserLoginForm
