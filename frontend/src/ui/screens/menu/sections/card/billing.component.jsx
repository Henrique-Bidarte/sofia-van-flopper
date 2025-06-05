import { ReturnIcon } from 'ui/assets'
import styles from './billing.module.scss'

const Billing = ({ billing, returnToMenuSelection }) => {
    return (
        <div className={`${styles.container} ${billing ? styles.openTransition : styles.closeTransition}`}>
            <div className={styles.billingContainer}>
                <div className={styles.billingSection}>

                </div>
                <button className={styles.returnButton} onClick={returnToMenuSelection}>
                    Voltar
                    <img className={styles.returnIcon} src={ReturnIcon} />
                </button>
            </div>
        </div>
    )
}

export { Billing }