import { getDatabase, get, child, update, ref} from "firebase/database";
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import BlogAdd from '../components/BlogAdd/BlogAdd'
import { useSelector } from "react-redux";

function BlogEditorPage() {
  const[blogItem, setBlogItem] = useState(null)
  let location = useLocation()
  let blogId = location.pathname.split('/')[2]
  
  const { isAdmin } = useSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(()=> {
    if (!isAdmin) {
      navigate("/");
    }
  }, [])

  const getBlog = () => {
    const db = ref(getDatabase())
    get(child(db, `blog/${blogId}`))
      .then((snapshot) => {
      let data = snapshot.val()
      setBlogItem(data)
    });
  }
  useEffect(()=>{
    getBlog()
  },[])
  
  const handleEditBlog = () => {
    const db = getDatabase()
    const updates = {}
    updates['/blog/'+ blogId] = blogItem
    update(ref(db), updates)
  }

  return (
    <div>
      { blogItem && <BlogAdd blogId={blogId} blogItem={blogItem} setBlogItem={setBlogItem} handleClick={handleEditBlog}/> }
    </div>
  )
}

export default BlogEditorPage;