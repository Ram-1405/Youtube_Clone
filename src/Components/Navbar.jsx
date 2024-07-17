import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
    const [searchterm,setsearchterm]=useState('');
    const navigate=useNavigate();
  const searchbar=(e)=>{
    e.preventDefault();
    if(searchterm){
      navigate(`/search/${searchterm}`);
    setsearchterm('')
    }else{
      navigate('/')
    }
  }
  return (
    <>
    <nav className='flex mx-auto max-w-[100%] h-[60px] bg-gray-950 justify-between sticky px-5'>
        <div className='flex py-3 w-20% h-100% justify-centre'>
        <FontAwesomeIcon className='h-8 mr-2' icon={faYoutube} style={{color: "#f20707",}} />
            <h1 style={{color:'#b91c1c',fontSize:'1.25rem',fontWeight:'600' }}>YOUTUBE</h1>
        </div>
        <div className='flex py-3 w-20% h-100% justify-centre'>
        <div className="flex-grow">
              <input 
                type="text" 
                value={searchterm}
                onChange={(e) => setsearchterm(e.target.value)}
                placeholder="Search" 
                className="bg-gray-800 text-white p-2 rounded-lg border-none" 
                style={{ width: '200px' }}
              />
              <i onClick={searchbar} className="fa-solid fa-magnifying-glass h-7 ml-3 cursor-pointer" style={{color:'whitesmoke'}}></i>
              
            </div>
            <div className='flex w-11 h-10 px-1 ' style={{alignItems:'center'}}>
            <i className="fa-regular fa-xl fa-circle-user ml-5" style={{color:"#f5f7fa"}}></i>
            </div>
        </div>
    </nav>
    </>
  )
}