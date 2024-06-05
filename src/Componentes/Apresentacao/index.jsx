import Image from "next/image"
import Dente from "../../../public/assets/dente.png"
import styles from "./Apresentacao.module.css"

export default function Apresentacao () {
    return (
        <section className={styles.secao_apresentacao}> {/* Área que engloba a div e a lista */}
            <div className={styles.container_texto_apresentacao}> {/* Área que engloba os textos */}
                <h1>Os melhores <span>aparelhos dentários</span>!</h1>
                <p>Confira abaixo todas as especialidades odontológicas que temos à sua
              disposição!</p>
            </div>

            <ul className={styles.lista_servicos}> {/* Área que engloba */}
                <li>
                    <Image src={Dente} alt= "logo" title= "logo"/>
                    <p>Pré-avaliação</p>
                </li>

                <li>
                    <Image src={Dente} alt= "logo" title= "logo"/>
                    <p>Aparelhos Dentários</p>
                </li>

                <li>
                    <Image src={Dente} alt= "logo" title= "logo"/>
                    <p>Raio-X digital</p>
                </li>

                <li>
                    <Image src={Dente} alt= "logo" title= "logo"/>
                    <p>Clareamento dental</p>
                </li>
            </ul>
        </section>
    )
}