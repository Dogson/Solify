import React from "react"
import styles from "./layout.module.scss";

export const Layout = ({children, title}) => (
    <div className={styles.pageContainer}>
        <div className={styles.pageContent}>
            {title ? <h1 className={styles.titleContainer}>{title}</h1> : null}
            {children}
        </div>
    </div>
)
