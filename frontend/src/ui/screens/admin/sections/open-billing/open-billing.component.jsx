import { ReturnIcon } from 'ui/assets'
import styles from './open-billing.module.scss'

const OpenBilling = ({ openBilling, returnToAdminSelection }) => {
    return (
        <div className={`${styles.container} ${openBilling ? styles.openTransition : styles.closeTransition}`}>
            <div className={styles.atomPannel} />
            <div className={styles.openBillingContainer}>
                <div className={styles.openBillingSection}>

                </div>
                <button className={styles.returnButton} onClick={returnToAdminSelection}>
                    Voltar
                    <img className={styles.returnIcon} src={ReturnIcon} />
                </button>
            </div>
        </div>
    )
}

export { OpenBilling }