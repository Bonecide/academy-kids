import GameWrapper from "../Module/GameWrapper/GameWrapper";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function FleshCard() {
    const isAuth = useSelector((state) => state.auth.isAuth)
    const navigate = useNavigate()
    useEffect(() => {
        if(!isAuth) {
            navigate('/LogReg')
        }
    },[isAuth])
    return(
        <div>
            <GameWrapper img={'/img/asian-girl-full.png'} title={'флеш-карты'}/>
        </div>
    )
}