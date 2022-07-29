import s from './RegistrationWrap.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../store/AuthSlice';
import { useEffect } from 'react';
export default function RegistrationWrap() {
   const [remember,setRemember] = useState(false)
   const [reg,setReg] = useState(true)
   const [password,setPassword] = useState()
   const [isDisable,setIsDisable] = useState(true)
    const router = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
       dispatch(setAuth())
        e.preventDefault()
        
    }
    
    return(
        <div className={s.container}>
            <img src="/img/logo.svg" alt="" />
            <div className={s.Wrap}>
                <div className={s.type}>
                    <h2 onClick={() => setReg(true)} className={reg && s.active}>Вход</h2>
                    <h2 onClick={() => setReg(false)} className={!reg && s.active}>Регистрация</h2>
                </div>
                {reg ? (
                    <div className={s.registration}>
                    <form onSubmit={handleSubmit}>
                      <div className={s.inputs_container}>
                          <div className={s.inputs}>
                                  <p>E-mail</p>
                                  <input required type="email" />
                          </div>
                          <div className={s.inputs}>
                                      <p>Пароль</p>
                                  <input required type="password" />
                          </div>
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
                                  <Link to={'#'}>Потеряли пароль?</Link>
                          </div>
                      </div>
                  </div>
                ) :
                <div>
                    <form>
                    <div className={s.login_inputs}>
                       
                            <div className={s.inputs}>
                                      <p>Имя</p>
                                  <input autoComplete="off" placeholder='Введите ваше имя' required type="text" />
                          </div>
                          <div className={s.inputs}>
                                      <p>E-mail</p>
                                  <input autoComplete='off' placeholder='Введите ваш e-mail' required type="email" />
                          </div>
                          <div className={s.inputs}>
                                      <p>Пароль</p>
                                  <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" />
                          </div>
                          <div className={s.inputs}>
                                      <p>Повторите пароль</p>
                                  <input onChange={(e) => password === e.target.value ? setIsDisable(false) : setIsDisable(true)} required type="password" />
                          </div>
                    </div>
                    <div className={s.button_container}>
                            <button onClick={handleSubmit}  disabled={isDisable} type='submit'>Подтвердить</button>
                    </div>
                    </form>
                    <div className={s.rules}>
                            <p>Регистрируясь на сайте, вы соглашаетесь с <span><Link to={'#'}>Правилами и условиями</Link></span> и <span><Link to={'#'}>политикой конфиденциальности</Link></span></p>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}