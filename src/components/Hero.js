import React from "react"
import styles from "./styles.module.css"
import airbnbgrid from '../images/airbnbgrid.jpeg'

export default function Hero(){
    return(
    <section className={styles.hero}>
        <img src={airbnbgrid} alt="airbnbgrid" className={styles.herophoto}/>
        <h1 className={styles.heroheader}>Online Experiences</h1>
        <p className={styles.heroparagraph}>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </section>
    );
}