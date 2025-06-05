import styles from './menu.module.scss'
import { Catalog, MenuSelection, About, Billing } from './sections';
import { useState } from 'react';

const MenuScreen = () => {
    const [menuSelection, setMenuSelection] = useState(true)
    const [catalog, setCatalog] = useState(false)
    const [about, setAbout] = useState(false)
    const [billing, setBilling] = useState(false)

    const returnToMenuSelection = () => {
        setMenuSelection(true)
        setCatalog(false)
        setAbout(false)
        setBilling(false)
    }
    const goToCatalog = () => {
        setMenuSelection(false)
        setCatalog(true)
        setAbout(false)
        setBilling(false)
    }
    const goToAbout = () => {
        setMenuSelection(false)
        setCatalog(false)
        setAbout(true)
        setBilling(false)
    }
    const goToBilling = () => {
        setMenuSelection(false)
        setCatalog(false)
        setAbout(false)
        setBilling(true)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <MenuSelection menuSelection={menuSelection} goToCatalog={goToCatalog} goToAbout={goToAbout} goToBilling={goToBilling} />
                    <Catalog catalog={catalog} returnToMenuSelection={returnToMenuSelection} />
                    <About about={about} returnToMenuSelection={returnToMenuSelection} />
                    <Billing billing={billing} returnToMenuSelection={returnToMenuSelection} />
                </div>
            </div>
        </>
    )
}

export {
    MenuScreen
}