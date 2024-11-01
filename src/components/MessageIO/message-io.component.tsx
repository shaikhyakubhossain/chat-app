import styles from "./message-io.module.scss";
import MainChat from "../MainChat/main-chat.component";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function MessageIO(): JSX.Element {
  const { title } = useSelector((state: RootState) => state.navActiveChat);

  return (
    <div className={`${styles.mainContainer} flex-grow content-end`}>
    { title !== null ? <MainChat /> : <div>Welcome</div> }
    </div>
  );
}
