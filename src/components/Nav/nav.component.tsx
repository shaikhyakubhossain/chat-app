import styles from './nav.module.scss'



export default function Nav(): JSX.Element {

    return (
        <div className={`${styles.navContainer} flex fixed items-center w-full justify-between bg-white h-16 text-black`}>
        <div className='flex'>
            <div className={'w-11 h-11 rounded-full bg-slate-500 my-auto'}></div>
            <div className={`${styles.titleAndStatusContainer} ml-4`}>
                <div className={`${styles.title} font-bold`}>person-1</div>
                <div className={`${styles.status} text-slate-500`}>online</div>
            </div>
        </div>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
    )
}