import styles from './admin.module.scss'
import { CloseBilling } from './sections';
import { Reports } from './sections';
import { Kitchen } from './sections';
import { OpenBilling } from './sections';
import { AdminSelection } from './sections';
import { useState } from 'react';

const AdminScreen = () => {
    const [adminSelection, setAdminSelection] = useState(true)
    const [openBilling, setOpenBilling] = useState(false)
    const [closeBilling, setCloseBilling] = useState(false)
    const [kitchen, setKitchen] = useState(false)
    const [reports, setReports] = useState(false)

    const returnToAdminSelection = () => {
        setAdminSelection(true)
        setOpenBilling(false)
        setCloseBilling(false)
        setKitchen(false)
        setReports(false)
    }
    const goToOpenBilling = () => {
        setAdminSelection(false)
        setOpenBilling(true)
        setCloseBilling(false)
        setKitchen(false)
        setReports(false)
    }
    const goToCloseBilling = () => {
        setAdminSelection(false)
        setOpenBilling(false)
        setCloseBilling(true)
        setKitchen(false)
        setReports(false)
    }
    const goToKitchen = () => {
        setAdminSelection(false)
        setOpenBilling(false)
        setCloseBilling(false)
        setKitchen(true)
        setReports(false)
    }
    const goToReports = () => {
        setAdminSelection(false)
        setOpenBilling(false)
        setCloseBilling(false)
        setKitchen(false)
        setReports(true)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.admin}>
                    <AdminSelection adminSelection={adminSelection} goToOpenBilling={goToOpenBilling} goToCloseBilling={goToCloseBilling} goToKitchen={goToKitchen} goToReports={goToReports} />
                    <OpenBilling openBilling={openBilling} returnToAdminSelection={returnToAdminSelection} />
                    <CloseBilling closeBilling={closeBilling} returnToAdminSelection={returnToAdminSelection} />
                    <Kitchen kitchen={kitchen} returnToAdminSelection={returnToAdminSelection} />
                    <Reports reports={reports} returnToAdminSelection={returnToAdminSelection} />
                </div>
            </div>
        </>
    )
}

export {
    AdminScreen
}