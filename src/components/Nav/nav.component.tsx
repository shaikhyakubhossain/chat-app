"use client"
import { useEffect } from 'react';
import styles from './nav.module.scss';
import { backArrow } from '@/utils/icons';
import Btn from '../Btn/btn.component';

import type { RootState } from '@/lib/store';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@/lib/features/MainMobileWindow/mainMobileWindowSlice';
import { setDetail } from '@/lib/features/AuthDetail/authDetailSlice';

export default function Nav(): JSX.Element {

    const title = useSelector((state: RootState) => state.navActiveChat.title);
    const status = useSelector((state: RootState) => state.navActiveChat.status);
    const username = useSelector((state: RootState) => state.authDetail.username);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log();
    }, [title, status, username]);

    const handleLogout = () => {
        localStorage.removeItem("authDetail");
        dispatch(setDetail({username: null, token: null}));
    }

    return (
        <div className={`${styles.navContainer} flex justify-between bg-white h-16 text-black px-4`}>
        <div className='flex'>
            <Btn customClass={`${styles.backArrowBtn}`} onClick={() => dispatch(toggle())} customTW='hover:bg-slate-200'><div className={`${styles.backArrow} w-6 h-6`}><img src={backArrow} alt="" /></div></Btn>
            <div className={'w-11 h-11 rounded-full bg-slate-500 my-auto'}></div>
            <div className={`${styles.titleAndStatusContainer} ml-4`}>
                <div className={`${styles.title} font-bold`}>{title}</div>
                <div className={`${styles.status} text-slate-500`}>{status}</div>
            </div>
        </div>
        <div className='flex'>
            <div className='my-auto mx-2'><Btn onClick={handleLogout} customTW='bg-gray-50 dark:bg-gray-700 hover:bg-pink-800 px-4 py-2 text-sm'>Logout</Btn></div>
            {username ? <div className={`${styles.username} flex text-center`}>
                <div className={'w-11 h-11 rounded-full bg-slate-500 '}><div className='text-white text-2xl'>{username[0]}</div></div>
                <div className=''>{username}</div>
            </div> : null}
            <div></div>
        </div>
        </div>
    )
}