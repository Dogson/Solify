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
            <ButtonGroup toggle className={styles.btnGroup}>
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

const FormCategory = ({form, page, primary_root = {}, lateral_roots = {}, additional_info = {}, onNext, onPrevious, ...props}) => {
    const [answers, setAnswers] = useState({primary_root, lateral_roots, additional_info})

    function handleChange(attr, value) {
        const newAnswers = {...answers};
        newAnswers[form.id][attr.type] = value;
        setAnswers(newAnswers);
    }

    function handleOnNext() {
        switch (form.id) {
            case "primary_root" :
                props.dispatch({type: ACTIONS_FORM.SET_FORM_PRIMARY_ROOT, payload: answers[form.id]});
                break;
            case "lateral_roots":
                props.dispatch({type: ACTIONS_FORM.SET_FORM_LATERAL_ROOTS, payload: answers[form.id]});
                break;
            default:
                props.dispatch({type: ACTIONS_FORM.SET_FORM_ADDITIONAL_INFO, payload: answers[form.id]});
        }
        onNext();
    }

    return <div className={styles.formContainer}>
        <h2>{form.label}</h2>
        <img src={form.image} className={styles.image}/>
        <div className={styles.text}>{form.description}</div>
        <Form>
            {form.attributes.map(attr =>
                <Question value={answers[form.id][attr.type]}
                          attr={attr}
                          onChange={(value) => handleChange(attr, value)}/>)}
        </Form>

        <div className={styles.footer}>
            <Button variant="outlined" onClick={onPrevious}>Back</Button>
            <Button onClick={handleOnNext}>{page < 3 ? `Next →` : `Results 🗸`}</Button>
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