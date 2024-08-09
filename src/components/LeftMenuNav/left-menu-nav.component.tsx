import styles from './left-menu-nav.module.scss';
import { menuIcon } from '@/utils/icons';



export default function LeftMenuNav(): JSX.Element {

    return (
        <div className={`${styles.mainContainer} flex fixed items-center w-full justify-between h-16 text-black`}>
            <div className={`${styles.menuIconContainer} ml-4`}><img className={`${styles.menuIconImg} w-6 h-6`} src={menuIcon} alt="" /></div>
        </div>
    )
}