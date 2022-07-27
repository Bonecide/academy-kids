import s from './MainPageCard.module.scss'

export default function MainPageCard({img,link,buttonText}) {

    return(
       <div className={s.container}>
        <img className={s.topStick} src={'/img/stick.png'}alt="" />
         <div className={s.Card}>
            
            <div style={{'background' : `url(${img})`}} className={s.img}>
               
            
            <div className={s.button}>
                <button>{buttonText}</button>
            </div>
            </div>
        </div>
        <img className={s.bottomStick} src={'/img/stick.png'}alt="" />
       </div>
    )
}