import ChooseNumbers from '../../Module/ChooseNumbers/ChooseNumbers'
import RadioButton from '../RadioButton/RadioButton'
import Select from '../selects/Select'
import s from './Settings.module.scss'
import ChooseTemp from './../chooseTemp/ChooseTemp';

export default function Settings() {

    return(
    <div className={` ${s.container}`}>
            <div className={s.numbers}>
                <Select className={s.select} />
                <ChooseNumbers min={1} max={9}/>
            </div>
            <div className={s.method}>
                    <form action="">
                          
                        <RadioButton title='На абакусе'/>
                        <RadioButton title='Ментально'/> 
                    </form>
                    <Select className={s.bigSelect} />
                    <Select className={s.smallSelect}/>
            </div>
            <div className={s.temps}>
                    <ChooseTemp className={s.temp}/>
                    <ChooseTemp title='Прогресс' className={s.temp}/>
                    <ChooseTemp title='Учеличить / уменьшить' className={s.temp}/>
                    <ChooseTemp title='Количество слагаемых' className={s.temp}/>
                    <ChooseTemp title='Прогресс' className={s.temp}/>
                    <ChooseTemp title='Учеличить / уменьшить' className={s.temp}/>
                    <ChooseTemp type={'Скорость'} title='Время, сек.' className={s.temp}/>
                    <ChooseTemp title='Прогресс' className={s.temp}/>
                    <ChooseTemp title='Учеличить / уменьшить' className={s.temp}/>
            </div>
            
    </div>
    )
}