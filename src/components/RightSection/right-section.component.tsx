import styles from './right-section.module.scss';
import Nav from '../Nav/nav.component';
import MainChat from '../MainChat/main-chat.component';



export default function RightSection(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} absolute top-0 left-80 right-0 bottom-0 bg-slate-500`}>
            <Nav />
            <MainChat />
        </div>
    )
}