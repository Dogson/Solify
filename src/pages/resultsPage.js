import React, {useEffect, useState} from "react";
import {Layout} from "../layout/layout";
import styles from "./resultsPage.module.scss";
import { Button } from 'react-bootstrap';
import withRouter from "react-router-dom/es/withRouter";
import {connect} from "react-redux";
import {ACTIONS_FORM} from "../actions/formActions";

const ResultPage = ({primary_root, lateral_roots, additional_info, ...props}) => {
    const results = computeResults({primary_root, lateral_roots, additional_info});

    return <Layout title="Solify">
        <div className={styles.resultsPageContainer}>
            <h2>Résultats</h2>
        </div>
    </Layout>
}

const mapStateToProps = state => {
    return {
        primary_root: state.formReducer.primary_root,
        lateral_roots: state.formReducer.lateral_roots,
        additional_info: state.formReducer.additional_info,
    }
};

export default withRouter(connect(mapStateToProps)(ResultPage));