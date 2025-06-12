import { ReturnIcon } from 'ui/assets'
import styles from './close-billing.module.scss'

const CloseBilling = ({ closeBilling, returnToAdminSelection }) => {
    return (
        <div className={`${styles.container} ${closeBilling ? styles.openTransition : styles.closeTransition}`}>
            <div className={styles.atomPannel} />
            <div className={styles.closeBillingContainer}>
                <div className={styles.closeBillingSection}>

                </div>
                <button className={styles.returnButton} onClick={returnToAdminSelection}>
                    Voltar
                    <img className={styles.returnIcon} src={ReturnIcon} />
                </button>
            </div>
        </div>
    )
}

export { CloseBilling }