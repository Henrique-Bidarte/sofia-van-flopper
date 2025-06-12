import { ReturnIcon } from 'ui/assets'
import styles from './kitchen.module.scss'

const Kitchen = ({ kitchen, returnToAdminSelection }) => {
    return (
        <div className={`${styles.container} ${kitchen ? styles.openTransition : styles.closeTransition}`}>
            <div className={styles.kitchenContainer}>
                <div className={styles.kitchenSection}>

                </div>
                <button className={styles.returnButton} onClick={returnToAdminSelection}>
                    Voltar
                    <img className={styles.returnIcon} src={ReturnIcon} />
                </button>
            </div>
        </div>
    )
}

export { Kitchen }