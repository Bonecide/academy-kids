import { Link } from 'react-router-dom'
import s from './LeftSideBar.module.scss'
import games from '../../../fake-data/games.json'
export default function LeftSideBar() {

    return(
        <div className={s.sidebar}>
           <div className={s.topor}>
           <div className={s.img}>   
                    <Link to={'/'}>
                        <img src={'/img/logo.svg'} alt="" />
                    </Link>
            </div>
            <div className={s.container}>
                    {games.map((game,idx) => (
                        <div key={`gameN${idx}`} className={s.game}>
                            <div>
                                <img src={game.img} alt={game.game} />
                            </div>
                            <p>{game.game}</p>
                        </div>
                    ))}
            </div>
           </div>
            <div className={s.rollup}>
                <div>
                    <img src={'/img/icons/back.svg'} alt="" />
                </div>
                <p>Свернуть</p>
            </div>
        </div>
    )
}