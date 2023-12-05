import './ObIgre.scss'

function App() {
	return (
		<section id="ob-igre">
			<div className="ob-igre__container">
				<div className="ob-igre-top">
					<p className="ob-igre-top__item">Совершенно новый стиль</p>
					<p className="ob-igre-top__item">Уникальное оружие</p>
					<p className="ob-igre-top__item">Уникальные противники</p>
					<p className="ob-igre-top__item">Проработанный мир</p>
				</div>
				<div className="ob-igre-botton">
					<div className="ob-igre-botton__item">
						<h3>ОТКРЫВАЙТЕ НОВЫЕ СПОСОБЫ ИГРЫ</h3>
						<p>Выберете персонажа из 5 доступных с различной экипировкой.</p>
					</div>
					<div className="ob-igre-botton__item">
						<h3>НАХОДИТЕ МОГУЩЕСТВЕННЫЕ ПРЕДМЕТЫ</h3>
						<p>Каждая следующая попытка будет отличаться от предыдущей благодаря рандомной генерации уровня.<br /> Чем
							больше монет вы соберёте, тем более сильных врагов вы сможете победить.</p>
					</div>
					<div className="ob-igre-botton__item">
						<h3>ИГРАЙТЕ В ОДИНОЧКУ ИЛИ С ДРУЗЬЯМИ</h3>
						<p>Отправляйтесь в путешествие в одиночку или пригласите до трёх друзей в совместный сетевой режим.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default App
