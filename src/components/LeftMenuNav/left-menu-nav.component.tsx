"use client"
import styles from './left-menu-nav.module.scss';
import { menuIcon } from '@/utils/icons';
import Btn from '../Btn/btn.component';
import AddUser from './AddUser/add-user.component';

import type { RootState } from '@/lib/store';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@/lib/features/MainMobileWindow/mainMobileWindowSlice';



export default function LeftMenuNav(): JSX.Element {

    const isOpen = useSelector((state: RootState) => state.mainMobileWindow.isOpen);
    const { token } = useSelector((state: RootState) => state.authDetail);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     // console.log(isOpen);
    // }, [isOpen])

    return (
        <div className={`${styles.mainContainer} flex items-center px-2 w-full justify-between h-16 text-black bg-white`}>
            <div className=''><Btn onClick={() => dispatch(toggle())} customClass={styles.menuIcon} customTW='hover:bg-slate-200'><img className={`${styles.menuIconImg} w-6 h-6`} src={menuIcon} alt="" /></Btn></div>
            <AddUser token={token} />
        </div>
    )
}