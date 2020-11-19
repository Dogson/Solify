import React from "react"
import styles from "./layout.module.scss";
import {NavLink} from "react-router-dom";

export class Layout extends React.Component {
    componentDidMount() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    render() {
        const {children, title} = this.props;
        return <div className={styles.pageContainer}>
            <div className={styles.pageContent}>
                {title ? <NavLink className={styles.titleContainer} to={"/"}><h1>{title}</h1></NavLink> : null}
                {children}
            </div>
        </div>
    }
}
