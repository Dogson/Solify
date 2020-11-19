import React, {useEffect, useState} from "react";
import styles from "./form.module.scss";
import {connect} from "react-redux";
import {Button, ButtonGroup, Form, ToggleButton,} from "react-bootstrap";
import {ACTIONS_FORM} from "../../actions/formActions";

const Question = ({attr, onChange, value}) => {
    return <div className={styles.question}>

        <Form.Group controlId={attr.type}>
            <Form.Label>{attr.label}</Form.Label>
            <Form.Text className="text-muted">
                {attr.question}
            </Form.Text>
            <ButtonGroup toggle>
                {attr.values.map((val, index) => (
                    <ToggleButton
                        key={index}
                        type="radio"
                        name="radio"
                        value={val}
                        checked={val === value}
                        onChange={e => onChange(e.currentTarget.value)}
                    >
                        {val === "Increased" ? `⬆ ${val}` :
                            val === "Decreased" ? `⬇ ${val}` :
                                val === "Yes" ? `✔ ${val}` :
                                    val === "No" ? `❌ ${val}` :
                                        val === "Stopped" ? `🛑 ${val}` :
                                            val}
                    </ToggleButton>
                ))}
                <ToggleButton
                    key="dontknow"
                    type="radio"
                    name="radio"
                    value={"Don't Know"}
                    checked={value === "Don't Know"}
                    onChange={e => onChange(e.currentTarget.value)}
                >
                    🤷 I don't know
                </ToggleButton>
            </ButtonGroup>
        </Form.Group>
    </div>
}

const FormCategory = ({form, page, primary_root = {}, onNext, ...props}) => {
    const [answers, setAnswers] = useState(primary_root);

    function handleChange(attr, value) {
        const newAnswers = {...answers};
        newAnswers[attr.type] = value;
        setAnswers(newAnswers);
    }

    function handleOnNext() {
        props.dispatch({type: ACTIONS_FORM.SET_FORM_PRIMARY_ROOT, payload: answers});
        onNext();
    }

    return <div className={styles.formContainer}>
        <h2>{form.label}</h2>
        <div className={styles.text}>{form.description}</div>
        <Form>
            {form.attributes.map(attr =>
                <Question value={answers[attr.type]}
                          attr={attr}
                          onChange={(value) => handleChange(attr, value)}/>)}
        </Form>

        <div className={styles.footer}>
            <small className="text-muted">{page}/3</small>
            <Button onClick={handleOnNext}>Next</Button>
        </div>
    </div>
}

const mapStateToProps = state => {
    return {
        primary_root: state.formReducer.primary_root,
        lateral_roots: state.formReducer.lateral_roots,
        additional_info: state.formReducer.additional_info,
    }
};


export default connect(mapStateToProps)(FormCategory)