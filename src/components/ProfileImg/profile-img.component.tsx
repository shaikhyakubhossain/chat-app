import styles from "./profile-img.module.scss";
import Image from "next/image";

type propsType = {
    title: string | null;
    profileImg?: string;
    size?: number;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function ProfileImg(props: propsType): JSX.Element {
  return (
    <div
      className={`${styles.mainContainer} flex justify-center items-center min-w-${props.size ? "" + props.size : "11"} min-h-${props.size ? "" + props.size : "11"} rounded-full bg-slate-500 my-auto`}
    >
      {props.profileImg ? (
        <Image width={props.size ? (props.size * 4) : 44} height={props.size ? (props.size * 4) : 44} src={props.profileImg} alt="" />
      ) : (
        <div className="text-white text-2xl capitalize">{props.title && props.title[0]}</div>
      )}
    </div>
  );
}
