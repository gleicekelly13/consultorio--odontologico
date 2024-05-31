import styles from './Secao_informacoes.module.css'

export default function Secao_informacoes () {
    return (
        <section className={styles.secao_informacoes}>
            <div className={styles.container_informacoes}>
                <ul className={styles.lista_horarios}> 
                    <li>Segunda - 9:00 às 18:00</li>
                    <li>Terça - 9:00 às 18:00</li>
                    <li>Quarta - 9:00 às 18:00</li>
                    <li>Quinta - 9:00 às 18:00</li>
                    <li>Sexta - 9:00 às 17:00</li>
                    <li>Sábado - 9:00 às 12:00</li>
                </ul>
            </div>
        </section>
    )
}