import s from './MobileQuests.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteQuest } from '../../../../store/QuestsSlice';

export default function MobileQuests() {
    const quests = useSelector((state)=> state.quests.info)
    const navigate = useNavigate()
    const dispath = useDispatch()
    return(
        <div className={s.container}>
            <div className={s.Wrapper}>
                    {quests.map((info,idx) => (
                        <div className={s.Wrap} key={`MobileQuestsN${idx}`}>
                                <div>
                                    <h3>Название:</h3>
                                    <p>{info.name}</p>
                                </div>
                                <div>
                                    <h3>Тип задания:</h3>
                                    <p>{info.type}</p>
                                </div>
                                <div>
                                    <h3>Осталось:</h3>
                                    <p>{info.time} дней</p>
                                </div>
                                <div> 
                                    <h3>Статус:</h3>
                                    <p className={info.status && s.active}>{info.status? 'Выполнено' : 'Не выполнено'}</p>
                                </div>
                                <div>
                                    <h3>Баллы:</h3>
                                    <p>{info.Points}</p>
                                </div>
                                <div className={s.icons}>
                                    <div onClick={()=> navigate(info.link)} className={s.play}>
                                            <img src="/img/icons/play.svg" alt="" />
                                    </div>
                                    <img onClick={() => dispath(deleteQuest(idx))} src="/img/icons/QuestDelete.svg" alt="" />
                                </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}