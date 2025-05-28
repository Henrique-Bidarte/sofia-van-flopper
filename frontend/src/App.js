import { AdminScreen, HomeScreen, LoginScreen, MenuScreen } from "ui/screens";
import { Route, Routes } from "react-router-dom";
import { ROUTE } from "constants";

import styles from "./App.module.scss";
import "ui/styles/globals.scss";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.appContainer}>
        <Routes>
          <Route path={ROUTE.HOME} exact element={<HomeScreen />} />
          <Route path={ROUTE.MENU} exact element={<MenuScreen />} />
          <Route path={ROUTE.LOGIN} exact element={<LoginScreen />} />
          <Route path={ROUTE.ADMIN} exact element={<AdminScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
