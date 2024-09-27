import styles from './message-io.module.scss';
import MainChat from '../MainChat/main-chat.component';


export default function MessageIO(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} flex-grow content-end`}>
            <MainChat />
        </div>
    )
}