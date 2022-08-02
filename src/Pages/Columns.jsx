import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import GameWrapper from './../Module/GameWrapper/GameWrapper';
export default function Columns() {
    const isAuth = useSelector((state) => state.auth.isAuth)
    const navigate = useNavigate()
    useEffect(() => {
        if(!isAuth) {
            navigate('/LogReg')
        }
    },[isAuth])
    return(
        <div>
            <GameWrapper img={'/img/boyinblue-full.png'} title={'столбцы'}/>
        </div>
    )
}