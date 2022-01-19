import './HeadersStudent.css'

const HeadersStudent = (props) =>{

    
    return (
        <header className='headersStudent'>
           <div className='my-projects'>
               <button class= "btn_my_projects">My projects</button>
           </div>
           <div className='acorda-note'>
                <button class= "btn_acorda_note">Acorda note</button>
           </div>
        </header>
    )
}

export default HeadersStudent;