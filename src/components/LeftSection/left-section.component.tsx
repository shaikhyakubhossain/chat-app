import styles from './left-section.module.scss';
import LeftMenuNav from '../LeftMenuNav/left-menu-nav.component';
import LeftMenu from '../LeftMenu/left-menu.component';



export default function LeftSection(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} fixed top-0 left-0 bottom-0 w-80 bg-slate-800 `}>
            <LeftMenuNav />
            <LeftMenu />
        </div>
    )
}