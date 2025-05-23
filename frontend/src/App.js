import { HomeScreen, MenuScreen } from "ui/screens";
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
