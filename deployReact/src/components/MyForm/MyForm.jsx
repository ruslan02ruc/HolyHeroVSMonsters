import './MyForm.scss'

function MyForm ({children, onSubmit}) {
  return (
    <form className='login__form' onSubmit={onSubmit ? onSubmit : ''}>{children}</form>
  )
}

export default MyForm