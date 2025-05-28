import styles from './admin.module.scss'
import { useNavigate } from 'react-router-dom';
import { ROUTE } from 'constants';


const AdminScreen = () => {
    const navigate = useNavigate();

    const handleReturnClick = () => {
        navigate(ROUTE.HOME);
    };
    return (
        <>
            <div className={styles.container}>
                <button onClick={handleReturnClick}>
                    Voltar
                </button>
                <div className={styles.atomPannel} />
            </div>
        </>
    )
}

export {
    AdminScreen
}