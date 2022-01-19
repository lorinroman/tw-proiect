import logo from './logo.svg';

import Header from './components/Header';
import UserList from './components/UserList';
import {useState} from 'react'
import UserLoginForm from './components/UserLoginForm';
import HeadersStudent from './components/HeadersStudent';


function App() {

  const [showLoginForm, setShowLoginForm] = useState(false)
 

  return (
    <div>
      <Header onLogin={()=>
        setShowLoginForm(!showLoginForm)
      }/>

      {showLoginForm && <UserLoginForm/>}
      {!showLoginForm && <UserList/> }
  
    </div>
  )
  
}



export default App;
