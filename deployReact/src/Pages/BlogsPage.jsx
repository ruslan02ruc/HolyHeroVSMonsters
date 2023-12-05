import { getDatabase, ref, get, child} from "firebase/database";
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Blogs from '../components/Blogs/Blogs'

export default function BlogsPage() {
  const[blogList, setBlogList] = useState([]) // ***
  const { isAdmin } = useSelector(state => state.user)

  const getBlog = () => {
    const db = ref(getDatabase())
    get(child(db, 'blog'))
      .then((snapshot) => {
        let data = snapshot.val()
        const dataArray = Object.values(data);
        setBlogList(dataArray)
    });
  }

  useEffect(()=>{
    getBlog()
  },[])

  blogList && console.log(blogList)

  return (
    <>
	    {isAdmin && <Link className="blog-item__link btnAdd" to={"/admin/add"}>Добавить Пост</Link> }
      <Blogs blogList={blogList}/>
    </>
  )
}
