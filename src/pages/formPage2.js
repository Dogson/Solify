import React, {useEffect} from "react";
import {Layout} from "../layout/layout";
import styles from "./formPage.module.scss";
import { Button } from 'react-bootstrap';
import withRouter from "react-router-dom/es/withRouter";
import Form from "../components/form/form";
import {LATERAL_ROOTS_ATTR} from "../data/data";

const FormPage2 = (props) => {
    function handleOnNext() {
        props.history.push("/form-3");
    }

    function handleOnPrevious() {
        props.history.push("/form-1");
    }

    return <Layout title="Solify">
        <Form form={LATERAL_ROOTS_ATTR} page={2} onNext={handleOnNext} onPrevious={handleOnPrevious}/>
    </Layout>
}

export default withRouter(FormPage2);