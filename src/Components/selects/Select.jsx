import s from './select.module.scss'
import { useState } from 'react';

export default function Select( {className,labels = ['Простой счёт' ,'Какой-то счёт', 'Какой-то счёт'],title = 'Модуль',disable}) {
 
   
    const [type,setType] = useState(0)
    const [open,setOpen] = useState(false)
    const choose = (idx) => {
        setType(idx)
        setOpen(false)
    }
    const ToggleMenu = () => {
        if(!disable) {
            setOpen(!open)
        }
    }
    return(
        <div className={s.container}>
            
            <h2 className={s.title}>{title}</h2>
            <div className={`${s.select} ${className}`}>
                <div onClick={ToggleMenu} className={s.info}>
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