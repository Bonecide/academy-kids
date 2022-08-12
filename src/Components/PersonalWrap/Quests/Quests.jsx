import s from './Quests.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteQuest } from '../../../store/QuestsSlice';

export default function Quests() {
    const quests = useSelector((state) => state.quests)
    const navigate = useNavigate()
    const dispath = useDispatch()
    return(
        <div className={s.container}>
                    <div className={s.wrapper}>
                        <div className={s.Wrap}>
                            <div className={s.name}>
                                <p>Название</p>
                            </div>
                            <div className={s.type}>
                                <p>Тип задания</p>
                            </div>
                            <div className={s.time}>
                                <p>Осталось</p>
                            </div>
                            <div className={s.status}>
                                <p>Статус</p>
                            </div>
                            <div className={s.points}>
                                <p>Баллы</p>
                            </div>
                            <div className={s.icons}/>
                        </div>
                        {quests.map((info,idx) => (
                            <div key={`questN${idx}`} className={s.Wrap}>
                                <div className={s.name}>
                                    <p>{info.name}</p>
                                </div>
                                <div className={s.type}>
                                    <p>{info.type}</p>
                                </div>
                                <div className={s.time}>
                                    <p>{`${info.time} Дней`}</p>
                                </div>
                                <div className={s.status}>
                                    <p>{info.status? 'Выполнено' : 'Не выполнено'}</p>
                                </div>
                                <div className={s.points}>
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