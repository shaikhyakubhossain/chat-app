import styles from './message-io.module.scss';
import MainChat from '../MainChat/main-chat.component';


export default function MessageIO(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} mt-16 flex-grow content-end bg-teal-200`}>
            <MainChat />
        </div>
    )
}