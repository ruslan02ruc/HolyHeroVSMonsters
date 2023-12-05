import './Video.scss'
import video from '../../assets/video/gameplay.mp4'

function App() {
  return (
    <section id="video-main">
        <div className="video-main__container">
            <div className="video-main__text">
                <h1>Holy Hero VS Monsters — 2D Roguelike</h1>
                <p>Вас ожидает более тысячи созданных вручную областей.<br/>
                    Каждая из них кишит смертельно опасными монстрами и огромными боссами, стремящимися оборвать вашу жизнь.<br/>
                    Дойдите до финального босса и выберитесь с подземелья, либо продолжите своё приключение,<br/>
                    чтобы выяснить, как долго вы сможете продержаться.<br/>
                    Благодаря умной системе повышения уровня ваша сила и сила ваших врагов будет постоянно расти во время игры.
                </p>
            </div>
            <video width="720" height="360" muted="muted" autoplay="autoplay" loop src={video} className="video-main__video">
                <source src={video} type="video/mp4"/>
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    </section>
  )
}

export default App
