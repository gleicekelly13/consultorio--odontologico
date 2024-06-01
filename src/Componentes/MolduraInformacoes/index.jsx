import styles from './MolduraInformacoe.module.css'

export default function MolduraInformacoes (props) {
    return (
        <div className={styles.moldura}>
            <h3 className={styles.subtitulo}>Informações</h3>
            <div className={styles.info}>{props.children}</div>
        </div>
    )
}