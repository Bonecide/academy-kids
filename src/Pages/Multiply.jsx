import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import GameWrapper from './../Module/GameWrapper/GameWrapper';
export default function Multiply() {
    const isAuth = useSelector((state) => state.auth.isAuth)
    const navigate = useNavigate()
    useEffect(() => {
        if(!isAuth) {
            navigate('/LogReg')
        }
    },[isAuth])
    return(
        <div>
            <GameWrapper img={'/img/girlinred-full.png'} title={'Умножайка'}/>
        </div>
    )
}