import s from './infoNotForm.module.scss'
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function InfoNotForm() {
    const info = useSelector((state) => state.personal.info);
    const [isView,setIsView] = useState(false)
    return(
        <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.wrap}>
                        <h5>Имя</h5>
                        <div className={s.input}>
                            <p>
                                {info.name}
                            </p>
                        </div>
                    </div>
                    <div className={s.wrap}>
                        <h5>Фамилия</h5>
                        <div className={s.input}>
                            <p>
                                    {info.surname}
                            </p>
                        </div>
                    </div>
                    <div className={s.wrap}>
                        <h5>Отчество</h5>
                        <div className={s.input}>
                            <p> 
                                    {info.middlename}
                            </p>    
                            
                        </div>
                    </div>
                    <div className={s.wrap}>
                        <h5>Логин</h5>
                        <div className={s.input}>
                            <p>
                                {info.login}
                            </p>
                        </div>
                    </div>
                    <div className={s.wrap}>
                        <h5>E-mail</h5>
                        <div className={s.input}>
                            <p>
                                    {info.mail}
                            </p>
                        </div>
                    </div>
                    <div className={s.wrap}>
                        <h5>Пароль</h5>
                        <div className={s.input}>
                            <p> 
                                {isView? info.password : '******'}   
                            </p>    
                            <img onClick={()=> setIsView(!isView)} src="/img/icons/eye.svg" alt="" />
                        </div>
                    </div>
                    <div className={s.wrap}>
                        <h5>Адрес</h5>
                        <div className={s.input}>
                            <p>
                                {info.address}
                            </p>
                        </div>
                    </div>
                    <div className={s.wrap}>
                        <h5>Дата рождения</h5>
                        <div className={s.input}>
                            <p>
                                    {info.date}
                            </p>
                        </div>
                    </div>
                    <div className={s.wrap}>
                        <h5>Паспорт</h5>
                        <div className={s.input}>
                            <p> 
                                    {info.passport}
                            </p>    
                        </div>
                    </div>
            </div>
            <div className={s.parent}>
                    <h2>Родители</h2>
                    <div className={s.container}>
                    <div className={s.wrap}>
                        <h5>Имя</h5>
                        <div className={s.input}>
                            <p>
                                {info.parentname}
                            </p>
                        </div>
                    </div>
                    <div className={s.wrap}>
                        <h5>Фамилия</h5>
                        <div className={s.input}>
                            <p>
                                    {info.parentsurname}
                            </p>
                        </div>
                    </div>
                    <div className={s.wrap}>
                        <h5>Контактный телефон</h5>
                        <div className={s.input}>
                            <p> 
                                    {info.phone}
                            </p>    
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}