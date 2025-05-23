import styles from './menu.module.scss'
import { useNavigate } from "react-router-dom";
import { Loader } from "ui/components";
import {
    LOADER_TRANSITION,
    ROUTE,
} from "constants";
import { Catalog } from './sections';

const MenuScreen = () => {
    const navigate = useNavigate();

    const handleReturnClick = () => {
        navigate(ROUTE.HOME);
    }

    return (
        <>
            <Loader transition={LOADER_TRANSITION.MENU_TRANSITION} />
            <div className={styles.container}>
                <div className={styles.menu}>
                    <Catalog />
                    <button className={styles.leaveButton} onClick={handleReturnClick}>Sair</button>
                </div>
                <div className={styles.atomPannel} />
            </div>
        </>
    )
}

export {
    MenuScreen
}