import styles from './btn.module.scss';

type propsType = {
    children: React.ReactNode,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    customTW?: string,
    customClass?: string,
    disabled?: boolean
}


export default function Btn(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} my-auto`}>
            <button onClick={props.onClick} className={`${styles.btn} ${props.customClass} focus:outline-none text-white hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 my-auto ${props.customTW}`} disabled={props.disabled}>{props.children}</button>
        </div>
    )
}