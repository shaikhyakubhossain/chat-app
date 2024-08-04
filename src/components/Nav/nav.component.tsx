import styles from './nav.module.scss'



export default function Nav(): JSX.Element {

    return (
        <div className={`${styles.navContainer} flex fixed items-center top-0 left-0 right-0  justify-between bg-white h-16 text-black`}>
        <div className='flex'>
            <div className={'w-6 h-6 rounded-full bg-slate-500 my-auto'}></div>
            <div>
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