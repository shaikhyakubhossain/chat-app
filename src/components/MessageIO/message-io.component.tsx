import styles from './message-io.module.scss';
import MainChat from '../MainChat/main-chat.component';


export default function MessageIO(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} bg-teal-200 absolute top-16 left-0 right-0 bottom-0`}>
            <MainChat />
        </div>
    )
}