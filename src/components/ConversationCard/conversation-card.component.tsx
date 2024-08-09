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
        <div className={`${styles.conversationCard} flex`}>
            <div className={`${styles.profileImg}`}><img src={props.profileImg} alt={props.title} /></div>
            <div>
                <div>{ props.title }</div>
                <div>{ props.lastMessage }</div>
            </div>
            <div>
                <div>{ props.lastMessageTime }</div>
                <div>{ props.numberOfUnreadMessages }</div>
            </div>
        </div>
    )
}