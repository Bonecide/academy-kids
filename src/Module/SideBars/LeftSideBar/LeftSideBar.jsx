import { Link } from 'react-router-dom'
import s from './LeftSideBar.module.scss'
import games from '../../../fake-data/games.json'
import { useState } from 'react'
export default function LeftSideBar() {

    const [roll,setRoll] = useState(false)
    return(
        <div style={{'width' : `${roll? "5%" : '20%'}`, 'transition' : 'all 0.5s'}} className={s.sidebar}>
           <div className={s.topor}>
           <div style={{'display' : `${roll ? 'none' : 'block'}`}} className={s.img}>   
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
                            <p style={{'display' : `${roll ? 'none' : 'block'}`}}>{game.game}</p>
                        </div>
                    ))}
            </div>
           </div>
            <div onClick={() => setRoll(!roll)} className={s.rollup}>
                <div>
                    <img style={{'transform' : `${roll ? 'rotate(180deg)' : 'rotate(0deg)'}`}} src={'/img/icons/back.svg'} alt="" />
                </div>
                <p style={{'display' : `${roll ? 'none' : 'block'}`}}>Свернуть</p>
            </div>
        </div>
    )
}