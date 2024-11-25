import styles from "./profile-img.module.scss";
import Image from "next/image";

type propsType = {
    title: string | null;
    profileImg?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function ProfileImg(props: propsType): JSX.Element {
  return (
    <div
      onClick={props.onClick}
      className={`${styles.mainContainer} flex justify-center items-center min-w-11 min-h-11 rounded-full bg-slate-500 my-auto`}
    >
      {props.profileImg ? (
        <Image width={44} height={44} src={props.profileImg} alt={props.title ? props.title : "user"} />
      ) : (
        <div className="text-white text-2xl capitalize">{props.title && props.title[0]}</div>
      )}
    </div>
  );
}
