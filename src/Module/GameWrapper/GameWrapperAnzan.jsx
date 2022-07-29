import ChooseTemp from '../../Components/chooseTemp/ChooseTemp'
import Select from '../../Components/selects/Select'
import s from './GameWrapperAnzan.module.scss'

export default function GameWrapperAnzan() {

    return(
        <div className={` ${s.container}`}>
            <div className={s.parent}>
                 <div className={s.absolute}>
                    <div className={s.cardWrap}>
                        <img className={s.topStick} src={'/img/stick.png'}alt="" />
                        <div className={s.Card}>
                            
                                <h2>Флеш-анзан</h2>
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
                                 <img src={'/img/icons/volumeon.svg'} alt="" />
                        </div>
                        <div className={s.gameSettings}>
                                 <img src={'/img/icons/fullscreen.svg'} alt="" />
                        </div>
                    </div>
                </div>
            <div className={s.game}>
              
                <div className={s.settings}>
                    <Select/>
                    <ChooseTemp/>
                    <ChooseTemp/>
                    <ChooseTemp title='Время, сек.' type="Скорость"/>
                </div>
                <div className={s.button}>
                    <button>Начать</button>
                </div>
            </div>
            </div>
            <div>
                <div className={s.sideImg}>
                    <img src={'/img/BoyAndGirlFull.png'} alt="" />
                </div>
            </div>
        </div>
    )
}