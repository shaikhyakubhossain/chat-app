import styles from './right-section.module.scss';
import Nav from '../Nav/nav.component';
import MessageIO from '../MessageIO/message-io.component';



export default function RightSection(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} fixed top-0 left-80 right-0 bottom-0 bg-white`}>
            <Nav />
            <MessageIO />
        </div>
    )
}