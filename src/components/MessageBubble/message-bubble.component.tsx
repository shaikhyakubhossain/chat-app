import styles from './message-bubble.module.scss';


type propsType = {
    message: string
    sentBy: string
}

export default function MessageBubble(props: propsType): JSX.Element {

    let toggleColor;
    let toggleSide;

    if(props.sentBy === 'you'){
        toggleColor = 'bg-green-500';
        toggleSide = 'justify-end';
    }
    else{
        toggleColor = 'bg-white';
        toggleSide = 'justify-start';
    }   


    return (
        <div className={`${styles.mainContainer} flex ${toggleSide} text-center`}>
            <span className={`text-slate-800 ${toggleColor} rounded my-2 px-4 py-3`}>{props.sentBy + ": " + props.message}</span>
        </div>
    )
}