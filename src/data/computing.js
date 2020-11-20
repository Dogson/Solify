import {
    ADDITIONAL_INFO_ATTR,
    ENVIRONMENTAL_FACTORS,
    LATERAL_ROOTS_ATTR,
    PRIMARY_ROOT_ATTR,
    STRESS_RESULTS
} from "./data";

export function computeResults(data) {
    const stresses = [];
    STRESS_RESULTS.forEach((stress) => {
        const stressComputed = computeResultForStress(stress, data);
        const hasStressed = concludeResultForStress(stressComputed, stress);
        if (hasStressed) {
            stresses.push({
                stress: stress.factor, details:
                    {
                        ...stressComputed,
                        successRatio: Math.round((stressComputed.nbOfAttr / stressComputed.nbOfTotalAttr) * 100)
                    }
            })
        }
    })

    stresses.sort((a, b) => {
        console.log(a);
        return a.details.successRatio > b.details.successRatio ? -1 : 1;
    })

    return stresses;
}


function computeResultForStress(stress, data) {
    let nbOfTotalAttr = 0;
    let nbOfTotalImportantAttr = 0;
    let nbOfAttr = 0;
    const correctAttributes = {
        primary_root: [],
        lateral_roots: [],
        additional_info: []
    };
    const correctImportantAttributes = {
        primary_root: [],
        lateral_roots: [],
        additional_info: []
    };

    stress.values.primary_root.forEach((attribute) => {
        nbOfTotalAttr++;
        if (data.primary_root[attribute.attribute] === attribute.value) {
            correctAttributes.primary_root.push({
                attribute: PRIMARY_ROOT_ATTR.attributes.find((attr) => {
                    return attr.type === attribute.attribute
                }).label,
                value: attribute.value
            });
            nbOfAttr++;
            if (attribute.important) {
                correctImportantAttributes.primary_root.push(attribute.attribute);
            }
        }
        if (attribute.important) {
            nbOfTotalImportantAttr++
        }
    })

    stress.values.lateral_roots.forEach((attribute) => {
        nbOfTotalAttr++;
        if (data.lateral_roots[attribute.attribute] === attribute.value) {
            correctAttributes.lateral_roots.push({
                attribute: LATERAL_ROOTS_ATTR.attributes.find((attr) => {
                    return attr.type === attribute.attribute
                }).label,
                value: attribute.value
            });
            nbOfAttr++;
            if (attribute.important) {
                correctImportantAttributes.lateral_roots.push(attribute.attribute);
            }
        }
        if (attribute.important) {
            nbOfTotalImportantAttr++
        }
    })

    stress.values.additional_info.forEach((attribute) => {
        nbOfTotalAttr++;
        if (data.additional_info[attribute.attribute] === attribute.value) {
            correctAttributes.additional_info.push({
                attribute: ADDITIONAL_INFO_ATTR.attributes.find((attr) => {
                    return attr.type === attribute.attribute
                }).label,
                value: attribute.value
            });
            nbOfAttr++;
            if (attribute.important) {
                correctImportantAttributes.additional_info.push(attribute.attribute);
            }
        }
        if (attribute.important) {
            nbOfTotalImportantAttr++
        }
    })

    return {
        correctAttributes,
        correctImportantAttributes,
        nbOfTotalAttr,
        nbOfTotalImportantAttr,
        nbOfAttr
    }
}

function concludeResultForStress(computed, stress) {
    const attributes = [];
    const correctImportantAttributes = [];
    computed.correctAttributes.primary_root.forEach((attr) => {
        attributes.push(attr);
    })
    computed.correctAttributes.lateral_roots.forEach((attr) => {
        attributes.push(attr);
    })
    computed.correctAttributes.additional_info.forEach((attr) => {
        attributes.push(attr);
    })

    computed.correctImportantAttributes.primary_root.forEach((attr) => {
        correctImportantAttributes.push(attr);
    })
    computed.correctImportantAttributes.lateral_roots.forEach((attr) => {
        correctImportantAttributes.push(attr);
    })
    computed.correctImportantAttributes.additional_info.forEach((attr) => {
        correctImportantAttributes.push(attr);
    })
    if (stress.name === ENVIRONMENTAL_FACTORS.FIRE) {
        return attributes.length > computed.nbOfTotalAttr / 2 && correctImportantAttributes.length >= 1;
    }
    return attributes.length >= computed.nbOfTotalAttr / 2 && correctImportantAttributes.length >= computed.nbOfTotalAttr / 4;
}