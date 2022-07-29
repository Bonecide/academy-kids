import ChooseTrainer from "../Components/ChooseTrainer/ChooseTrainer";
import MainPageCard from "../Components/MainPageCard/MainPageCard";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
export default function MainPage() {
    const isAuth = useSelector((state) => state.auth.isAuth)
    const navigate = useNavigate()
    useEffect(() => {
        if(!isAuth) {
            navigate('LogReg')
        }
    },[isAuth])
    return(
        <div  >
               
               <ChooseTrainer/>
        </div>
    )
}