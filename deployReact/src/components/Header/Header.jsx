import './Header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeUser } from '../../store/slices/userSlice'

function App() {
  const { email } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const loginExit = () => {
    dispatch(removeUser())
  }

  return (
    <nav className="navbar">
			<ul className="navbar__menu">
				<li><Link to="/#main">Главная</Link></li>
        <li><Link to="#ob-igre">Об игре</Link></li>   
        <li><Link to="#enemy">Противники</Link></li>
        <li><Link to="blog">Блог</Link></li>
        <li><Link to="/#contacts">Контакты</Link></li>
				<li><Link to="login">{email ? email : "Вход"}</Link>{email ? <button className='login__exit' onClick={()=>loginExit()}>выход</button> : " "}</li>
			</ul>
			<a href="https://drive.google.com/file/d/1nHyqzHyswMNnA39vuo9dGU-NE1Pvdk35/view" className="navbar__btn">Скачать игру</a>
		</nav>
  )
}

export default App