import styles from './conversation-card.module.scss'




type PropsType = {
    title: string,
    lastMessage?: string,
    lastMessageTime?: string,
    profileImg?: string,
    numberOfUnreadMessages?: number
}

export default function ConversationCard(props: PropsType) {
    return (
        <div className={`${styles.conversationCard} flex p-3`}>
            <div className={`${styles.profileImg} w-14 h-14 rounded-full bg-slate-500 my-auto`}><img src={props.profileImg} alt='' /></div>
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