import React, {useEffect} from "react";
import {Layout} from "../layout/layout";
import styles from "./formPage.module.scss";
import { Button } from 'react-bootstrap';
import withRouter from "react-router-dom/es/withRouter";
import Form from "../components/form/form";
import {lateral_roots} from "../data/data";

const FormPage2 = (props) => {
    function handleOnNext() {
        props.history.push("/form-3");
    }

    return <Layout title="Solify">
        <Form form={lateral_roots} page={2} onNext={handleOnNext}/>
    </Layout>
}

export default withRouter(FormPage2);