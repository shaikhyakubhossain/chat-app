import styles from './left-section.module.scss';
import LeftMenuNav from '../LeftMenuNav/left-menu-nav.component';
import LeftMenu from '../LeftMenu/left-menu.component';



export default function LeftSection(): JSX.Element {
    return (
        <div className={`${styles.mainContainer}`}>
            <LeftMenuNav />
            <LeftMenu />
        </div>
    )
}