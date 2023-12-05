import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from "../store/slices/userSlice"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";

import MyForm from '../components/MyForm/MyForm'
import MyButton from '../components/MyButton/MyButton'
import MyInput from '../components/MyInput/MyInput'
import AuthGoogle from '../components/AuthGoogle/AuthGoogle'

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((res) =>{
        dispatch(setUser({
          email: res.user.email,
          id: res.user.uid,
          token: res.user.accessToken
        }))
    });
  }

  const onSubmit = (data) => {
    handleClick(data.email, data.password)
  }

  const handleClick = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res)
        dispatch(setUser({
          email: res.user.email,
          id: res.user.uid,
          token: res.user.accessToken,
          isAdmin: res.user.email === 'admin@admin.com'
        }))
        // isAdmin()
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("errorCode: "+ errorCode);
        console.error("errorMessage: "+ errorMessage);
      });
  }

  return (
    <div className='login__container'>
      <h3 className="login__title">Авторизация</h3>
      <MyForm onSubmit={handleSubmit(onSubmit)}>
        <MyInput props={{ type: "text", placeholder: "Email", ...register("email", { required: true })}}/>
        {errors.email && <span>Нет Почты</span>}
        
        <MyInput props={{ type: "password", placeholder: "Password", ...register("password", { required: true })}}/>
        {errors.password && <span>Нет Пароля</span>}
        <MyButton type={'submit'}>Авторизация</MyButton>
      </MyForm>
      <p className="login__join">Нет аккаунта? <Link to="/signup">Регистрируйся</Link></p>
      <AuthGoogle handleClick={signInWithGoogle}/>
    </div>
  )
}

export default LoginPage