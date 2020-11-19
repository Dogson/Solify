import React, {useEffect, useState} from "react";
import {Layout} from "../layout/layout";
import styles from "./homepage.module.scss";
import {Button} from 'react-bootstrap';
import withRouter from "react-router-dom/es/withRouter";
import {connect} from "react-redux";
import {ACTIONS_FORM} from "../actions/formActions";
import generalImg from "../assets/general.png"

const HomePage = (props) => {

    useEffect(() => {
        props.dispatch({
            type: ACTIONS_FORM.EMPTY_FORM
        });
    });

    return <Layout title="Solify">
        <div className={styles.homepageContainer}>
            <h2>Welcome to Solify</h2>
            <div className={styles.body}>
                <div className={styles.text}>
                    <p>Find out what type of stress has affected your soil.</p>
                </div>
                <Button variant="primary" size="lg" onClick={() => props.history.push("/form-0")}>🌱 Start</Button>
            </div>
        </div>
    </Layout>
}

export default withRouter(connect()(HomePage));