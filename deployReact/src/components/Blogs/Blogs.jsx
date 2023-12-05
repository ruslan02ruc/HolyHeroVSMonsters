import "./Blogs.scss";
import BlogItem from "../BlogItem/BlogItem";

function Blogs({ blogList }) {
	return (
		<section id="blog">
			<div className="blog_container">
				<h1>Блог</h1>
				{blogList.length !== 0 ? (
					blogList.map((blog) => <BlogItem key={blog.id} blog={blog} />
				)
				) : (
					<div>Loading</div>
				)}
			</div>
		</section>
	);
}

export default Blogs;
