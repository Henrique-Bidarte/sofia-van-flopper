import styles from './admin.module.scss'
import { useNavigate } from 'react-router-dom';
import { ROUTE } from 'constants';
import { ReturnIcon, StaffButton } from 'ui/assets';


const AdminScreen = () => {
    const navigate = useNavigate();

    const handleReturnClick = () => {
        navigate(ROUTE.HOME);
    };

    const catalogPayload = [
        {
            icon: StaffButton,
            title: "Abertura de Comanda",
            description: "Pratos quentes da casa. Carnes marinadas em ferro fundido, legumes selados por indução e o famoso Estufado da Caldeira nº3. Coma por sua conta e risco. Confira nossas opções!",
            key: "open-billing"
        },
        {
            icon: StaffButton,
            title: "Fechamento de Comanda",
            description: "Pratos quentes da casa. Carnes marinadas em ferro fundido, legumes selados por indução e o famoso Estufado da Caldeira nº3. Coma por sua conta e risco. Confira nossas opções!",
            key: "close-billing"
        },
        {
            icon: StaffButton,
            title: "Cozinha",
            description: "Pratos quentes da casa. Carnes marinadas em ferro fundido, legumes selados por indução e o famoso Estufado da Caldeira nº3. Coma por sua conta e risco. Confira nossas opções!",
            key: "kitchen"
        },
        {
            icon: StaffButton,
            title: "Relatório de operação",
            description: "Pratos quentes da casa. Carnes marinadas em ferro fundido, legumes selados por indução e o famoso Estufado da Caldeira nº3. Coma por sua conta e risco. Confira nossas opções!",
            key: "kitchen"
        },
    ];


    return (
        <div className={styles.container}>
            <div className={styles.atomPannel} />
            <div className={styles.adminContainer}>
                <div className={styles.adminSection}>
                </div>
                <button className={styles.returnButton} onClick={handleReturnClick}>
                    Voltar
                    <img className={styles.returnIcon} src={ReturnIcon} />
                </button>
            </div>
        </div>
    )
}

export {
    AdminScreen
}