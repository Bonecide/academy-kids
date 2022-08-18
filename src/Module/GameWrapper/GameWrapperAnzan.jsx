import ChooseTemp from '../../Components/chooseTemp/ChooseTemp'
import Select from '../../Components/selects/Select'
import s from './GameWrapperAnzan.module.scss'
import { useState } from 'react';
import Settings from '../../Components/Settings/Settings';
import FleshAnzanGame from '../FleshAnzan/FleshAnzanGame';

export default function GameWrapperAnzan() {
    const [isSettings,setIsSettings] = useState(false)
    const [isGame,setIsGame] = useState(false)

    return(
        <div className={` ${s.container}`}>
        
                <div className={s.parent}>
                    <div className={s.absolute}>
                        <div className={s.cardWrap}>
                            <img className={s.topStick} src={'/img/CardStick.png'}alt="" />
                            <div className={s.Card}>
                                
                                    <h2>Флеш-анзан</h2>
                            </div>
                            <img className={s.bottomStick} src={'/img/CardStick.png'}alt="" />
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
                                <h1>Флеш-Анзан</h1>
                        </div>
                    <div className={s.gameSettings__container}>
                        <div className={s.gameSettings}>
                                    <img src={'/img/icons/play.svg'} alt="" />
                            </div>
                            <div onClick={() => !isGame && setIsSettings(!isSettings)} style= {{'background' : isSettings && 'linear-gradient(142.82deg, #97CE4E 11.11%, #58AA2C 83.28%)'}} className={s.gameSettings}>
                                    <img src={'/img/icons/gamesetting.svg'} alt="" />
                            </div>
                        </div>
                    </div>
                {!isSettings ? (
                 <>
              
                <div className={`${s.settings} ${isGame && s.hiddenMobile}`}>
                <Select disable={isGame && true} className={'inputs'}/>
                <ChooseTemp disable={isGame && true} className={'inputs'}/>
                <ChooseTemp disable={isGame && true} className={'inputs'}/>
                <ChooseTemp disable={isGame && true} className={'inputs'} title='Время, сек.' type="Скорость"/>
                </div>
           {!isGame && (
            <div className={s.button}>
                <button onClick={() => setIsGame(true)}>Начать</button>
            </div>
           )}
            </>  
                ) : <Settings/>}

                </div>
                
             
                {isGame && <FleshAnzanGame setIsGame={setIsGame}/>}
                </div>
                 
                <div className={s.sideImg}>
                    <img src={'/img/BoyAndGirlFull.png'} alt="" />
                </div>
                
        </div>
    )
}