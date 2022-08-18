import s from './ChooseTemp.module.scss'
import { useEffect, useState } from 'react';

export default function ChooseTemp({className,title = 'количество цифр',type,disable,isAnswer,setAnswer}) {
    const [value,setValue] = useState(type === 'Скорость' ? 0.1 : 1)
    const increment = () => {
       
        if(type === 'Скорость') {
            setValue ((Number(value) + 0.1).toFixed(1))
        }
        else  setValue (Number(value) + 1)
       
    }
    const decrement = () => {
     
        if(type === 'Скорость') {
            setValue ((Number(value) - 0.1).toFixed(1))
        }
        else {
            setValue (Number(value) - 1)
        }
       if (!isAnswer) {
            if (value === 0  && type === "Скорость" ) {
                setValue(0.1)
            }
            else if (value === 1 && !type) {
                setValue(1)
            }
       }

      
        
    }   
    useEffect(() => {
       if(!isAnswer) {
        if(value < 0 ) {
            if (type === 'Скорость') {
            setValue(0.1)
            }
            else setValue(1)
        }
       }
    },[value])
    useEffect(()=> {
        if(setAnswer) {
            setAnswer(Number(value))
        }
    },[value])
    return(
        <div className={s.temp} >
            <h2 className={s.title}>
             {title}
            </h2>
            <div className={`${s.container} ${className}`}>
                <div onClick={!disable ? decrement : null}  className={s.box}>
                    <img src={"/img/icons/minus.svg"} alt="" />
                </div>
                <div>
                        <input disabled={disable} value={value} onChange={(e) => setValue(e.target.value)} type="number" name="" id="" />
                </div>
                <div onClick={!disable ? increment : null} className={s.box}>
                    <img src="/img/icons/plus.svg" alt="" />
                </div>
            </div>
        </div>
    )
}