import styles from './left-section.module.scss';
import LeftMenuNav from '../LeftMenuNav/left-menu-nav.component';
import LeftMenu from '../LeftMenu/left-menu.component';



export default function LeftSection(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} absolute top-0 left-0 right-56`}>
            <LeftMenuNav />
            <LeftMenu />
        </div>
    )
}