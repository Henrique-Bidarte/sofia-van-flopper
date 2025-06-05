import styles from './about.module.scss'
import { AboutLogo, ReturnIcon } from 'ui/assets'

const About = ({ about, returnToMenuSelection }) => {


    const aboutText = `
    Fundado durante um blecaute diplomático entre a Guilda dos Meteoturgos e burocratas com um talento extraordinário para atrapalhar acordos simples, o Sofia Van Flopper surgiu de uma aposta mal explicada, dois barris de plasmídeo adulterado e uma licença de funcionamento escrita em uma língua que ninguém entende. 

    Erguido sobre o que pode ter sido uma instalação de testes alquímicos fracassada, uma lavanderia, ou simplesmente um erro arquitetônico admirável, o bar também conta com uma linha do Expresso Relâmpago que deveria estar desativada... mas insiste em passar por aqui aos domingos. A explicação oficial? Não temos. E se tivéssemos, provavelmente ignoraríamos.

    Desde então, temos servido como ponto de encontro para quem foi expulso de estabelecimentos com padrões. Se você já teve sua entrada negada por “violar as leis da termodinâmica”,  bem-vindo ao lar.

    A decoração é o que acontece quando um colecionador compulsivo de lixo tem orçamento e autoestima. Relíquias do Submundo, uma curadoria questionável de itens que emitem luz suspeita e um artefato não identificado que pisca e ameaça entrar em autoignição a cada 23 horas. Tudo sob a vigilância do gerente invisível, que aparentemente só aparece quando ninguém está olhando.

    O gerador nuclear no porão? Está lá. Está funcionando. Está... estável o suficiente. Oficialmente, ele só alimenta os freezers. Extraoficialmente... bem, você já notou que os drinks brilham no escuro?  Mas relaxe: um botão sorridente garante que está tudo bem. Ele pisca. Às vezes.

    Entre, pegue um banco e sinta-se parte dessa confusão regulamentada.  Se você está aqui, é porque claramente tomou uma sequência de decisões questionáveis — e nós aplaudimos todas elas.
`
    const footerText = `
    Nosso clássico da casa? Dox’o Flopper 8. 
    
    Se não souber o que é, ótimo — aumenta as chances de sobrevivência.
    `

    return (
        <div className={`${styles.container} ${about ? styles.openTransition : styles.closeTransition}`}>
            <div className={styles.aboutContainer}>
                <img className={styles.aboutIcon} src={AboutLogo} />
                <div className={styles.aboutSection}>
                    <div className={styles.aboutText}>
                        {aboutText.trim().split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <span className={styles.footerText}>{footerText}</span>
                </div>
                <button className={styles.returnButton} onClick={returnToMenuSelection}>
                    Voltar
                    <img className={styles.returnIcon} src={ReturnIcon} />
                </button>
            </div>
        </div>
    )
}

export { About }