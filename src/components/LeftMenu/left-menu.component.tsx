"use client";
import { useState, useEffect } from 'react';
import styles from './left-menu.module.scss';
import ConversationCard from '../ConversationCard/conversation-card.component';
import { getUrl } from '@/utils/urls';

import { useDispatch } from 'react-redux';
import { setTitle, setStatus, setType } from '@/lib/features/navActiveChat/navActiveChatSlice';
import { setTrue } from '@/lib/features/MainMobileWindow/mainMobileWindowSlice';
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';

// type  itemType = {
//     name: string,
//     status: string,
//     type: string
// }

let prevConversationCard: null | HTMLDivElement = null;

export default function LeftMenu(): JSX.Element {

    const { token } = useSelector((state: RootState) => state.authDetail);

    let customTW = '';

    const dispatch = useDispatch();

    const [data, setData] = useState<string[] | null>(null);

    const getFriends = async () => {
        fetch(`${getUrl()}/get-friends`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${token}`
            },
        } 
    ).then(res => res.json()).then(data => {
            console.log(data.data);
            setData(data.data);
        })
    }

    const setter = (item: string, event: React.MouseEvent<HTMLDivElement>) => {

        customTW = '';

        const currentConversationCard = (event.currentTarget) as HTMLDivElement;
        prevConversationCard?.classList.remove("bg-gray-200");
        currentConversationCard?.classList.add("bg-gray-200");

        dispatch(setTitle(item));
        dispatch(setStatus("online"));
        dispatch(setType("personal"));
        dispatch(setTrue());

        prevConversationCard = currentConversationCard;
    }

    useEffect(() => {
        getFriends();
    }, [])

    return (
        <div className={`${styles.mainContainer}`}>
            <ConversationCard onClick={(event) => setter("Public group chat", event)} customTW={customTW} title={"Public group chat"} /> 
            {
                data ?
                data.map((item, index): JSX.Element => {
                    return (
                        <ConversationCard onClick={(event) => setter(item, event)} key={index} customTW={customTW} title={item} /> 
                    )
                }
            )
            :
            <div className='flex items-center justify-center text-center'><div className='w-11 h-11 rounded-s-lg bg-green-500 my-auto animate-spin'></div></div>
            }
        </div>
    )
}