import s from './ChooseTrainer.module.scss'
import item from '../../fake-data/choose-trainer.json'
import MainPageCard from '../MainPageCard/MainPageCard'
import { useSelector } from 'react-redux';
export default function ChooseTrainer() {
  

    
    return(
      <>
      <h1 className={s.headline}>Выберите тренажёр</h1>
        <div className={s.container}>
            {item.map((info,idx) => (
                <MainPageCard 
                img={info.img}
                buttonText={info.text}
                link={info.link}
                key={`trainN${idx}`}/>
            ))}
        </div>
     </>   
    )
}