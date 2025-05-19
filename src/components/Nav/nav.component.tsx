"use client"
import styles from './nav.module.scss';
import { useState } from 'react';
import { backArrow } from '@/utils/icons';
import Btn from '../Btn/btn.component';
import ProfileImg from '../ProfileImg/profile-img.component';
import Link from 'next/link';

import type { RootState } from '@/lib/store';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@/lib/features/MainMobileWindow/mainMobileWindowSlice';
import { setDetail } from '@/lib/features/AuthDetail/authDetailSlice';

export default function Nav(): JSX.Element {

    const title = useSelector((state: RootState) => state.navActiveChat.title);
    const status = useSelector((state: RootState) => state.navActiveChat.status);
    const username = useSelector((state: RootState) => state.authDetail.username);

    const [dropDown, setDropDown] = useState(false);

    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem("authDetail");
        dispatch(setDetail({username: null, token: null}));
    }

    return (
        <div className={`${styles.navContainer} flex justify-between bg-white h-16 text-black px-4`}>
        <div className='flex items-center'>
            <Btn customClass={`${styles.backArrowBtn}`} onClick={() => dispatch(toggle())} customTW='hover:bg-slate-200'><div className={`${styles.backArrow} w-6 h-6`}><img src={backArrow} alt="" /></div></Btn>
            {title && <ProfileImg title={title} />}
            <div className={`${styles.titleAndStatusContainer} ml-4`}>
                <div className={`${styles.title} font-bold`}>{title}</div>
                <div className={`${styles.status} text-slate-500`}>{status}</div>
            </div>
        </div>
        <div className='flex relative'>
            {username ? <div className={`${styles.username} flex text-center cursor-pointer`} onClick={() => setDropDown(!dropDown)}>
                <ProfileImg title={username}  />
                <div className='max-[550px]:hidden'>{username}</div>
            </div> : null}
            <div className={`absolute ${dropDown ? 'flex' : 'hidden'} flex-col gap-1 p-1 top-20 right-0 w-36 rounded-md bg-slate-300 z-10`}>
                <div className='text-center font-semibold bg-white rounded min-[550px]:hidden'>{username}</div>
                <div className='w-full'><Link href="https://github.com/shaikhyakubhossain/chat-app"><Btn customTW='w-full bg-gray-50 dark:bg-gray-700 hover:bg-pink-800 px-4 py-2 text-sm'>Source Code</Btn></Link></div>
                <div className='w-full'><Btn onClick={handleLogout} customTW='w-full bg-gray-50 dark:bg-gray-700 hover:bg-pink-800 px-4 py-2 text-sm'>Logout</Btn></div>
            </div>
        </div>
        </div>
    )
}