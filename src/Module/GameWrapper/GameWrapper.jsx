import ChooseTemp from '../../Components/chooseTemp/ChooseTemp'
import Select from '../../Components/selects/Select'
import s from './GameWrapper.module.scss'

export default function GameWrapper() {

    return(
        <div className={` ${s.container}`}>
            <div className={s.parent}>
                 <div className={s.absolute}>
                    <div className={s.cardWrap}>
                        <img className={s.topStick} src={'/img/stick.png'}alt="" />
                        <div className={s.Card}>
                            
                                <h2>Флеш-анзан</h2>
                        </div>
                        <img className={s.bottomStick} src={'/img/stick.png'}alt="" />
                    </div>
                </div>
            <div className={s.game}>
              
                <div className={s.settings}>
                    <Select/>
                    <ChooseTemp/>
                    <ChooseTemp/>
                    <ChooseTemp/>
                </div>
                <div className={s.button}>
                    <button>Начать</button>
                </div>
            </div>
            </div>
        </div>
    )
}