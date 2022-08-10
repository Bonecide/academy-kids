import Input from '../Input/Input'
import s from './PersonalWrap.module.scss'
import { useState } from 'react';
import InputMask from 'react-input-mask';
import MainInfoAcc from './MainInfoAcc/MainInfoAcc';
export default function PersonalWrap() {

    
    return(

        <div className={s.container}>
            <div className={s.parent}>
                <div className={s.absolute}>
                    <img src="/img/AccountAvatar.svg" alt="" />
                </div>
                <div className={s.wrap}>
                    <MainInfoAcc/>
                </div>
            </div>
        </div>
    )
}