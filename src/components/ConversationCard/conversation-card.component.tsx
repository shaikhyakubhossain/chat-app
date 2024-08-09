import styles from './conversation-card.module.scss'




type PropsType = {

}

export default function ConversationCard(props: PropsType) {
    return (
        <div className={`${styles.conversationCard}`}>
            <div className={`${styles.profileImg}`}><img src="" alt="" /></div>
            <div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}