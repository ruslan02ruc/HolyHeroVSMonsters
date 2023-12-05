import './Contact.scss'

import dis from '../../assets/img/dis.png'
import vk from '../../assets/img/vk.png'

function App() {
return (
    <section name="contacts">
        <div className="contacts__container">
            <div className="contacts-top">
                <h1>Связаться с нами</h1>
                <p>По всем интересующим вопросам - holyherovsmonsters@mail.ru</p>
                <div className="contacts-top__media">
                    <a href="https://vk.com/nikitauchiha"><img src={vk} /></a>
                    <a href="https://discord.com/channels/978438714386677792/978438714449596441"><img src={dis} /></a>
                </div>
            </div>
            <div className="contacts-bottom">
                <h1>СИСТЕМНЫЕ ТРЕБОВАНИЯ</h1>
                <div className="contacts__req">
                    <div>
                        <b>МИНИМАЛЬНЫЕ</b>
                        <p>
                            Требуются 64-разрядные процессор и операционная система
                            ОС: Windows 7<br/>
                            Процессор: 2.0 Ghz<br/>
                            Оперативная память: 2 GB ОЗУ<br/>
                            Видеокарта: Nvidia GTX 680, AMD R9 280X<br/>
                            DirectX: Версии 9<br/>
                            Место на диске: 3 GB
                        </p>
                    </div>
                    <div>
                        <b>РЕКОМЕНДОВАННЫЕ</b>
                        <p>
                            Требуются 64-разрядные процессор и операционная система
                            ОС: Windows 10<br/>
                            Процессор: 3.0 Ghz<br/>
                            Оперативная память: 4 GB ОЗУ<br/>
                            Видеокарта: Nvidia GTX 680, AMD R9 280X<br/>
                            DirectX: Версии 11<br/>
                            Место на диске: 3 GB.
                        </p>
                    </div>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default App
