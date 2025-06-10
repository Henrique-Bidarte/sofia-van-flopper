import styles from './catalog.module.scss'
import { DesertsIcon, DrinksIcon, MagiColasIcon, MainDishesIcon, ReturnIcon, SoftDrinksIcon } from 'ui/assets';


const Catalog = ({ catalog, returnToMenuSelection }) => {


    const catalogPayload = [
        {
            icon: MainDishesIcon,
            title: "Pratos Principais",
            description: "Pratos quentes da casa. Carnes marinadas em ferro fundido, legumes selados por indução e o famoso Estufado da Caldeira nº3. Coma por sua conta e risco. Confira nossas opções!",
            key: "main-dishes"
        },
        {
            icon: DesertsIcon,
            title: "Sobremesas",
            description: "Doces diretamente dos dutos de pressão da confeitaria. Tortas que sibilam, mousses que borbulham e pudins que te encaram de volta.",
            key: "deserts"
        },
        {
            icon: SoftDrinksIcon,
            title: "Soft Drinks",
            description: "Refrescos gaseificados, servidos em copos que tremem sozinhos. Sabores artificiais com nomes científicos duvidosos. Inclui o famoso Xarope 88 e o controverso Laranja Nº5.",
            key: "soft-drinks"
        },
        {
            icon: DrinksIcon,
            title: "Drinks Clássicos",
            description: "Receitas clássicas com doses irregulares. Misturados com o braço mecânico do barman — precisão não garantida.",
            key: "drinks"
        },
        {
            icon: MagiColasIcon,
            title: "Magi'Colas",
            description: "Garrafas brilhantes, cores suspeitas, efeitos imediatos. A Tradicional Doxoflopper da Casa já acendeu máquinas só de cair no chão. Não agite. Nunca agite!",
            key: "magi-colas"
        }
    ];

    return (
        <div className={`${styles.container} ${catalog ? styles.openTransition : styles.closeTransition}`}>
            <div className={styles.catalogContainer}>
                <div className={styles.menuList}>
                    {catalogPayload.map(item => {
                        return (
                            <button className={styles.menuItem}>
                                <img className={styles.menuItemIcon} src={item.icon} />
                                <div className={styles.menuItemText}>
                                    <div className={styles.itemTitle}>
                                        {item.title}
                                    </div>
                                    <div className={styles.itemDescription}>
                                        {item.description}
                                    </div>
                                </div>
                            </button>
                        )
                    })}
                </div>
                <button className={styles.returnButton} onClick={returnToMenuSelection}>
                    Voltar
                    <img className={styles.returnIcon} src={ReturnIcon} />
                </button>
            </div>
        </div>
    )
}

export { Catalog }