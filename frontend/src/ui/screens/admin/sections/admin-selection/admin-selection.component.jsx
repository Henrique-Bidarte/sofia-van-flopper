import styles from "./admin-selection.module.scss"
import { ReturnIcon, AdminReportsIcon, KitchenIcon, OpenBillingIcon, CloseBillingIcon } from "ui/assets"
import { ROUTE } from "constants";
import { useNavigate } from "react-router-dom";

const AdminSelection = ({ adminSelection, goToOpenBilling, goToCloseBilling, goToKitchen, goToReports }) => {
    const navigate = useNavigate();

    const handleReturnClick = () => {
        navigate(ROUTE.HOME);
    }

    const menuSelectionPayload = [
        {
            icon: KitchenIcon,
            title: "Cozinha",
            description: "A fila, os pratos e os dramas culinários em tempo real",
            key: "kitchen",
            click: goToKitchen
        },
        {
            icon: AdminReportsIcon,
            title: "Relatório de Operação",
            description: "Pedidos, Comandas e os Números por trás do balcão",
            key: "reports",
            click: goToReports
        },
        {
            icon: OpenBillingIcon,
            title: "Abertura de Comanda",
            description: "Ninguém entra sem deixar rastro",
            key: "open-billing",
            click: goToOpenBilling
        },
        {
            icon: CloseBillingIcon,
            title: "Fechamento de Comanda",
            description: "Receba os dobrões com elegância",
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