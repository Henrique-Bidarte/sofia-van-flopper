import styles from "./admin-selection.module.scss"
import { ReturnIcon, StaffButton } from "ui/assets"
import { ROUTE } from "constants";
import { useNavigate } from "react-router-dom";

const AdminSelection = ({ adminSelection, goToOpenBilling, goToCloseBilling, goToKitchen, goToReports }) => {
    const navigate = useNavigate();

    const handleReturnClick = () => {
        navigate(ROUTE.ADMIN);
    }

    const menuSelectionPayload = [
        {
            icon: StaffButton,
            title: "Cozinha",
            description: "Cozinha",
            key: "kitchen",
            click: goToKitchen
        },
        {
            icon: StaffButton,
            title: "Relatório de Operação",
            description: "Relatório de Operação",
            key: "reports",
            click: goToReports
        },
        {
            icon: StaffButton,
            title: "Abertura de Comanda",
            description: "Abertura de Comanda",
            key: "open-billing",
            click: goToOpenBilling
        },
        {
            icon: StaffButton,
            title: "Fechamento de Comanda",
            description: "Fechamento de Comanda",
            key: "close-billing",
            click: goToCloseBilling
        },
    ]

    return (
        <div className={`${styles.container} ${adminSelection ? styles.openTransition : styles.closeTransition}`}>
            <div className={styles.atomPannel} />
            <div className={styles.adminList}>
                {menuSelectionPayload.map(item => {
                    return (
                        <button className={styles.adminItem} onClick={() => item.click()}>
                            <div className={styles.adminItemText}>
                                <div className={styles.itemTitle}>
                                    {item.title}
                                </div>
                                <div className={styles.itemDescription}>
                                    {item.description}
                                </div>
                            </div>
                            <img className={styles.adminItemIcon} src={item.icon} />
                        </button >
                    )
                })}
            </div >
            <button className={styles.leaveButton} onClick={handleReturnClick}>
                <img className={styles.returnIcon} src={ReturnIcon} />
                Desconectar
            </button>
        </div>
    )
}

export { AdminSelection }