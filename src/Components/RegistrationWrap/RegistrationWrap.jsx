import s from './RegistrationWrap.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../store/AuthSlice';
import { useEffect } from 'react';
import Input from '../Input/Input';
export default function RegistrationWrap() {
   const [remember,setRemember] = useState(false)
   const [reg,setReg] = useState(true)
   const [password,setPassword] = useState()
   const [success , setSuccess] = useState(false)
   const [isDisable,setIsDisable] = useState(true)
    const router = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
       dispatch(setAuth())
        e.preventDefault()
        
    }
    const endReg = () => {
        setReg(true)
        setSuccess(false)
    }
    
    return(
        <div className={s.container}>
            <img className={s.logo} src="/img/logo.svg" alt="" />
            <div className={s.Wrap}>
                {!success && <div className={s.type}>
                    <h2 onClick={() => setReg(true)} className={reg && s.active}>Вход</h2>
                    <h2 onClick={() => setReg(false)} className={!reg && s.active}>Регистрация</h2>
                </div>}
                {reg ? (
                    <div className={s.registration}>
                    <form onSubmit={handleSubmit}>
                      <div className={s.inputs_container}>
                          <Input type='email' title={'E-mail'}/>
                          <Input type='password' title={'пароль'}/>
                      </div>
                      <div className={s.button_container}>
                          <button type='submit'>Войти</button>
                      </div>
                  </form>    
                      <div className={s.side}>
                          <div className={s.remember}>
                              <input onChange={() => setRemember(!remember)} type="checkbox" className={s.checkbox} id="happy" name="happy"/>
                              <label for="happy"/>
                              <h3>Запомнить меня</h3>
                          </div>
                          <div className={s.loose}>
                                  <Link to={'/PasswordRecovery'}>Потеряли пароль?</Link>
                          </div>
                      </div>
                  </div>
                ) :
                    !success ? (
                        <div>
                    <form>
                    <div className={s.login_inputs}>
                       
                             <Input required={true} type='text' placeholder={'Введите ваше имя'} title={'Имя'}/>
                             <Input required={true} type='email' placeholder={'Введите ваш У-ьфшд'} title={'E-mail'}/>
                          
                            <Input value={password} setValue={setPassword} required={true} type='password' title={'пароль'}/>
                          
                          <div className={s.inputs}>
                                      <p>Повторите пароль</p>
                                  <input onChange={(e) => password === e.target.value ? setIsDisable(false) : setIsDisable(true)} required type="password" />
                          </div>
                    </div>
                    <div className={s.button_container}>
                            <button onClick={()=> setSuccess(true)}  disabled={isDisable} type='submit'>Подтвердить</button>
                    </div>
                    </form>
                    <div className={s.rules}>
                            <p>Регистрируясь на сайте, вы соглашаетесь с <span><Link to={'#'}>Правилами и условиями</Link></span> и <span><Link to={'#'}>политикой конфиденциальности</Link></span></p>
                    </div>
                </div>
                    )
                 : <div className={s.success}>
                    <h2>Добро пожаловать</h2>
                    <p>Ваш аккаунт успешно зарегистрирован. На ваш e-mail отправлено письмо со ссылкой для подтверждения регистрации. Для продолжения необходимо подтвердить регистрацию.</p>
                    <div className={s.button_container}>
                            <button onClick={endReg} type='submit'>Войти</button>
                    </div>
                 </div>
                }
            </div>
        </div>
    )
}