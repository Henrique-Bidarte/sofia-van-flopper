import { useState } from 'react';
import { OpenBillingIcon, ReturnIcon } from 'ui/assets';
import styles from './open-billing.module.scss';

const OpenBilling = ({ openBilling, returnToAdminSelection }) => {
    const [commandNumber, setCommandNumber] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const onCommandNumberChange = (e) => {
        setCommandNumber(e.target.value.replace(/\D/, ''))
        setFeedbackMessage('')
    }

    const handleOpenCommand = () => {
        if (!/^\d{3}$/.test(commandNumber)) {
            setFeedbackMessage('Número inválido. Use 3 dígitos.');
            return;
        }
        const alreadyOpen = Math.random() < 0.5;
        if (alreadyOpen) {
            setFeedbackMessage('⚠ Comanda já está em Circulação ⚠');
        } else {
            setFeedbackMessage(`❇ Comanda N°${commandNumber} Aberta ❇`);
            setCommandNumber('');
        }
    };

    return (
        <div className={`${styles.container} ${openBilling ? styles.openTransition : styles.closeTransition}`}>
            <div className={styles.atomPannel} />
            <div className={styles.openBillingContainer}>
                <div className={styles.openBillingSection}>
                    <div className={styles.openBillingTitle}>
                        Abertura de Comanda
                        <img src={OpenBillingIcon} className={styles.openBillingIcon} />
                    </div>
                    <input
                        type="text"
                        maxLength={3}
                        className={styles.commandInput}
                        placeholder="Número da comanda"
                        value={commandNumber}
                        onChange={onCommandNumberChange}
                    />
                    <button className={styles.openBilingButton} onClick={handleOpenCommand}>
                        Abrir Comanda
                    </button>
                    <div className={styles.feedback}>{feedbackMessage}</div>
                </div>
                <button className={styles.returnButton} onClick={returnToAdminSelection}>
                    Voltar
                    <img className={styles.returnIcon} src={ReturnIcon} />
                </button>
            </div>
        </div>
    );
};

export { OpenBilling };
