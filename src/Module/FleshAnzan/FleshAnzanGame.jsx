import s from './FleshAnzanGame.module.scss'
import { useEffect, useState } from 'react';
import ChooseTemp from '../../Components/chooseTemp/ChooseTemp';

export default function FleshAnzanGame({setIsGame}) {
    const [TrueAnswer,setTrueAnswer] = useState()
    const [trueNumbers,setTrueNumbers] = useState()
    const [nowNumber,setNowNumber] = useState(0)
    const [yourAnswer,setYourAnswer] = useState(false)
    const [answer,setAnswer] = useState()
    const [isCorrect,setIsCorret] = useState()

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const handleSubmit = ()=> {
        if(answer === TrueAnswer) {
            setIsCorret('yes')
        }
        else {
            setIsCorret('no')
        }
        setYourAnswer(false)
    }
    useEffect(() => {
        const numbers = []
        for (let i = 0; i < 10; i++) {
            let number = getRandomInt(-10,10)
            numbers.push(number)
        }
        setTrueNumbers(numbers)
        if(numbers.length) {
            
            if(!TrueAnswer) {
                setTrueAnswer(numbers.reduce((partialSum, a) => partialSum + a, 0))
            }
        }
      
          
    },[])
  useEffect(()=> {
    setTimeout(() => {
        setNowNumber(nowNumber + 1)
    }, 1000);
  },[])
  useEffect(()=> {
    if(yourAnswer === false) {
        setTimeout(() => {
            setNowNumber(nowNumber + 1)
        }, 1000); 
        
    }
   
    if (nowNumber === 10) {
        setYourAnswer(true)
    }
  },[nowNumber])
  
    return(

    <div className={s.cardWrap}>
        <img className={s.topStick} src={'/img/CardStick.png'}alt="" />
        <div className={s.Card}>
            
                {!yourAnswer? <h2>{trueNumbers && trueNumbers[nowNumber]}</h2> : (
                    <div className={s.yourAnswer}>
                        <h2>Результат</h2>
                        <ChooseTemp setAnswer={setAnswer} isAnswer={true} title='' className={s.select}/>
                        <button onClick={handleSubmit}>Готово</button>
                    </div>
                )}
                {isCorrect === 'yes' && (
                    <div className={s.correct}>
                        <img src="/img/TrueEmoji.svg" alt="" />
                        <h2>{answer} = {TrueAnswer}</h2>
                        <button onClick={()=> setIsGame(false)} >Продолжить</button>

                    </div>)}
                {isCorrect === 'no' && (
                    <div className={s.correct}>
                        <img src="/img/FalseEmoji.svg" alt="" />
                        <h2>{answer} ≠ {TrueAnswer}</h2>
                        <button onClick={()=> setIsGame(false)} >Ещё раз</button>
                    </div>
                )}
        </div>
        <img className={s.bottomStick} src={'/img/CardStick.png'}alt="" />
    </div>
    )
}