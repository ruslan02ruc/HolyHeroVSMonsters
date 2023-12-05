import { getDatabase, ref, get, child, update, push, set} from "firebase/database";
import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";

import Blog from '../components/Blog/Blog'
import Comment from "../components/Comment/comment";
import MyForm from "../components/MyForm/MyForm";
import MyButton from "../components/MyButton/MyButton";
import { useSelector } from "react-redux";

export default function BlogPage() {
  const[blogItem, setBlogItem] = useState({})
  const[commentText, useCommentText] = useState('')
  
  let location = useLocation()
  let blogId = location.pathname.split('/')[2]
  
  const { email } = useSelector(state => state.user)

  const getBlog = () => {
    const db = ref(getDatabase())
    get(child(db, `blog/${blogId}`))
      .then((snapshot) => {
        let data = snapshot.val()
        setBlogItem(data)
        const dataComment = Object.values(data.comments);
        setBlogItem({...data, comments: dataComment})
    });
  }

  const addCommentHandle = () => {
    const db = getDatabase()
    let newKey = push(ref(db)).key
    if(commentText !== '') {
      set(ref(db, `blog/${blogId}/comments/${newKey}`), {comment: commentText, email: email, like: 0, id: newKey})
    }
    useCommentText('')
  }

  const updateBlogLike = (like, commentId) => {
    let blogCommentLike = blogItem.comments.find(obj => obj.id === commentId).like;
    if (like) {
      blogCommentLike++
    } else {
      blogCommentLike--
    }
    console.log(blogCommentLike);
    const updates = {};
    updates[`blog/${blogId}/comments/${commentId}/like`] = blogCommentLike;

    const db = ref(getDatabase())
    update(db, updates).then(() => { getBlog() });
  }

  useEffect(()=>{
    getBlog()
  },[getBlog])

  return (
    <div className="blog_container">
      <Blog blog={blogItem}/>
      <span className="blog_line"></span>
      <MyForm>
        <textarea className="input__comment" placeholder="Комментарий" value={commentText} onChange={e => useCommentText(e.target.value)}></textarea>
        {email ? <MyButton handleClick={addCommentHandle}>Добавить</MyButton> : <p>Войдите в аккаунт</p> }
      </MyForm>
      <div className='comments'>
        <h3>{blogItem.comments?.length} комментариев</h3>
        {
          blogItem.comments?.map(item => <Comment key={item.id} comment={item} updateBlogLike={updateBlogLike}/>)
        }
      </div>
    </div>
  )
}
