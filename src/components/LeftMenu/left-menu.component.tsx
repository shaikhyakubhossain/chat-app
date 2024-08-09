import styles from './left-menu.module.scss';
import ConversationCard from '../ConversationCard/conversation-card.component';


export default function LeftMenu(): JSX.Element {

    return (
        <div className={`${styles.mainContainer} w-1/4`}>
            <ConversationCard />
        </div>
    )
}