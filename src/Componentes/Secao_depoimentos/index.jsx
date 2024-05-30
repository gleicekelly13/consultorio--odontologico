import Image from 'next/image'
import Cliente01 from "../../../public/assets/cliente01.png"
import Cliente02 from "../../../public/assets/cliente02.png"
import Cliente03 from "../../../public/assets/cliente03.png"
import styles from './Secao_depoimentos.module.css'
import CardDepoimento from '../CardDepoimento'


export default function Secao_depoimentos () {
    return (
        <section className={styles.secao_depoimentos}>
            <h2 className={styles.subtitulo}>Veja o que nossos <span>clientes</span> estão falando...</h2>

            <div className={styles.container_depoimentos}>
                <CardDepoimento
                    imagem={Cliente01}
                    nome="Alberto"
                    descricao="Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me
                    atendeu com profissionalismo e cuidado."
                />

                <CardDepoimento
                    imagem={Cliente02}
                    nome="Eliana"
                    descricao="Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me
                    atendeu com profissionalismo e cuidado."
                />

                <CardDepoimento
                    imagem={Cliente03}
                    nome="Carla"
                    descricao="Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me
                    atendeu com profissionalismo e cuidado."
                />
            </div>
        </section>
    )
}