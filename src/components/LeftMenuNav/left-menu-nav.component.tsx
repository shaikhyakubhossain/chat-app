import styles from './left-menu-nav.module.scss';
import { menuIcon } from '@/utils/icons';



export default function LeftMenuNav(): JSX.Element {

    return (
        <div className={`${styles.mainContainer} flex fixed items-center w-full justify-between bg-white h-16 text-black`}>
            <div className={`${styles.menuIconContainer}`}><img className={`${styles.menuIconImg} w-8 h-8`} src={menuIcon} alt="" /></div>
        </div>
    )
}