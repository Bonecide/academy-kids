import s from './ChooseNumbers.module.scss'
import { useEffect, useState } from 'react';

export default function ChooseNumbers({min = 1 , max = 9}) {
    const [activeNumber,setActiveNumber] = useState(1)
    const [numbers,setNumbers] = useState()
  
    useEffect(() => {
        const num = []
        for (let i = 1; i < max + 1; i++) {
            num.push(i)
            setNumbers(num)
        }
        
    },[])
    return(
        <div className={s.numbers}>
            <p>Цифры</p>
            <div className={s.container}>
            {numbers && numbers.map((info,idx) => (
                <div onClick={() => setActiveNumber(info)} className={info === activeNumber ? s.activeNumber : s.number } key={`NumberN${info}`}>
                    {info}
                </div>
            ))}
            </div>
        </div>
    )
}