import s from './RightSideBard.module.scss'

export default function RightSideBar() {

    return(
        <div className={s.sidebar}>
               <div className={s.container}>
                    <div>
                        <img src={'/img/avatar.png'} alt="avatar" />
                    </div>
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
                </div> 
        </div>
    )
}