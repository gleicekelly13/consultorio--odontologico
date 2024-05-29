import Image from "next/image"
import Aparelho from "../../../public/assets/aparelho.png"
import styles from "./Beneficios.module.css"

export default function Beneficios () {
    return (
        <section>
            <div>
                <h2>
                    Por que usar <span>aparelho</span>?
                </h2>
                <figure>
                    <Image src={Aparelho} alt="Imagem do uso de um aparelho" title="Imagem do uso de um aparelho" />
                </figure>
            </div>
        </section>
    )
}