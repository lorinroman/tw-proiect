import { useState } from 'react'
import './UserCreateAccountForm.css'

function UserCreateAccountForm(props){
  const { onAdd } = props
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [type, setType] = useState('')

  const options = [{
    label: 'student',
    value: 'student-user'
  }, {
    label: 'professor',
    value: 'professor-user'
  }]

  const addUser = (evt) => {
    console.warn('called')
    alert('User created')
    onAdd({
      username,
      password,
      fullName,
      type
    })
  }
  
  return (
    <body>
    <div className='user-create-account-form'>
      <div className='username'>
        <text id='text1'>Username:</text>
        <input type='text' placeholder='username' onChange={(evt) => setUsername(evt.target.value)} />
      </div>
      <div className='password'>
      <text id='text1'>Password:</text>
        <input type='password' placeholder='password' onChange={(evt) => setPassword(evt.target.value)} />
      </div>
    
      <div className='fullName'>
        <text id='text1'>Full name:</text>
        <input type='text' placeholder='fullName' onChange={(evt) => setFullName(evt.target.value)} />
      </div>
      <div className='type'>
        <text id ='text1'>I am:</text>
        <select onChange={(evt) => setType(evt.target.value)}>
          {
            options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))
          }
        </select>
      </div>
      <div className='add'>
        <input type='button' id='btnAdd' value='Create Account' onClick={addUser} />
      </div>
    </div>
    </body>
  )
}

export default UserCreateAccountForm
