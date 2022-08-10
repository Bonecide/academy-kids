
import Input from './../../Input/Input';
import  InputMask  from 'react-input-mask';
import s from './MainInfoAcc.module.scss'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { UpdateInfo } from '../../../store/PersonalInfoSlice';
import { useEffect } from 'react';
export default function MainInfoAcc() {

    const info = useSelector((state) => state.personal.info);
    const [isChange,setIsChange] = useState(false)
    const[value,setValue] = useState(   info ? info : {})
    const {
        register,
        handleSubmit,
       
      } = useForm({
        mode: "onSubmit"
      });
      const dispatch = useDispatch()
      const success = (data) => {
        //  setIsChange(false)
         dispatch(UpdateInfo(data))
        //  console.log(data)
      }
      useEffect(() => {
        console.log(value)
      },[value])
      console.log(value)
    return(
        <>
        <form onSubmit={handleSubmit(success)}>
                        <div className={s.inputs}>
                                <div className='input_inputs__1Lw9z'>
                                    <p>Имя</p>
                                    <input  {...register("name")}   disabled={!isChange && true} value={value.name} onInput  = {(e) => setValue({name: e.target.value })}/>
                                </div>
                                <div className='input_inputs__1Lw9z'>
                                    <p>Фамилия</p>
                                    <input  {...register("surname")}  disabled={!isChange && true} value={value.surname} onInput  = {(e) => setValue({surname: e.target.value })}/>
                                </div>
                                <div className='input_inputs__1Lw9z'>
                                    <p>Отчество</p>
                                    <input  {...register("middlename")} disabled={!isChange && true} value={value.middlename} onInput  = {(e) => setValue({middlename: e.target.value })}/>
                                </div>
                                <div className='input_inputs__1Lw9z'>
                                    <p>Логин</p>
                                    <input disabled={!isChange && true} required value={value.login} onChange  = {(e) => setValue({login: e.target.value })} {...register ('login')} type='text'/>
                                </div>
                                <div className='input_inputs__1Lw9z'>
                                    <p>E-mail</p>
                                    <input disabled={!isChange && true} value={value.mail} onChange  = {(e) => setValue({mail: e.target.value })} {...register ('mail')} type='email'/>
                                </div>
                                <div className='input_inputs__1Lw9z'>
                                    <p>Пароль</p>
                                    <input disabled={!isChange && true} value={value.password} onChange  = {(e) => setValue({password: e.target.value })} {...register ('password')} type='password'/>
                                </div>
                                <div className='input_inputs__1Lw9z'>
                                    <p>Адрес</p>
                                    <input disabled={!isChange && true} value={value.address} onChange  = {(e) => setValue({address: e.target.value })} {...register ('address')} type='text'/>
                                </div>
                                <div className='input_inputs__1Lw9z'>
                                    <p>Дата рождения</p>
                                    <input disabled={!isChange && true} value={value.date} onChange  = {(e) => setValue({date: e.target.value })} {...register ('date')} type='date'/>
                                </div>
                                <div className='input_inputs__1Lw9z'>
                                    <p>Паспорт</p>
                                    <input disabled={!isChange && true} value={value.passport} onChange  = {(e) => setValue({passport: e.target.value })} {...register ('passport')} type='number'/>
                                </div>
                        </div>
                        <div className={s.parents}>
                                <h2>
                                Родители
                                </h2>
                                <div className={s.inputs}>
                                <Input {...register('mothername')} value={value.motherName} onChange  = {(e) => setValue({motherName: e.target.value })}  title='Имя'/>
                                <Input type='text' title='Фамилия'/>
                                <div className='input_inputs__1Lw9z'>
                                    <p>Контактный телефон</p>
                                    <InputMask disabled={!isChange && true} value={value.phone} onInput  = {(e) => setValue({phone: e.target.value })} {...register ('phone')} placeholder='+996 (999) 999-999'  mask={'+999 (999) 999-999'}/>
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
            {!isChange ? <div>
                            <div  className={s.changebutton}>
                                <button onClick={() => setIsChange(true)}>Изменить</button>
                            </div>
                        </div> : null}
        </>
    )
}