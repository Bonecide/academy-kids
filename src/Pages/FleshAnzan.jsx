import ChooseTemp from "../Components/chooseTemp/ChooseTemp";
import Select from "../Components/selects/Select";
import GameWrapperAnzan from "../Module/GameWrapper/GameWrapperAnzan";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

export default function FleshAnzan() {
    const isAuth = useSelector((state) => state.auth.isAuth)
    const navigate = useNavigate()
    useEffect(() => {
        if(!isAuth) {
            navigate('/LogReg')
        }
    },[isAuth])
    return(
        <div>
            <GameWrapperAnzan/>
        </div>
    )
}