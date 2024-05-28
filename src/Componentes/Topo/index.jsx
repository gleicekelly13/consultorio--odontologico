import Image from "next/image";
import styles from "./Topo.module.css";
import Dente from "../../../public/assets/dente.png";

export default function Topo () {
    return (
        <div className={styles.topo}>
            <div className={styles.container_logo}>
                <Image src={Dente} alt="Dentes saudáveis" title="Dentes saudáveis" />
                <p>Dentes saudáveis</p>
            </div>
        </div>
    )
}