import s from './MainPageCard.module.scss'
import { useNavigate } from 'react-router-dom';
export default function MainPageCard({img,link,buttonText}) {
    const navigate =useNavigate()
    return(
       <div className={s.container}>
        <img className={s.topStick} src={'/img/CardStick.png'}alt="" />
         <div className={s.Card}>
            
            <div style={{'background' : `url(${img})`}} className={s.img}>
               
            
            <div className={s.button}>
                <button onClick={() => navigate(link)}>{buttonText}</button>
            </div>
            </div>
        </div>
        <img className={s.bottomStick} src={'/img/CardStick.png'}alt="" />
       </div>
    )
}