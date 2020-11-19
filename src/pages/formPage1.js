import React, {useEffect} from "react";
import {Layout} from "../layout/layout";
import styles from "./formPage.module.scss";
import { Button } from 'react-bootstrap';
import withRouter from "react-router-dom/es/withRouter";
import Form from "../components/form/form";
import {primary_root} from "../data/data";

const FormPage1 = (props) => {
    function handleOnNext() {
        props.history.push("/form-2");
    }

    return <Layout title="Solify">
            <Form form={primary_root} page={1} onNext={handleOnNext}/>
    </Layout>
}

export default withRouter(FormPage1);