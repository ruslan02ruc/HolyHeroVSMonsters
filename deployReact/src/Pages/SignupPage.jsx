import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { setUser } from "../store/slices/userSlice"
import { useNavigate } from "react-router-dom"

import MyForm from '../components/MyForm/MyForm'
import MyButton from '../components/MyButton/MyButton'
import MyInput from '../components/MyInput/MyInput'
import Message from '../components/Message/Message'
import AuthGoogle from "../components/AuthGoogle/AuthGoogle";
import { useForm } from "react-hook-form";

function SignupPage() {
  const [message, setMessage] = useState(false)

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
    console.log(data);
    handleClick(data.email, data.password, data.confirmPassword)
  }

  const handleClick = (email, password, confirmPassword) => {
    if (password != confirmPassword) {
      alert('Pass')
      setMessage(!message)
      setTimeout(()=>setMessage(false), 3000)
      return
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch(setUser({
          email: res.user.email,
          id: res.user.uid,
          token: res.user.accessToken
        }))
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
      <h3 className="login__title">Регистрируйся</h3>
      <MyForm onSubmit={handleSubmit(onSubmit)}>
        <MyInput props={{ type: "text", placeholder: "Email", ...register("email", { required: true })}}/>
        {errors.email && <span>Нет Почты</span>}
        <MyInput props={{ type: "password", placeholder: "Password", ...register("password", { required: true })}}/>
        {errors.password && <span>Нет Пароля</span>}
        <MyInput props={{ type: "password", placeholder: "Password", ...register("confirmPassword", { required: true })}}/>
        {errors.confirmPassword && <span>Нет Пароля</span>}
        <MyButton type={'submit'}>Регистрация</MyButton>
      </MyForm>
      <p className="login__join">Есть аккаунт? <Link to="/login">Авторизация</Link></p>
      {
        message && <Message message={"True"}/>
      }
      <AuthGoogle handleClick={signInWithGoogle}/>
    </div>
  )
}

export default SignupPage