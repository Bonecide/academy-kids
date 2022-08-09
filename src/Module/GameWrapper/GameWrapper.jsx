import { useState } from 'react'
import ChooseTemp from '../../Components/chooseTemp/ChooseTemp'
import Select from '../../Components/selects/Select'
import s from './GameWrapperAnzan.module.scss'
import Settings from './../../Components/Settings/Settings';
import './timly.scss'

export default function GameWrapper({title ,img}) {
    const [isSettings,setIsSettings] = useState(false)
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
                            <div onClick={() => setIsSettings(!isSettings)} style= {{'background' : isSettings && 'linear-gradient(142.82deg, #97CE4E 11.11%, #58AA2C 83.28%)'}} className={s.gameSettings}>
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
                <div className={s.mobileOnly}>
                        <div>
                                <h1>{title}</h1>
                        </div>
                    <div className={s.gameSettings__container}>
                        <div className={s.gameSettings}>
                                    <img src={'/img/icons/play.svg'} alt="" />
                            </div>
                            <div onClick={() => setIsSettings(!isSettings)} style= {{'background' : isSettings && 'linear-gradient(142.82deg, #97CE4E 11.11%, #58AA2C 83.28%)'}} className={s.gameSettings}>
                                    <img src={'/img/icons/gamesetting.svg'} alt="" />
                            </div>
                        </div>
                    </div>  
                {!isSettings ? (
                <>
                   
                    <div className={s.settings}>
                    <Select     className={'inputs'}/>
                    <ChooseTemp className={'inputs'}/>
                    <ChooseTemp className={'inputs'}/>
                    <ChooseTemp className={'inputs'} title='Время, сек.' type="Скорость"/>
                    </div>
                <div className={s.button}>
                    <button>Начать</button>
                </div>
                </>  
                ) : <Settings/>}

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