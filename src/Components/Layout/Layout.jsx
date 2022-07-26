import { Outlet } from 'react-router-dom'
import LeftSideBar from '../../Module/SideBars/LeftSideBar/LeftSideBar'
import RightSideBar from '../../Module/SideBars/RightSideBar/RightSideBar'
import s from './Layout.module.scss'
export default function Layout() {

    return(
        <main className={`${s.layout} container`}>
            <LeftSideBar/>
            <Outlet/>
            <RightSideBar/>
        </main>
    )
}