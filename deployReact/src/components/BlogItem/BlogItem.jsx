import { Link } from 'react-router-dom'
import './BlogItem.scss'
import { useSelector } from 'react-redux';

function BlogItem({ blog }) {
	let date = blog.date?.split('T')[0].split('-').reverse().join('/')
  const { isAdmin } = useSelector(state => state.user)

	return (
		<div className="blog-item__item">
			<div className="blog-item__col">
				<img className="blog-item__img" src={blog.img} alt="blog" />
			</div>
			<div className="blog-item__col">
				<p className="blog-item__data">{date}</p>
				<h1 className="blog-item__title">{blog.title}</h1>
				<p className="blog-item__shortDesc">{blog.shortDesc}</p>
				{/* <div className="blog-item__desc" dangerouslySetInnerHTML={{ __html: blog.description }}/> */}
				{/* {blog.description} */}
				<div className='blog-item__buttons'>
					<Link className="blog-item__link" to={blog.id}>Читать</Link>
					{ isAdmin && <Link className="blog-item__link" to={"/admin/"+blog.id}>Изменить</Link> }
				</div>
			</div>
		</div>
	)
}

export default BlogItem
