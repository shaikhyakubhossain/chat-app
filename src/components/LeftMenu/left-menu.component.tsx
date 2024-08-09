import styles from './left-menu.module.scss';
import ConversationCard from '../ConversationCard/conversation-card.component';
import { conversationsList } from '@/utils/constants';


export default function LeftMenu(): JSX.Element {

    return (
        <div className={`${styles.mainContainer} mt-16`}>
            {
                conversationsList.map((item, index): JSX.Element => {
                    return (
                        <ConversationCard key={index} title={item.name} /> 
                    )
                }
            )}
        </div>
    )
}