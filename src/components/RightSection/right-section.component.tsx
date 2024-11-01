import styles from './right-section.module.scss';
import Nav from '../Nav/nav.component';
import MessageIO from '../MessageIO/message-io.component';
import Greetings from '../Greetings/greetings.component';

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function RightSection(): JSX.Element {

  const { title } = useSelector((state: RootState) => state.navActiveChat);

    return (
        <div className={`${styles.mainContainer} flex flex-col  bg-white`}>
            <Nav />
            { title !== null ? <MessageIO /> : <Greetings /> }
        </div>
    )
}