import styles from './admin.module.scss'
import { AdminSelection } from './sections';
import { useState } from 'react';

const AdminScreen = () => {
    const [adminSelection, setAdminSelection] = useState(true)
    const [openBilling, setOpenBilling] = useState(false)
    const [closeBilling, setCloseBilling] = useState(false)
    const [openKitchen, setOpenKitchen] = useState(false)
    const [openReports, setOpenReports] = useState(false)

    const returnToAdminSelection = () => {
        setAdminSelection(true)
        setOpenBilling(false)
        setCloseBilling(false)
        setOpenKitchen(false)
        setOpenReports(false)
    }
    const goToOpenBilling = () => {
        setAdminSelection(false)
        setOpenBilling(true)
        setCloseBilling(false)
        setOpenKitchen(false)
        setOpenReports(false)
    }
    const goToCloseBilling = () => {
        setAdminSelection(false)
        setOpenBilling(false)
        setCloseBilling(true)
        setOpenKitchen(true)
        setOpenReports(false)
    }
    const goToKitchen = () => {
        setAdminSelection(false)
        setOpenBilling(false)
        setCloseBilling(false)
        setOpenKitchen(false)
        setOpenReports(true)
    }
    const goToReports = () => {
        setAdminSelection(false)
        setOpenBilling(false)
        setCloseBilling(false)
        setOpenKitchen(false)
        setOpenReports(true)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.admin}>
                    <AdminSelection adminSelection={adminSelection} goToOpenBilling={goToOpenBilling} goToCloseBilling={goToCloseBilling} goToKitchen={goToKitchen} goToReports={goToReports} />
                </div>
            </div>
        </>
    )
}

export {
    AdminScreen
}