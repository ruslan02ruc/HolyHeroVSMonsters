import './AuthGoogle.scss'
import { FcGoogle } from "react-icons/fc";

export default function AuthGoogle({handleClick}) {
  return (
  <div className='auth-google'>
    <p className='auth-google__title'>Вход через:</p>
    <button className='auth-google__button' onClick={()=>handleClick()}><FcGoogle/></button>
  </div>
  )
}
