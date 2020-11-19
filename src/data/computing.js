import {STRESS_RESULTS} from "./data";

export function computeResults(data) {
    STRESS_RESULTS.forEach((stress) => {
        const stressComputed = computeResultForStress(stress, data);
        const stressConclusion = concludeResultForStress(stressComputed);
    })
}


function computeResultForStress(stress, data) {
    let isStress = false;
    let nbOfTotalAttr = 0;
    let nbOfTotalImportantAttr = 0;
    const correctAttributes = [];
    const correctImportantAttributes = [];

debugger;
    stress.values.primary_root.forEach((attribute) => {
        nbOfTotalAttr++;
        if (data.primary_root[attribute.attribute] === attribute.value) {
            correctAttributes.push(attribute.attribute);
            if (attribute.important) {
                correctImportantAttributes.push(attribute.attribute);
            }
        }
        if (attribute.important) {
            nbOfTotalImportantAttr++
        }
    })

    stress.values.lateral_roots.forEach((attribute) => {
        nbOfTotalAttr++;
        if (data.lateral_roots[attribute.attribute] === attribute.value) {
            correctAttributes.push(attribute.attribute);
            if (attribute.important) {
                correctImportantAttributes.push(attribute.attribute);
            }
        }
        if (attribute.important) {
            nbOfTotalImportantAttr++
        }
    })

    stress.values.additional_info.forEach((attribute) => {
        nbOfTotalAttr++;
        if (data.additional_info[attribute.attribute] === attribute.value) {
            correctAttributes.push(attribute.attribute);
            if (attribute.important) {
                correctImportantAttributes.push(attribute.attribute);
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
        nbOfTotalImportantAttr
    }
}

function concludeResultForStress(computed) {
    console.log(computed);
}