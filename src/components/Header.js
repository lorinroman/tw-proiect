import './Header.css'
import { useState } from 'react';
const Header = (props) => {

    const {onLogin} = props;
    let text = 'Already Existing User?'

    const [showLoginBtn, setShowLoginBtn] = useState(true)
    

    return (
        
        <header className='header'>
            <div className='title'>
            <h1>Acordare anonima de note</h1>
            </div>
            {showLoginBtn && <div className='switch-to-login'>
                <text>{text}</text>
                <input type='button' id='btnLogin' onClick={onLogin} value='Log in'/>
            </div>} 
        </header>    
    )
}




export default Header;