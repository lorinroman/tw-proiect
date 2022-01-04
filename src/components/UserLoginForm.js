import React from 'react'
import { useState } from 'react'
import './UserLoginForm.css'


const UserLoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState([])

    const SERVER = 'http://localhost:8080'

    /*var data = { username: username };
    var url = new URL("http://localhost:8080/users");
    for (let k in data) { url.searchParams.append(k, data[k]); }*/



    const getUser = async ()=> {
      
        const response = fetch(`${SERVER}/users?username=${username}`)
        const data = await response.json()

        //fetch(url)
        setUser(data);
        
    }


    function logUser() {
        getUser()
        if (user.password == password) {
            alert('Successfully logged in')
        }
        else {
            alert('Wrong password')
        }
    }


    return (
        <body>
            <div className='user-login-form'>
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
            </div>
        </body>
    )
}

export default UserLoginForm
