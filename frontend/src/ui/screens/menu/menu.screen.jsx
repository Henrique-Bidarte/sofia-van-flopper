import styles from './menu.module.scss'
import { Catalog, MenuSelection } from './sections';
import { useState } from 'react';

const MenuScreen = () => {
    const [menuSelection, setMenuSelection] = useState(true)
    const [catalog, setCatalog] = useState(false)

    const returnToMenuSelection = () => {
        setMenuSelection(true)
        setCatalog(false)
    }
    const returnToCatalog = () => {
        setMenuSelection(false)
        setCatalog(true)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <MenuSelection menuSelection={menuSelection} returnToCatalog={returnToCatalog} />
                    <Catalog catalog={catalog} returnToMenuSelection={returnToMenuSelection} />
                </div>
                <div className={styles.atomPannel} />
            </div>
        </>
    )
}

export {
    MenuScreen
}