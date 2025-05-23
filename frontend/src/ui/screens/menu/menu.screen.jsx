import styles from './menu.module.scss'
import { useNavigate } from "react-router-dom";
import { Loader } from "ui/components";
import {
    LOADER_TRANSITION,
    ROUTE,
} from "constants";
import { Catalog, MenuSelection } from './sections';
import { useState } from 'react';

const MenuScreen = () => {
    const navigate = useNavigate();

    const [catalog, setCatalog] = useState(false)
    const [billing, setBilling] = useState(false)

    const returnToMenuSelection = () => {
        setCatalog(false)
        setBilling(false)
    }
    const returnToCatalog = () => {
        setCatalog(true)
        setBilling(false)
    }
    const returnToBilling = () => {
        setCatalog(false)
        setBilling(true)
    }

    return (
        <>
            <Loader transition={LOADER_TRANSITION.MENU_TRANSITION} />
            <div className={styles.container}>
                <div className={styles.menu}>
                    {!catalog && !billing && <MenuSelection returnToCatalog={returnToCatalog} />}
                    {catalog && <Catalog returnToMenuSelection={returnToMenuSelection} />}
                </div>
                <div className={styles.atomPannel} />
            </div>
        </>
    )
}

export {
    MenuScreen
}