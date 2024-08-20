"use client"
import styles from './nav.module.scss';
import { backArrow } from '@/utils/icons';
import Btn from '../Btn/btn.component';

import { useDispatch } from 'react-redux';
import { toggle } from '@/lib/features/MainMobileWindow/mainMobileWindowSlice';

export default function Nav(): JSX.Element {

    const dispatch = useDispatch()

    return (
        <div className={`${styles.navContainer} flex fixed items-center w-full justify-between bg-white h-16 text-black px-4`}>
        <div className='flex'>
            <Btn customClass={`${styles.backArrowBtn}`} onClick={() => dispatch(toggle())} customTW=''><div className={`${styles.backArrow} w-6 h-6`}><img src={backArrow} alt="" /></div></Btn>
            <div className={'w-11 h-11 rounded-full bg-slate-500 my-auto'}></div>
            <div className={`${styles.titleAndStatusContainer} ml-4`}>
                <div className={`${styles.title} font-bold`}>person-1</div>
                <div className={`${styles.status} text-slate-500`}>online</div>
            </div>
        </div>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
    )
}