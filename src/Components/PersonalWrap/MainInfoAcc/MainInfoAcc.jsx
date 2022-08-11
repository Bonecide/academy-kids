import s from './MainInfoAcc.module.scss'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UpdateInfo } from '../../../store/PersonalInfoSlice';

import  InputMask  from 'react-input-mask';
import InfoNotForm from './InfoNotForm/InfoNotForm';
export default function MainInfoAcc() {

    const info = useSelector((state) => state.personal.info);
    const [isChange,setIsChange] = useState(false)
    const[value,setValue] = useState(   info ? info : {})
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
       
      } = useForm({
        mode: "onSubmit"
      });
      const save = (data) => {
        console.log(data)
        dispatch(UpdateInfo(data))
        setIsChange(false)
      }
     
        return (
            <>
                {isChange ? (
                    <form onSubmit={handleSubmit(save)} className={s.form}>
                    <div className={s.inputs}>
                    <div>
                            <p>Имя</p>
                            <input required value={value.name} onInput={(e) => setValue({name: e.target.value })}  {...register('name')} type="text" />
                    </div>
                    <div  >
                            <p>Фамилия</p>
                            <input required value={value.surname} onInput={(e) => setValue({surname: e.target.value })} {...register('surname')} type="text" />
                    </div>
                    <div>
                            <p>Отчество</p>
                            <input value={value.middlename} onInput={(e) => setValue({middlename: e.target.value })} {...register('middlename')} type="text" />
                    </div>
                    <div>
                            <p>Логин</p>
                            <input required value={value.login} onInput={(e) => setValue({login: e.target.value })} {...register('login')} type="text" />
                    </div>
                    <div>
                            <p>E-mail</p>
                            <input required  value={value.mail} onInput={(e) => setValue({mail: e.target.value })} {...register('mail')} type="email"  />
                    </div>
                    <div>
                            <p>Пароль</p>
                            <input required  value={value.password} onInput={(e) => setValue({password: e.target.value })} {...register('password')} type="password"  />
                    </div>
                    <div>
                            <p>Адрес</p>
                            <input  value={value.address} onInput={(e) => setValue({address: e.target.value })} {...register('address')} type="text" />
                    </div>
                    <div>
                            <p>Дата рождения</p>
                            <input  value={value.date} onInput={(e) => setValue({date: e.target.value })} {...register('date')} type="date"  />
                    </div>
                    <div>
                            <p>Паспорт</p>
                            <input  value={value.passport} onInput={(e) => setValue({passport: e.target.value })} {...register('passport')} type="number"  />
                    </div>
                  
                       
                    </div>
                    <div className={s.parents}>
                                <h2>
                                Родители
                                </h2>
                                <div className={s.inputs}>
                                    <div>
                                        <p>Имя</p>
                                        <input  value={value.parentname} onInput  = {(e) => setValue({parentname: e.target.value })} {...register ('parentname')}/>
                                    </div>
                                    <div>
                                        <p>Фамилия</p>
                                        <input  value={value.parentsurname} onInput  = {(e) => setValue({parentsurname: e.target.value })} {...register ('parentsurname')}/>
                                    </div>
                                    <div >
                                        <p>Контактный телефон</p>
                                        <InputMask  value={value.phone} onInput  = {(e) => setValue({phone: e.target.value })} {...register ('phone')} placeholder='+996 (999) 999-999'  mask={'+999 (999) 999-999'}/>
                                    </div>
                               
                                </div>
                        </div>
                       <div>
                        {isChange ? 
                        <div> 
                            <div className={s.button}>
                                <button type='submit'>Сохранить</button>
                            </div>   
                        </div> :
                        null
                        }
                       </div>
         </form>
                ) : (
                    <InfoNotForm/>
                )}
            {!isChange ? <div>
                            <div  className={s.changebutton}>
                                <button onClick={() => setIsChange(true)}>Изменить</button>
                            </div>
                        </div> : null}
        </>
        )
    
}