import styles from './right-section.module.scss';
import Nav from '../Nav/nav.component';
import MainChat from '../MainChat/main-chat.component';



export default function RightSection(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} absolute top-0 right-0 left-56`}>
            <Nav />
            <MainChat />
        </div>
    )
}