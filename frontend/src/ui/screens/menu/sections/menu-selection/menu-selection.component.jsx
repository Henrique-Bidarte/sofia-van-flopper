import styles from "./menu-selection.module.scss"
import { AboutIcon, BillingIcon, CatalogIcon } from "ui/assets"
import { ROUTE } from "constants";
import { useNavigate } from "react-router-dom";

const MenuSelection = ({ menuSelection, returnToCatalog }) => {
    const navigate = useNavigate();

    const handleReturnClick = () => {
        navigate(ROUTE.HOME);
    }

    const menuSelectionPayload = [
        {
            icon: CatalogIcon,
            title: "Cardápio",
            description: "Todas as opções da casa, organizadas com a precisão de um relógio enferrujado. Se está no menu, provavelmente ainda é legal servir.",
            key: "cardapio",
            click: returnToCatalog
        },
        {
            icon: BillingIcon,
            title: "Consultar Comanda",
            description: "Total da sua comanda calculado por um autômato disléxico. Valores cobrados com base em tabelas, gastos duvidosos e critérios que nem o gerente entende.",
            key: "billing",
            click: returnToCatalog
        },
        {
            icon: AboutIcon,
            title: "Sobre o Sofia Van Flopper",
            description: "Informações institucionais, lendas não confirmadas e o motivo de termos um gerador nuclear no porão.",
            key: "about",
            click: returnToCatalog
        },
    ]

    return (
        <div className={`${styles.container} ${menuSelection ? styles.openTransition : styles.closeTransition}`}>
            <div className={styles.menuList}>
                {menuSelectionPayload.map(item => {
                    return (
                        <button className={styles.menuItem} onClick={() => item.click()}>
                            <img className={styles.menuItemIcon} src={item.icon} />
                            <div className={styles.menuItemText}>
                                <div className={styles.itemTitle}>
                                    {item.title}
                                </div>
                                <div className={styles.itemDescription}>
                                    {item.description}
                                </div>
                            </div>
                        </button >
                    )
                })}
            </div >
            <button className={styles.leaveButton} onClick={handleReturnClick}>
                Desconectar
            </button>
        </div>
    )
}

export { MenuSelection }