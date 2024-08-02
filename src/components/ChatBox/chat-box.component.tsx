import styles from './chat-box.module.scss';


type serverMessageType = { sentBy: string, message: string,};

type propsType = {
    serverMessage: serverMessageType[]
}

export default function ChatBox(props: propsType): JSX.Element {
    return (
            <div className={`${styles.messageOutput} flex flex-col justify-end h-64 mx-auto bg-gray-200 overflow-auto inset-0 s text-2xl`}>
                {
                    props.serverMessage.map((item, index):JSX.Element => {
                        return <div key={index} className=" text-right text-slate-800">{item.sentBy + ": " + item.message}</div>
                    })
                }
            </div>
    )
}