import { LoaderIcon } from "../../assets";
import styles from "./loader.module.scss";

const Loader = ({ variation, transition }) => {
  return <img src={LoaderIcon} className={`${styles.loader} ${styles[variation]} ${styles[transition]}`} />;
};

export { Loader };
