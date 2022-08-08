import Input from '../Input/Input'
import s from './RecoveryWrap.module.scss'
import { useNavigate } from 'react-router-dom';

export default function RecoveryWrap() {
    
    const navigate = useNavigate()
    const handleSubmit =(e) => {
        e.preventDefault()
        navigate('/LogReg')
    }
    return(
        <div className={s.container}>
                 <img className={s.logo} src="/img/logo.svg" alt="" />
                <div className={s.Wrap}>
                    <form onSubmit={handleSubmit}>
                        <h2>Восстановление пароля</h2>
                         <Input placeholder={'Укажите e-mail вашего аккаунта'} required={true} type={'email'} title={'E-mail'}/>
                         <div className={s.button_container}>
                            <button  type='submit'>Восстановить</button>
                        </div>
                    </form> 
                    <div onClick={() => navigate('/LogReg')} className={s.back}>
                            <img src="/img/icons/green-arrow.svg" alt="" />
                            <p>Вернуться назад</p>
                    </div>  
                </div>
        </div>
    )
}