import React from "react";
import airbnb from '../images/airbnb.png'
import styles from "./styles.module.css"

function Navbar(){
    return(
        <nav>
            <img src={airbnb} alt="airbb" className={styles.navlogo}/>        
        </nav>
    );
}

export default Navbar;