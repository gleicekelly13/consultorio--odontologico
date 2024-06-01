import Image from 'next/image'
import Dentista03 from "../../../public/assets/medico03.png"
import Dentista02 from "../../../public/assets/medico02.png"
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

                <div className={styles.card}>
                    <figure>
                        <Image className={styles.img_aparelho}
                            src={Dentista03}
                            alt='Dra. Ana'
                            title='Dra. Ana'
                        />
                    </figure>
                    <div>
                        <p>Dra. Ana - Ortodontista</p>
                        <p>Segundas e Sextas</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <figure>
                        <Image className={styles.img_aparelho}
                            src={Dentista02}
                            alt='Dr. Carlos'
                            title='Dr. Carlos'
                        />
                    </figure>
                    <div>
                        <p>Dr. Carlos - Entodontia</p>
                        <p>Terças e Quartas</p>
                    </div>
                </div>
            </div>
        </section>
    )
}