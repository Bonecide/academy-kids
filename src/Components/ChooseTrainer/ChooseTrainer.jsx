import s from './ChooseTrainer.module.scss'
import item from '../../fake-data/choose-trainer.json'
import MainPageCard from '../MainPageCard/MainPageCard'
import { useSelector } from 'react-redux';
import Slider from '../Slider/Slider';
export default function ChooseTrainer() {
  

    
    return(
      <>
      <h1 className={s.headline}>Выберите тренажёр</h1>
        <div className={s.container}>
                <div className={s.desktop}>
                {item.map((info,idx) => (
                <MainPageCard 
                img={info.img}
                buttonText={info.text}
                link={info.link}
                key={`trainN${idx}`}/>
            ))}
                </div>
            <div className={s.Slider}>
                <Slider/>
            </div>
        </div>
     </>   
    )
}