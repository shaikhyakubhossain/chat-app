import styles from './message-input.module.scss';
import Btn from '../Btn/btn.component';



type propsType = {
    sendMessageFunction: () => void,
}

export default function MessageInput(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} flex`}>
            <input type="text" className={`${styles.textField} bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="message" />
            <Btn onClick={props.sendMessageFunction} customClass={styles.sendBtn} customTW='bg-pink-700 hover:bg-pink-800'>Send</Btn>
        </div>
    )
}