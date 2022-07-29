import s from './RightSideBard.module.scss'
import { useDispatch } from 'react-redux';
import { deleteAuth } from '../../../store/AuthSlice';

export default function RightSideBar() {
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(deleteAuth())
    }
    return(
        <div className={s.sidebar}>
               <div className={s.container}>
                    <div>
                        <img src={'/img/avatar.png'} alt="avatar" />
                    </div>
                  <div className={s.icons}>
                    <div className={s.tabs}>
                        <div>
                                <img src={'/img/icons/message.svg'} alt="" />
                        </div>
                        <div>
                                <img src={'/img/icons/credit-card.svg'} alt="" />
                        </div>
                        <div>
                                <img src={'/img/icons/settings.svg'} alt="" />
                        </div>
                        <div>
                                <img src={'/img/icons/addFriend.svg'} alt="" />
                        </div>
                    </div>
                    <div onClick={logout} className={s.logout}>
                         <img src="/img/icons/power-button.svg" alt="" />
                    </div>
                  </div>
                </div> 
        </div>
    )
}