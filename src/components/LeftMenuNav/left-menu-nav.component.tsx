import styles from './left-menu-nav.module.scss';
import { menuIcon } from '@/utils/icons';



export default function LeftMenuNav(): JSX.Element {

    return (
        <div className={`${styles.mainContainer} flex fixed `}>
            <div><img src={menuIcon} alt="" /></div>
        </div>
    )
}