import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.scss';
import { ROUTE } from 'constants';

const LoginScreen = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleReturnClick = () => {
        navigate(ROUTE.HOME);
    };

    const handleLoginClick = () => {
        navigate(ROUTE.ADMIN);
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <input
                    type="text"
                    placeholder="Usuário"
                    className={styles.input}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div className={styles.buttonContainer}>
                    <button onClick={handleLoginClick} className={styles.formButton}>
                        Login
                    </button>
                    <button onClick={handleReturnClick} className={styles.formButton}>
                        Voltar
                    </button>
                </div>
            </div>

            <div className={styles.atomPannel} />
            <div className={styles.monitorPannel} />
            <div className={styles.bottlePannel} />
        </div>
    );
};

export { LoginScreen };
