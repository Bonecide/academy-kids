
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RecoveryWrap from '../../Components/RecoveryWrap/RecoveryWrap';
export default function PasswordRecovery() {

    const isAuth = useSelector((state) => state.auth.isAuth)
    const navigate = useNavigate()
    useEffect(() => {
        if(isAuth) {
            navigate('/')
        }
    },[isAuth])
    return(

        <div>
                <RecoveryWrap/>
        </div>
    )
}