import './BlogAdd.scss'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

function BlogAdd({ blogId, blogItem, setBlogItem, handleClick }) {
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ align: [] }],
      [{ list: 'ordered'}, { list: 'bullet' }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ],
    clipboard: {
      matchVisual: false,
    },
	};
  const placeholder = 'Compose an epic...';

	return (
		<div className="blogAdd">
			<div className="blogAdd__container">
				<h1>Добавление Поста</h1>
				<form className='blogAdd__form'>
					<label>
						<p>Добавить Дату</p>
						<input value={blogItem?.date} onChange={e => setBlogItem({ ...blogItem, date: e.target.value })} type="date" name='data' placeholder='data' className='blogAdd__input' required />
					</label>
					<label>
						<p>Добавить Картинку</p>
						<input value={blogItem?.img} onChange={e => setBlogItem({ ...blogItem, img: e.target.value })} type="text" name='img' placeholder='img' className='blogAdd__input' required />
					</label>
					<label>
						<p>Добавить Название</p>
						<input maxlength="50" value={blogItem?.title} onChange={e => setBlogItem({ ...blogItem, title: e.target.value })} type="text" name='title' placeholder='title' className='blogAdd__input' required />
					</label>
					<label>
						<p>Добавить Короткое Описание</p>
						<textarea maxlength="80" rows="1" value={blogItem?.shortDesc} onChange={e => setBlogItem({ ...blogItem, shortDesc: e.target.value })} placeholder='short description' className='blogAdd__input' required />
					</label>
					<label>
						<p>Добавить Описание</p>
						<ReactQuill theme="snow" modules = {modules} value={blogItem?.description} onChange={e => setBlogItem({ ...blogItem, description: e })} placeholder={placeholder}/>
					</label>
					{blogId !== 'add' && <button type="button" className='blogAdd__button' onClick={() => handleClick()}>Изменить Пост</button>}
					{blogId === 'add' && <button type="button" className='blogAdd__button' onClick={() => handleClick()}>Добавить Пост</button>}
				</form>
			</div>
		</div>
	)
}

export default BlogAdd
