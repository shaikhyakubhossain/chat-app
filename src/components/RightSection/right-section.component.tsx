import styles from './right-section.module.scss';
import Nav from '../Nav/nav.component';
import MainChat from '../MainChat/main-chat.component';



export default function RightSection(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} w-3/4`}>
            <Nav />
            <MainChat />
        </div>
    )
}