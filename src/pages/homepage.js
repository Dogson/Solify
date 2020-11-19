import React from "react";
import {Layout} from "../layout/layout";
import styles from "./homepage.module.scss";
import { Button } from 'react-bootstrap';

const HomePage = () => {
    return <Layout title="Solify">
        <div className={styles.homepageContainer}>
            <h2>Welcome to Solify</h2>
            <div className={styles.body}>
                <div className={styles.text}>
                    <p>Find out what type of stress has affected your soil.</p>
                </div>
                <Button variant="primary" size="lg">🌱 Start</Button>
            </div>
        </div>
    </Layout>
}

export default HomePage;