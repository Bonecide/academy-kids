import RegistrationWrap from "../../Components/RegistrationWrap/RegistrationWrap";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Registration() {
    const isAuth = useSelector((state) => state.auth.isAuth)
    const navigate = useNavigate()
    useEffect(() => {
        if(isAuth) {
            navigate('/')
        }
    },[isAuth])
    return(
        <div>
            <RegistrationWrap/>
        </div>
    )
}