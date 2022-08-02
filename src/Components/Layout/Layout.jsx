import { Outlet } from 'react-router-dom'
import MobileFooter from '../../Module/MobileFooter/MobileFooter'
import MobileHeader from '../../Module/MobileHeader/MobileHeader'
import LeftSideBar from '../../Module/SideBars/LeftSideBar/LeftSideBar'
import RightSideBar from '../../Module/SideBars/RightSideBar/RightSideBar'
import s from './Layout.module.scss'
export default function Layout() {

    return(
        <main className={`${s.layout} container`}>
            <MobileHeader/>
            <LeftSideBar/>
            <Outlet/>
            <RightSideBar/>
            <MobileFooter/>
        </main>
    )
}