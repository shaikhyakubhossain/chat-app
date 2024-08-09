import styles from './message-bubble.module.scss';


type propsType = {
    message: string
    sentBy: string
}

export default function MessageBubble(props: propsType): JSX.Element {

    const toggleColor = props.sentBy === 'you' ? 'bg-green-500' : 'bg-white'

    return (
        <div className={`${styles.mainContainer} ${toggleColor}`}>
            <div className="text-right text-slate-800">{props.sentBy + ": " + props.message}</div>
        </div>
    )
}