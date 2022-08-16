import s from './Quests.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteQuest, setQuests } from '../../../store/QuestsSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import MobileQuests from './MobileQuests/MobileQuests';

export default function Quests() {

    // Функции Сортировки
    function SortArrayByType(x, y){
        if (x.type < y.type) {return -1;}
        if (x.type > y.type) {return 1;}
        return 0;
    }

    function SortByStatus (value) {
        return value.status ? -1 : 1
        
    }

    function SortByNumbers (x,y) {
        return x.time - y.time
    }

    

    //Переменные
    const quests = useSelector((state) => state.quests.info)
    let timly = [...quests]
    const navigate = useNavigate()
    const dispath = useDispatch()
    const [TypeFilters,setTypeFilters] = useState()
    const [statusFilters,setStatusFilters] = useState()
    const [timeFilters,setTimeFilters] = useState()
    const [points,setPoints] = useState()

    

   //Исполнение Сортировки По Типу
    useEffect(() => {
        if(TypeFilters === 'decrement') {
            dispath(setQuests(timly.sort(SortArrayByType)))
        }
      
        else if (TypeFilters === 'increment') {
            dispath(setQuests(timly.sort(SortArrayByType).reverse()))
        }
    },[TypeFilters])

//Исполнение Сортировки По Статусу

    useEffect(() => {
        if(statusFilters === 'decrement') {
            dispath(setQuests(timly.sort(SortByStatus)))
           
        }
        
        else if (statusFilters === 'increment') {
            dispath(setQuests(timly.sort(SortByStatus).reverse()))
        }
    },[statusFilters])

    //Исполнение Сортировки По Времени

    useEffect(() => {
        if(timeFilters === 'decrement') {
            dispath(setQuests(timly.sort(SortByNumbers)))
           
        }
        
        else if (timeFilters === 'increment') {
            dispath(setQuests(timly.sort(SortByNumbers).reverse()))
        }
    },[timeFilters])

    //Исполнение Сортировки По Очкам

    useEffect(() => {
        if(points === 'decrement') {
            dispath(setQuests(timly.sort(SortByNumbers)))
           
        }
        
        else if (points === 'increment') {
            dispath(setQuests(timly.sort(SortByNumbers).reverse()))
        }
    },[points])
    return(
        <div className={s.container}>
                    <div className={s.wrapper}>
                        <div className={s.Wrap}>
                            <div className={s.name}>
                                <p>Название</p>
                                
                            </div>
                            <div onClick={()=> {
                                if(TypeFilters === 'decrement') {
                                    setTypeFilters('increment')
                                }
                                else {
                                    setTypeFilters('decrement')
                                }
                            }} className={s.type}>
                                <p>Тип задания</p>
                                <img style={{'transform' : `${TypeFilters === 'decrement' ? 'rotate(180deg)' : 'rotate(0deg)'} `, 'transition' : 'all 0.3s'}} src="/img/icons/FiltersArrow.svg" alt="" />
                            </div>
                            <div onClick={()=> {
                                if(timeFilters === 'decrement') {
                                    setTimeFilters('increment')
                                }
                                else {
                                    setTimeFilters('decrement')
                                }
                            }} className={s.time}>
                                <p>Осталось</p>
                                <img style={{'transform' : `${timeFilters === 'decrement' ? 'rotate(180deg)' : 'rotate(0deg)'} `, 'transition' : 'all 0.3s'}} src="/img/icons/FiltersArrow.svg" alt="" />
                            </div>
                            <div onClick={()=> {
                                if (timeFilters === 'decrement') {
                                    setTimeFilters('increment')
                                } else {
                                    setTimeFilters('decrement')
                                }
                            }} className={s.status}>
                                <p>Статус</p>
                                <img style={{'transform' : `${statusFilters === 'decrement' ? 'rotate(180deg)' : 'rotate(0deg)'} `, 'transition' : 'all 0.3s'}} src="/img/icons/FiltersArrow.svg" alt="" />
                            </div>
                            <div onClick={()=> {
                                if(points === 'decrement') {
                                    setPoints('increment')
                                }
                                else {
                                    setPoints('decrement')
                                }
                            }} className={s.points}>
                                <p>Баллы</p>
                                <img  style={{'transform' : `${points === 'decrement' ? 'rotate(180deg)' : 'rotate(0deg)'} `, 'transition' : 'all 0.3s'}} src="/img/icons/FiltersArrow.svg" alt="" />
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
                                <div  className={s.time}>
                                    <p>{`${info.time} Дней`}</p>
                                </div>
                                <div className={s.status}>
                                    <p className={info.status && s.active}>{info.status? 'Выполнено' : 'Не выполнено'}</p>
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
                    <MobileQuests/>
        </div>
    )
}