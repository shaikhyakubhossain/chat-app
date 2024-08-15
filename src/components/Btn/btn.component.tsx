import styles from './btn.module.scss';



type propsType = {
    children: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    customTW?: string
}


export default function Btn(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} my-auto`}>
            <button onClick={props.onClick} className={`focus:outline-none text-white hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 my-auto ${props.customTW}`}>{props.children}</button>
        </div>
    )
}