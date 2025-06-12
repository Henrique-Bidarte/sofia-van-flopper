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
} from "constants";
import { StaffIcon } from "ui/assets";

const HomeScreen = () => {
  const [customerLoader, setCustomerLoader] = useState(false);
  const [staffLoader, setStaffLoader] = useState(false);
  const [staffAccess, setStaffAccess] = useState(false)

  const { getHealthCheck } = useHealthCheck();
  const navigate = useNavigate();

  const handleStaffAccessClick = () => {
    setStaffAccess(!staffAccess)
  }

  const handleCustomerClick = async () => {
    setCustomerLoader(true);
    navigateFromHome(ROUTE.MENU);
  }

  const handleStaffClick = async () => {
    setStaffLoader(true);
    navigateFromHome(ROUTE.LOGIN);
  };

  const navigateFromHome = async (path) => {
    const serverStatus = await getHealthCheck();

    // if (serverStatus) {
    if (true) {
      sendNotification(CONNECTION_NOTIFICATION.SUCCESS);
      navigate(path);
    } else {
      sendNotification(CONNECTION_NOTIFICATION.FAIL);
      setStaffLoader(false);
      setCustomerLoader(false);
    }
  }


  return (
    <>
      <div className={styles.container}>
        <button
          className={styles.connectButton}
          onClick={handleCustomerClick}
          disabled={customerLoader || staffLoader}
        >
          {customerLoader ? <Loader variation={LOADER_VARIATION.SMALL} /> : "Conectar"}
        </button>
        <div className={`${styles.staffAccess}  ${staffAccess ? styles.openTransition : styles.closeTransition}`}>
          <button className={styles.staffButtonActivation} onClick={handleStaffAccessClick}>
            <img src={StaffIcon} className={styles.staffIcon} />
          </button>
          <button
            className={styles.staffButton}
            onClick={handleStaffClick}
            disabled={customerLoader || staffLoader}
          >
            {staffLoader ? <Loader variation={LOADER_VARIATION.TINY} /> : "Funcionario"}
          </button>
        </div>
        <div className={styles.atomPannel} />
        <div className={styles.sofiaPannel} />
        <div className={styles.cherryPannel} />
        <div className={styles.barPannel} />
      </div >
    </>
  );
};

export { HomeScreen };
