import React from "react";
import {Layout} from "../layout/layout";
import withRouter from "react-router-dom/es/withRouter";
import Form from "../components/form/form";
import {additional_info} from "../data/data";

const FormPage3 = (props) => {
    function handleOnNext() {
        props.history.push("/results");
    }

    return <Layout title="Solify">
        <Form form={additional_info} page={3} onNext={handleOnNext}/>
    </Layout>
}

export default withRouter(FormPage3);