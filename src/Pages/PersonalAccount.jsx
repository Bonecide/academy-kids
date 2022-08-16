import PersonalWrap from "../Components/PersonalWrap/PersonalWrap";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function PersonalAccount(){
    const isAuth = useSelector((state) => state.auth.isAuth)
    const navigate = useNavigate()
    useEffect(() => {
        if(!isAuth) {
            navigate('/LogReg')
        }
    },[isAuth])
    return(
        <div>
            <PersonalWrap/>
        </div>
    )
}