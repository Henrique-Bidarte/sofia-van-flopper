import { useHealthCheck } from "hooks";
import { sendNotification } from "utils";
import { useState } from "react";
import { Loader } from "ui/components";
import {
  LOADER_VARIATION,
  CONNECTION_NOTIFICATION,
} from "constants";

import styles from "./home.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "constants";
import { EASE_TIMEOUT } from "constants";

const HomeScreen = () => {
  const [loader, setLoader] = useState(false);
  const { getHealthCheck } = useHealthCheck();
  const navigate = useNavigate();

  const handleConnectClick = async () => {
    setLoader(true);
    const serverStatus = await getHealthCheck();

    if (serverStatus) {
      sendNotification(CONNECTION_NOTIFICATION.SUCCESS);
      setTimeout(() => {
        navigate(ROUTE.SCAN);
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
          {loader ? <Loader variation={LOADER_VARIATION.SMALL} /> : "CONNECT"}
        </button>
      </div>
    </>
  );
};

export { HomeScreen };
