import styles from './conversation-card.module.scss';
import ProfileImg from '../ProfileImg/profile-img.component';

type PropsType = {
    title: string,
    lastMessage?: string,
    lastMessageTime?: string,
    profileImg?: string,
    numberOfUnreadMessages?: number,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
    customTW?: string
}

export default function ConversationCard(props: PropsType): JSX.Element {
    return (
        <div className={`${styles.conversationCard} flex p-3 cursor-pointer ${props.customTW}`} onClick={props.onClick}>
            <ProfileImg profileImg={props.profileImg} title={props.title} />
            <div className={`${styles.titleAndLastMessage} ml-6`}>
                <div className={`${styles.title} font-bold`}>{ props.title }</div>
                <div>{ props.lastMessage }</div>
            </div>
            <div>
                <div>{ props.lastMessageTime }</div>
                <div>{ props.numberOfUnreadMessages }</div>
            </div>
        </div>
    )
}