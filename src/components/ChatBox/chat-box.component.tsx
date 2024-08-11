import styles from './chat-box.module.scss';
import MessageBubble from '../MessageBubble/message-bubble.component';


type serverMessageType = { sentBy: string, message: string,};

type propsType = {
    serverMessage: serverMessageType[]
}

export default function ChatBox(props: propsType): JSX.Element {
    return (
            <div className={`${styles.messageOutput} flex flex-col mx-auto overflow-y-auto`}>
                {
                    props.serverMessage.map((item, index):JSX.Element => {
                        return <MessageBubble key={index} message={item.message} sentBy={item.sentBy}/>
                    })
                }
            </div>
    )
}