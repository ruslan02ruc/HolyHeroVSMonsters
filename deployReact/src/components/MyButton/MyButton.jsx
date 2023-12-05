import './MyButton.scss'

const MyButton = ({children, handleClick, type}) => {
  return (
    <button className='login__button' onClick={() => handleClick ? handleClick() : ''} type={type ? type : 'button'}>{children}</button>
  )
}

export default MyButton