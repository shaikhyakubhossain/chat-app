import styles from './message-bubble.module.scss';


type propsType = {
    message: string,
    sentBy: string | undefined,
    customTW?: string
}

export default function MessageBubble(props: propsType): JSX.Element {

    let toggleColor;
    let toggleBgColor;
    let toggleSide;

    if(props.sentBy === 'you'){
        toggleColor = 'text-white';
        toggleBgColor = 'bg-green-600';
        toggleSide = 'justify-end';
    }
    else{
        toggleColor = 'text-black';
        toggleBgColor = 'bg-lime-300';
        toggleSide = 'justify-start';
    }   


    return (
        <div className={`${styles.mainContainer} flex ${toggleSide} ${props.customTW} text-left`}>
            <div className={`${toggleColor} ${toggleBgColor} rounded my-2 px-4 py-3 overflow-x-auto break-words`}>
            <div className={`text-sm text-left`}>{props.sentBy}</div>
            <div className={`text-2xl`}>{props.message}</div>
            </div>
            
        </div>
    )
}