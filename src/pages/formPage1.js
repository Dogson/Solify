import React, {useEffect} from "react";
import {Layout} from "../layout/layout";
import withRouter from "react-router-dom/es/withRouter";
import Form from "../components/form/form";
import {PRIMARY_ROOT_ATTR} from "../data/data";

const FormPage1 = (props) => {
    function handleOnNext() {
        props.history.push("/form-2");
    }

    function handleOnPrevious() {
        props.history.push("/");
    }

    return <Layout title="Solify">
            <Form form={PRIMARY_ROOT_ATTR} page={1} onNext={handleOnNext} onPrevious={handleOnPrevious}/>
    </Layout>
}

export default withRouter(FormPage1);