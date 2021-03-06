import { useEffect, useState } from 'react'

import './UserList.css'
import User from './User'
import UserCreateAccountForm from './UserCreateAccountForm'


const SERVER = 'http://localhost:8080'

function UserList (props) {
    const [users, setUsers] = useState([])
  
    const getUsers = async () => {
      const response = await fetch(`${SERVER}/users`)
      const data = await response.json()
      setUsers(data)
    }

    const addUser = async (user) => {
      await fetch(`${SERVER}/users`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      getUsers()
    }
  
    useEffect(() => {
      getUsers()
    }, [])
  
    return (
    
      <div className='user-list'>        {
       users.map(e => <User key={e.id} item={e} />)
       }
        <UserCreateAccountForm onAdd={addUser} />
      </div>
      
    )
  }
  

  export default UserList
  