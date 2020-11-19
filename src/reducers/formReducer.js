import {ACTIONS_FORM} from "../actions/formActions";

const reducer = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS_FORM.SET_FORM_PRIMARY_ROOT:
            return {
                ...state,
                primary_root: action.payload,
            };
        case ACTIONS_FORM.SET_FORM_LATERAL_ROOTS:
            return {
                ...state,
                lateral_roots: action.payload,
            };
        case ACTIONS_FORM.SET_FORM_ADDITIONAL_INFO:
            return {
                ...state,
                additional_info: action.payload,
            };
        case ACTIONS_FORM.EMPTY_FORM:
            return {
                ...state,
                additional_info: {},
                primary_root: {},
                lateral_roots: {}
            };
        default:
            return {
                ...state
            }
    }
}

export default reducer;