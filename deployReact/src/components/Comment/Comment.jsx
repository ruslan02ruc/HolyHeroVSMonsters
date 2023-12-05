import './Comment.scss'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import MyForm from '../MyForm/MyForm';
import MyButton from '../MyButton/MyButton';
import MyInput from '../MyInput/MyInput'

export default function Comment({comment, updateBlogLike}) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <div className='comment'>
        <p className='comment__email'>{comment?.email}</p>
        <p className='comment__text'>{comment?.comment}</p>
        <div className='comment__button'>
          <button className={`comment__button--like ${comment?.like > 0 ? 'green' : 'red'}`} onClick={()=>updateBlogLike(true, comment.id)}><AiOutlineLike/><span>{comment?.like}</span></button>
          <button className='comment__button--dislike' onClick={()=>updateBlogLike(false, comment.id)}><AiOutlineDislike/></button>
        </div>
    </div>
  )
}
