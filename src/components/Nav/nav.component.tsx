import styles from './nav.module.scss'



export default function Nav(): JSX.Element {

    return (
        <div className={`${styles.navContainer} flex fixed items-center top-0 left-0 right-0  justify-between bg-yellow-50 h-16 text-black`}>
        <div className='flex'>
            <div className={'w-6 h-6 rounded-full bg-black'}></div>
            <div>
                <div>person-1</div>
                <div></div>
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