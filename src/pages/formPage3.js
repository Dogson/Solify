import React from "react";
import {Layout} from "../layout/layout";
import withRouter from "react-router-dom/es/withRouter";
import Form from "../components/form/form";
import {ADDITIONAL_INFO_ATTR} from "../data/data";

const FormPage3 = (props) => {
    function handleOnNext() {
        props.history.push("/results");
    }

    function handleOnPrevious() {
        props.history.push("/form-2");
    }

    return <Layout title="Solify">
        <Form form={ADDITIONAL_INFO_ATTR} page={3} onNext={handleOnNext} onPrevious={handleOnPrevious}/>
    </Layout>
}

export default withRouter(FormPage3);