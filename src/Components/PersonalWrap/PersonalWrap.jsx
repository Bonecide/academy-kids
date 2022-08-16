import Input from '../Input/Input'
import s from './PersonalWrap.module.scss'
import { useState } from 'react';
import InputMask from 'react-input-mask';
import MainInfoAcc from './MainInfoAcc/MainInfoAcc';
import Quests from './Quests/Quests';
export default function PersonalWrap() {

    const [nowPage,setNowPage] = useState('main')
    
    return(

        <div className={s.container}>
            <div className={s.parent}>
                <div className={s.absolute}>
                    <img onClick={() => setNowPage('main')} className={s.avatar} src="/img/AccountAvatar.svg" alt="" />
                    <div className={s.choose}>
                        <div onClick={() => setNowPage('main')} className={s.arrowbox}>
                            <img src="/img/icons/arrow-back.svg" alt="" />
                        </div>
                        <div className={s.bluebuttons}>
                            <div style={{'background' : nowPage === 'stat' ? 'linear-gradient(142.82deg, #97CE4E 11.11%, #58AA2C 83.28%)' : 'linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)'}} className={`${s.box} ${s.stat}`}>
                                <p>Статистика</p>
                            </div>
                            <div style={{'background' : nowPage === 'quests' ? 'linear-gradient(142.82deg, #97CE4E 11.11%, #58AA2C 83.28%)' : 'linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)'}} onClick={() => setNowPage('quests')} className={s.box} >
                                <p>Задания</p>
                            </div>
                        </div>
                        <div className={s.arrowbox}>
                            <img src="/img/icons/delete.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className={s.wrap}>
                    {nowPage ==='main' &&  <MainInfoAcc/>}
                    {nowPage ==='quests' &&  <Quests/>}
                </div>
            </div>
        </div>
    )
}