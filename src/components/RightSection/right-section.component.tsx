import styles from './right-section.module.scss';
import Nav from '../Nav/nav.component';
import MessageIO from '../MessageIO/message-io.component';



export default function RightSection(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} flex flex-col  bg-white`}>
            <Nav />
            <MessageIO />
        </div>
    )
}