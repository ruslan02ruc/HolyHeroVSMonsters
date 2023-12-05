import './Enemy.scss'
import { Link } from 'react-router-dom'
import bossKnight from '../../assets/img/boss_knight.png'
import bossMoon from '../../assets/img/boss_moon.png'
import bossSun from '../../assets/img/boss_sun.png'

function App() {
  return (
    <section id="enemy">
        <div className="enemy__container">
            <Link to="monsters" className="enemy__link">Противники</Link>
            <div className="enemy_item">
                <img src={bossKnight} className="enemy_item__img" alt="pers" />
                <div className="enemy_item__text">
                    <h2>Темный Рыцарь</h2>
                    <p>Описание.</p>
                </div>
            </div>
            <div className="enemy_item">
                <div className="enemy_item__text">
                    <h2>Падшее Солнце</h2>
                    <p>Описание</p>
                </div>
                <img src={bossSun} className="enemy_item__img" alt="pers" />
            </div>
            <div className="enemy_item">
                <img src={bossMoon} className="enemy_item__img" alt="pers" />
                <div className="enemy_item__text">
                    <h2>Мрачная Луна</h2>
                    <p>Описание</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default App
