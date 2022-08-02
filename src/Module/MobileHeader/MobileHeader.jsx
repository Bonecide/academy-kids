import s from './MobileHeader.module.scss'
import { useState } from 'react';
import games from '../../fake-data/games.json';
import { Link } from 'react-router-dom';
export default function MobileHeader() {
    const [isOpen,setIsOpen] = useState(false)
    return(
        <header className={s.header_container}>
                <div className={s.header}>
                    <div className={s.bg}>
                    <div onClick={() => setIsOpen(!isOpen)}>
                            {!isOpen ? <img  src="/img/icons/burger.svg" alt="" /> : <img  src="/img/icons/close.svg" alt="" />}
                    </div>
                    <div>
                            <Link to={'/'}>
                            <img className={s.logo} src="/img/mobileLogo.svg" alt="" />
                            </Link>
                    </div>
                    <div>
                            <img className={s.avatar} src="/img/avatar.png" alt="" />
                    </div> 
                    </div>
                </div> 
                {isOpen && (
                    <div className={s.burgerMenu}>
                        <div className={s.games_container}>
                        {games.map((info,idx) => (
                            <Link onClick={() => setIsOpen(false)} to={info.link? info.link : '#'} key={`MobileGameN${idx}`}>
                                    {info.game}
                            </Link>
                        ))}
                        </div>
                    </div>
                )}
        </header>
    )
}