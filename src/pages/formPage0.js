import React, {useEffect} from "react";
import {Layout} from "../layout/layout";
import withRouter from "react-router-dom/es/withRouter";
import Form from "../components/form/form";
import {PRIMARY_ROOT_ATTR} from "../data/data";
import generalImg from "../assets/general.png";
import styles from "./formPage.module.scss";
import {Button} from "react-bootstrap";

const FormPage0 = (props) => {
    function handleOnNext() {
        props.history.push("/form-1");
    }

    function handleOnPrevious() {
        props.history.push("/");
    }

    return <Layout title="Solify">
        <div className={styles.formContainer}>
            <p>Plants are sensitive to small changes in their environment and when a stress occur they adapt their shoot
                and
                root in order to survive ! Try to take two plants of the same spice at two different moment (1 week, 1
                month, 1 year or even several years), look at their roots, and they will tell you what happened in your
                region during this period !</p>
            <img src={generalImg} className={styles.image}/>
            <div className={styles.footer}>
                <Button variant="outlined" onClick={handleOnPrevious}>Back</Button>
                <Button onClick={handleOnNext}>Next →</Button>
            </div>
        </div>
    </Layout>
}

export default withRouter(FormPage0);