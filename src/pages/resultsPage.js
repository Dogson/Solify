import React, {useEffect, useState} from "react";
import {Layout} from "../layout/layout";
import styles from "./resultsPage.module.scss";
import {Button} from 'react-bootstrap';
import withRouter from "react-router-dom/es/withRouter";
import {connect} from "react-redux";
import {ACTIONS_FORM} from "../actions/formActions";
import {computeResults} from "../data/computing";

const ResultPage = ({primary_root, lateral_roots, additional_info, ...props}) => {
    const results = computeResults({primary_root, lateral_roots, additional_info});

    return <Layout title="Solify">
        <div className={styles.resultsPageContainer}>
            <h2>Results - Environmental Stresses</h2>

            <div className={styles.stressesContainer}>
                {results.map((result, i) => {
                    console.log(result.stress.image);
                    return <div className={styles.stressContainer} key={i}>
                        <h3>{result.stress.name} <small>({result.details.successRatio}% relevant parameters)</small>
                        </h3>
                        <img src={result.stress.image} className={styles.image} alt={result.stress.name}/>
                        <p>{result.stress.description}</p>
                        <p className="text-muted">Here are the parameters that allow us to get to this conclusion :</p>
                        {result.details.correctAttributes.primary_root.length > 0 && <strong>Primary root</strong>}
                        <ul>
                            {result.details.correctAttributes.primary_root.map((detail) => {
                                return <li>{detail.attribute} : {detail.value}</li>
                            })}
                        </ul>

                        {result.details.correctAttributes.lateral_roots.length > 0 && <strong>Lateral roots</strong>}
                        <ul>
                            {result.details.correctAttributes.lateral_roots.map((detail) => {
                                return <li>{detail.attribute} : {detail.value}</li>
                            })}
                        </ul>

                        {result.details.correctAttributes.additional_info.length > 0 &&
                        <strong>Additional information</strong>}
                        <ul>
                            {result.details.correctAttributes.additional_info.map((detail) => {
                                return <li>{detail.attribute} : {detail.value}</li>
                            })}
                        </ul>
                    </div>
                })}
                {results.length === 0 && <p>The data you entered is not enough to get a conclusion.</p>}
            </div>

            <div className={styles.footer}>
                <Button variant="outlined" onClick={() => props.history.push("/form-3")}>Back</Button>
                <Button onClick={() => props.history.push("/")}>Go home</Button>
            </div>
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