import Image from "next/image"
import Aparelho from "../../../public/assets/aparelho.png"
import styles from "./Beneficios.module.css"

export default function Beneficios () {
    return (
        <section className={styles.secao_beneficios}>
            <div>
                <h2 className={styles.subtitulo}>
                    Por que usar <span>aparelho</span>?
                </h2>
                <figure className={styles.container_img_aparelho}>
                    <Image src={Aparelho} alt="Imagem do uso de um aparelho" title="Imagem do uso de um aparelho" />
                </figure>
            </div>

            <ul className={styles.lista_beneficios}>
                <li>
                    <h3>Alinhar os dentes</h3>
                    <p>Dentes desalinhados causam problemas nos dentes e podem afetar a
                digestão dos alimentos e a respiração.</p>
                </li>

                <li>
                    <h3>Melhorar a dicção e a higiene dentária</h3>
                    <p>Muitas pessoas não conseguem nem usar fio dental devido à posição
                da sua dentição. Contudo, a correção possibilita o cuidado com a
                saúde bucal de forma bem mais ampla.</p>
                </li>

                <li>
                    <h3>Corrigir espaço entre os dentes</h3>
                    <p>Uma dentição desalinhada e com espaços significativos incomodam
                muitas pessoas. Usar aparelho nos dentes é uma das formas mais
                eficientes para que esses problemas possam ser corrigidos.</p>
                </li>
            </ul>
        </section>
    )
}