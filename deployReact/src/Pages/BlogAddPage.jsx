import { getDatabase, ref, set, push} from "firebase/database";
import { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BlogAdd from '../components/BlogAdd/BlogAdd'
import { useEffect } from "react";

function BlogAddPage() {
  const { isAdmin } = useSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(()=> {
    if (!isAdmin) {
      navigate("/");
    }
  }, [])

  let [blogItem, setBlogItem] = useState({
      comments: [],
      date: "",
      description: "",
      shortDesc: "",
      id: "",
      img: "",
      title: ""
    })

  let location = useLocation()
  let blogId = location.pathname.split('/')[2]

  function AddBlog() {
    const db = getDatabase()
    let newKey = push(ref(db)).key

    console.log(newKey);
    set(ref(db, `blog/${newKey}`), {...blogItem, id: newKey})
  }

  return (
    <div>
      <BlogAdd blogId={blogId} blogItem={blogItem} setBlogItem={setBlogItem} handleClick={AddBlog}/>
    </div>
  )
}

export default BlogAddPage;

