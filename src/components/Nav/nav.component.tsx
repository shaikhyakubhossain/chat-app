"use client"
import { useEffect } from 'react';
import styles from './nav.module.scss';
import { backArrow } from '@/utils/icons';
import Btn from '../Btn/btn.component';

import type { RootState } from '@/lib/store';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@/lib/features/MainMobileWindow/mainMobileWindowSlice';
import { use } from 'react';

export default function Nav(): JSX.Element {

    const title = useSelector((state: RootState) => state.navActiveChat.title);
    const status = useSelector((state: RootState) => state.navActiveChat.status);
    const username = useSelector((state: RootState) => state.authDetail.username);
    const token = useSelector((state: RootState) => state.authDetail.token);
    // const type = useSelector((state: RootState) => state.navActiveChat.type);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log();
    }, [title, status, username])

    return (
        <div className={`${styles.navContainer} flex justify-between bg-white h-16 text-black px-4`}>
        <div className='flex'>
            <Btn customClass={`${styles.backArrowBtn}`} onClick={() => dispatch(toggle())} customTW='hover:bg-slate-400'><div className={`${styles.backArrow} w-6 h-6`}><img src={backArrow} alt="" /></div></Btn>
            <div className={'w-11 h-11 rounded-full bg-slate-500 my-auto'}></div>
            <div className={`${styles.titleAndStatusContainer} ml-4`}>
                <div className={`${styles.title} font-bold`}>{title}</div>
                <div className={`${styles.status} text-slate-500`}>{status}</div>
            </div>
        </div>
        <div className='flex'>
            <div></div>
            {username ? <div className={`${styles.username} flex text-center`}>
                <div className={'w-11 h-11 rounded-full bg-slate-500 my-auto'}><div className='text-white text-2xl'>{username[0]}</div></div>
                <div className='my-auto'>{username}</div>
            </div> : null}
            <div></div>
        </div>
        </div>
    )
}