import s from './ChooseTemp.module.scss'
import { useEffect, useState } from 'react';

export default function ChooseTemp() {
    const [value,setValue] = useState(1)
    const increment = () => {
        setValue (Number(value) + 1)
    }
    const decrement = () => {
        setValue (value - 1)
        if (value === 0 || 1 ) {
            setValue(1)
        }
    }   
    useEffect(() => {
        if(value < 0 ) {
            setValue(1)
        }
    },[value])
    return(
        <div className={s.temp}>
            <h2 className={s.title}>
             количество цифр
            </h2>
            <div className={s.container}>
                <div onClick={decrement}  className={s.box}>
                    <img src={"/img/icons/minus.svg"} alt="" />
                </div>
                <div>
                        <input value={value} onChange={(e) => setValue(e.target.value)} type="number" name="" id="" />
                </div>
                <div onClick={increment} className={s.box}>
                    <img src="/img/icons/plus.svg" alt="" />
                </div>
            </div>
        </div>
    )
}