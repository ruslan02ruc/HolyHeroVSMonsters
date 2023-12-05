import './Blog.scss'

function Blog({ blog }) {
	let date = blog?.date?.split('T')[0].split('-').reverse().join('/')
	let loading = blog?.id !== undefined
	
	return (
		// <div className="blog">
		// 	<div className="blog__container">
		// 		<p className="blog__data">{date}</p>
		// 		<img className="blog__img" src={blog?.img} alt="blog" />
		// 		<h1 className="blog__title">{blog?.title}</h1>
		// 		{/* <p className="blog__desc">{blog.description}</p> */}
		// 		<div className="blog__desc" dangerouslySetInnerHTML={{ __html: blog?.description }}/>
		// 	</div>
		// </div>
		<>
			{loading ? (
				<div className="blog">
					<div className="blog__container">
						<p className="blog__data">{date}</p>
						<img className="blog__img" src={blog?.img} alt="blog" />
						<h1 className="blog__title">{blog?.title}</h1>
						{/* <p className="blog__desc">{blog.description}</p> */}
						<div className="blog__desc" dangerouslySetInnerHTML={{ __html: blog?.description }}/>
					</div>
				</div>
			) : (
				<div className='blog__loading'>Loading</div>
			)}
		</>
	)
}

export default Blog
