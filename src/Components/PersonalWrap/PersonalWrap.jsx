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
                    <img src="/img/AccountAvatar.svg" alt="" />
                    <div className={s.choose}>
                        <div onClick={() => setNowPage('main')} className={s.arrowbox}>
                            <img src="/img/icons/arrow-back.svg" alt="" />
                        </div>
                        <div className={s.bluebuttons}>
                            <div className={`${s.box} ${s.stat}`}>
                                <p>Статистика</p>
                            </div>
                            <div onClick={() => setNowPage('quests')} className={s.box} >
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