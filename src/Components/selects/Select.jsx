import s from './select.module.scss'
import { useState } from 'react';

export default function Select() {
 
    const labels = ['Простой счёт' ,'Какой-то счёт', 'Какой-то счёт']
    const [type,setType] = useState(0)
    const [open,setOpen] = useState(false)
    const choose = (idx) => {
        setType(idx)
        setOpen(false)
    }
    return(
        <div className={s.container}>
            
            <h2 className={s.title}>Модуль</h2>
            <div className={s.select}>
                <div onClick={() => setOpen(!open)} className={s.info}>
                    <h2>{labels[type]}</h2>
                    <img style={{'transform' : `${open ? 'rotate(180deg)' : 'rotate(0deg)'}`}} src={'/img/icons/selectsArrow.svg'} alt="arrow" />
                </div>
                {open && (
                    <div className={s.menu}>
                        {labels.map((info,idx) => (
                            <div className={s.menuOption} onClick={() => choose(idx)} key={`menuInfoN${idx + Math.random()}`}>
                                <h2>{info}</h2>
                            </div>
                        ))}
                    </div>
                )}
            </div>  
        </div>
    )
} 