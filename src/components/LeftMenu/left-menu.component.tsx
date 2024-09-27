"use client";
import styles from './left-menu.module.scss';
import ConversationCard from '../ConversationCard/conversation-card.component';
import { conversationsList } from '@/utils/constants';

import { useDispatch } from 'react-redux';
import { setTitle, setStatus, setType } from '@/lib/features/navActiveChat/navActiveChatSlice';
import { setTrue } from '@/lib/features/MainMobileWindow/mainMobileWindowSlice';


type  itemType = { 
    name: string,
    status: string,
    type: string
}

let prevConversationCard: null | HTMLDivElement = null;

export default function LeftMenu(): JSX.Element {

    let customTW = '';

    const dispatch = useDispatch();

    const setter = (item: itemType, event: React.MouseEvent<HTMLDivElement>) => {

        customTW = '';

        const currentConversationCard = (event.currentTarget) as HTMLDivElement;
        prevConversationCard?.classList.remove("bg-gray-200");
        currentConversationCard?.classList.add("bg-gray-200");

        dispatch(setTitle(item.name));
        dispatch(setStatus(item.status));
        dispatch(setType(item.type));
        dispatch(setTrue());

        prevConversationCard = currentConversationCard;
    }

    return (
        <div className={`${styles.mainContainer}`}>
            {
                conversationsList.map((item, index): JSX.Element => {
                    return (
                        <ConversationCard onClick={(event) => setter(item, event)} key={index} customTW={customTW} title={item.name} /> 
                    )
                }
            )}
        </div>
    )
}