import ChooseTemp from '../../Components/chooseTemp/ChooseTemp'
import Select from '../../Components/selects/Select'
import s from './GameWrapperAnzan.module.scss'

export default function GameWrapper({title ,img}) {

    return(
        <div className={` ${s.container}`}>
            <div className={s.parent}>
                 <div className={s.absolute}>
                    <div className={s.cardWrap}>
                        <img className={s.topStick} src={'/img/stick.png'}alt="" />
                        <div className={s.Card}>
                            
                                <h2>{title}</h2>
                        </div>
                        <img className={s.bottomStick} src={'/img/stick.png'}alt="" />
                    </div>
                    <div className={s.gameSettings__container}>
                        <div className={s.gameSettings}>
                                <img src={'/img/icons/play.svg'} alt="" />
                        </div>
                        <div className={s.gameSettings}>
                                <img src={'/img/icons/gamesetting.svg'} alt="" />
                        </div>
                        <div className={s.gameSettings}>
                                 <img src={'/img/icons/fullscreen.svg'} alt="" />
                        </div>
                    </div>
                </div>
            <div className={s.game}>
              
                <div className={s.settings}>
                    <ChooseTemp className={s.Select}/>
                    <ChooseTemp className={s.Select}/>
                    <ChooseTemp title='Время, сек.' type="Скорость" className={s.Select}/>
                </div>
                <div className={s.button}>
                    <button>Начать</button>
                </div>
            </div>
            </div>
            <div>
                <div className={s.sideImg}>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}