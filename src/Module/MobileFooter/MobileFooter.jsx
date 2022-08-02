import { useDispatch } from 'react-redux'
import { deleteAuth } from '../../store/AuthSlice'
import s from './MobileFooter.module.scss'

export default function MobileFooter() {
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(deleteAuth())
    }
    return(
        <footer className={s.footer}>
                        <div>
                                <img src={'/img/icons/credit-card.svg'} alt="" />
                        </div>
                        <div>
                                <img src={'/img/icons/settings.svg'} alt="" />
                        </div>
                        <div>
                                <img src={'/img/icons/addFriend.svg'} alt="" />
                        </div>
                    
                    <div onClick={logout} className={s.logout}>
                         <img src="/img/icons/power-button.svg" alt="" />
                    </div>
        </footer>
    )
}