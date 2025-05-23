import styles from "./home.module.scss";
import { useHealthCheck } from "hooks";
import { sendNotification } from "utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "ui/components";
import {
  LOADER_VARIATION,
  CONNECTION_NOTIFICATION,
  ROUTE,
  EASE_TIMEOUT
} from "constants";

const HomeScreen = () => {
  const [loader, setLoader] = useState(false);
  const { getHealthCheck } = useHealthCheck();
  const navigate = useNavigate();

  const handleConnectClick = async () => {
    setLoader(true);
    const serverStatus = await getHealthCheck();

    // if (serverStatus) {
    if (true) {
      sendNotification(CONNECTION_NOTIFICATION.SUCCESS);
      setTimeout(() => {
        navigate(ROUTE.MENU);
      }, EASE_TIMEOUT.EASE1);
    } else {
      sendNotification(CONNECTION_NOTIFICATION.FAIL);
      setLoader(false);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <button
          className={styles.connectButton}
          onClick={handleConnectClick}
          disabled={loader}
        >
          {loader ? <Loader variation={LOADER_VARIATION.SMALL} /> : "CONECTAR"}
        </button>
        <div className={styles.atomPannel} />
        <div className={styles.sofiaPannel} />
        <div className={styles.cherryPannel} />
        <div className={styles.barPannel} />
      </div>
    </>
  );
};

export { HomeScreen };
