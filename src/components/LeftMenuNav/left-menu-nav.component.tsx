"use client"
import { useEffect } from 'react';
import styles from './left-menu-nav.module.scss';
import { menuIcon } from '@/utils/icons';
import Btn from '../Btn/btn.component';

import type { RootState } from '@/lib/store';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@/lib/features/MainMobileWindow/mainMobileWindowSlice';



export default function LeftMenuNav(): JSX.Element {

    const isOpen = useSelector((state: RootState) => state.mainMobileWindow.isOpen)

    const dispatch = useDispatch();

    useEffect(() => {
        // console.log(isOpen);
    }, [isOpen])

    return (
        <div className={`${styles.mainContainer} flex w-full justify-between h-16 text-black bg-white`}>
            <Btn onClick={() => dispatch(toggle())} customClass={styles.menuIcon} customTW='hover:bg-slate-200'><img className={`${styles.menuIconImg} w-6 h-6`} src={menuIcon} alt="" /></Btn>
        </div>
    )
}