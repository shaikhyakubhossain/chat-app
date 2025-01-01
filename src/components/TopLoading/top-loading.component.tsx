import styles from "./top-loading.module.scss";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function TopLoading(){

    const showLoading = useSelector((state: RootState) => state.mainLoading.showLoading);

    return (
        <div className={`${styles.mainContainer} ${showLoading ? styles.widthFull : styles.widthZero} fixed top-0 left-0 bg-green-600 h-1`}>
        </div>
    )
}