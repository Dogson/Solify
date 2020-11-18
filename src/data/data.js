import React from "react";

export const ENVIRONMENTAL_FACTORS = {
    WATER_STRESS: "Water stress, drought",
    HIGH_WATER: "High water stress, strong drought",
    PHOSPHATES_DEFICIENCY: "Phosphates deficiency",
    HIGH_PHOSPHATES: "High phosphate",
    NITRATES_DEFICIENCY: "Nitrates deficiency",
    HIGH_NITRATES: "High nitrates",
    LOW_SULFATES: "Low sulfates",
    HIGH_SALINITY: "High salinity",
    FLOODING: "Flooding, anoxia, hypoxia",
    TEMPERATURE_SUBOPTIMAL: "Temperature (suboptimal)",
    TEMPERATURE_SUPRAOPTIMAL: "Temperature (supraoptimal)",
    FIRE: "Fire",
    OBSTACLES: "Obstacles on the path"
}

export const POSSIBLE_VALUES = {
    INCREASED: "Increased",
    DECREASED: "Decreased",
    STOPPED: "Stopped",
    YES: "Yes",
    NO: "No",
    NEW_LATERAL_ROOTS: "New lateral roots develop and multpiply near the surface",
    LONGER_ROOTS: "Longer roots but lower number of long lateral rootsfirst to third order in the first 10 cm",
    NONE: "None"
}

export const ATTRIBUTES = {
    PRIMARY_ROOT: {
        LENGTH: "diameter",
        DIAMETER: "diameter"
    },
    LATERAL_ROOTS: {
        LENGTH: "length",
        NUMBER: "number",
        DENSITY: "density",
        DIAMETER: "diameter",
        ANGLE: "angle",
        DISTANCE: "distance",
        LENGTH_FROM_TIP_TO_FIRST_LATERAL_ROOTS: "length_from_tip_to_first_lateral_root"
    },
    ADDITIONAL_INFOS: {
        BRANCHING: "branching",
        ROOT_SHOOT_RATIO: "root_shoot_ratio",
        ROOT_HAIRS: "root_hairs",
        ROOT_TIPS: "root_tips",
        CHARACTERISTIC_ELEMENTS: "characteristic elements"
    }

}

export const primary_root_parameters =
    {
        label: "Primary root",
        attributes: [
            {
                type: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                label: "Length",
                question:
                    <span>How has the length of the <strong>primary root (related to depth)</strong> evolved ?</span>,
                values: [POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.DECREASED, POSSIBLE_VALUES.STOPPED]
            },
            {
                type: ATTRIBUTES.PRIMARY_ROOT.DIAMETER,
                label: "Diameter",
                question: <span>How has the <strong>diameter</strong> of the primary root evolved ?</span>,
                values: [POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.DECREASED]
            }
        ]
    }

export const lateral_roots = {
    label: "Lateral roots",
    attributes: [
        {
            type: ATTRIBUTES.LATERAL_ROOTS.LENGTH,
            label: "Length",
            question:
                <span>How has the <strong>length</strong> of the lateral roots (related to depth) evolved ?</span>,
            values: [POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.DECREASED, POSSIBLE_VALUES.STOPPED]
        },
        {
            type: ATTRIBUTES.LATERAL_ROOTS.NUMBER,
            label: "Number",
            question: <span>How has the <strong>number</strong> of lateral roots evolved ?</span>,
            values: [POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.DECREASED]
        },
        {
            type: ATTRIBUTES.LATERAL_ROOTS.DENSITY,
            label: "Density per unit of main root",
            question: <span>How has the <strong>density per unit of main root</strong> evolved ?</span>,
            values: [POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.DECREASED]
        },
        {
            type: ATTRIBUTES.LATERAL_ROOTS.DIAMETER,
            label: "Diameter",
            question: <span>How has the <strong>diameter</strong> of the lateral roots evolved ?</span>,
            values: [POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.DECREASED]
        },
        {
            type: ATTRIBUTES.LATERAL_ROOTS.ANGLE,
            label: "Angle with the primary roots",
            question: <span>How has the <strong>angle with the primary root</strong> evolved ?</span>,
            values: [POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.DECREASED]
        },
        {
            type: ATTRIBUTES.LATERAL_ROOTS.DISTANCE,
            label: "Mean distance between lateral roots",
            question: <span>How has the <strong>mean distance between lateral roots</strong> evolved ?</span>,
            values: [POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.DECREASED]
        },
        {
            type: ATTRIBUTES.LATERAL_ROOTS.LENGTH_FROM_TIP_TO_FIRST_LATERAL_ROOTS,
            label: "Length from tip to first lateral root",
            question: <span>How has the <strong>length from tip to first lateral root</strong> evolved ?</span>,
            values: [POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.DECREASED]
        }
    ]
}

export const additional_infos = {
    label: "Additional information",
    attributes: [
        {
            type: ATTRIBUTES.ADDITIONAL_INFOS.BRANCHING,
            label: "Branching",
            question: <span>How has the <strong>branching</strong> evolved ?</span>,
            values: [POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.DECREASED]
        },
        {
            type: ATTRIBUTES.ADDITIONAL_INFOS.ROOT_SHOOT_RATIO,
            label: "Root/shoot ratio",
            question: <span>How has the <strong>root/shoot ratio</strong> evolved ?</span>,
            values: [POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.DECREASED]
        },
        {
            type: ATTRIBUTES.ADDITIONAL_INFOS.ROOT_TIPS,
            label: "Root tips",
            question: <span>Has the number of <strong>root tips</strong> increased ?</span>,
            values: [POSSIBLE_VALUES.YES, POSSIBLE_VALUES.NO]
        },
        {
            type: ATTRIBUTES.ADDITIONAL_INFOS.ROOT_HAIRS,
            label: "Root hairs",
            question: <span>Have you noticed a proliferation of <strong>root hairs</strong> ?</span>,
            values: [POSSIBLE_VALUES.YES, POSSIBLE_VALUES.NO]
        },
        {
            type: ATTRIBUTES.ADDITIONAL_INFOS.CHARACTERISTIC_ELEMENTS,
            label: "Very characteristic elements",
            question: <span>Have you noticed any of theses characteristic elements ?</span>,
            values: [POSSIBLE_VALUES.NEW_LATERAL_ROOTS, POSSIBLE_VALUES.LONGER_ROOTS, POSSIBLE_VALUES.NONE],
            default: POSSIBLE_VALUES.NONE
        }
    ]
}

export const results = [
    {
        factor: ENVIRONMENTAL_FACTORS.WATER_STRESS,
        values: {
            primary_root: [
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                    value: POSSIBLE_VALUES.INCREASED
                },
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                    value: POSSIBLE_VALUES.DECREASED
                }
            ],
            lateral_roots: [
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.LENGTH,
                    value: POSSIBLE_VALUES.DECREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.NUMBER,
                    value: POSSIBLE_VALUES.DECREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.DIAMETER,
                    value: POSSIBLE_VALUES.DECREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.ANGLE,
                    value: POSSIBLE_VALUES.DECREASED
                },
            ],
            additional_infos: []
        }
    },
    {
        factor: ENVIRONMENTAL_FACTORS.HIGH_WATER,
        values: {
            primary_root: [
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                    value: POSSIBLE_VALUES.STOPPED
                }
            ]
        }
    },
    {
        factor: ENVIRONMENTAL_FACTORS.PHOSPHATES_DEFICIENCY,
        values: {
            primary_root: [
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                    value: POSSIBLE_VALUES.DECREASED
                }
            ],
            lateral_roots: [
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.LENGTH,
                    value: POSSIBLE_VALUES.INCREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.NUMBER,
                    value: POSSIBLE_VALUES.INCREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.DENSITY,
                    value: POSSIBLE_VALUES.INCREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.ANGLE,
                    value: POSSIBLE_VALUES.INCREASED
                },
            ],
            additional_infos: [
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFOS.ROOT_HAIRS,
                    value: POSSIBLE_VALUES.YES
                }
            ]
        }
    },
    {
        factor: ENVIRONMENTAL_FACTORS.HIGH_PHOSPHATES,
        values: {
            primary_root: [
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                    value: POSSIBLE_VALUES.INCREASED
                }
            ],
            lateral_roots: [
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.LENGTH,
                    value: POSSIBLE_VALUES.DECREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.DENSITY,
                    value: POSSIBLE_VALUES.DECREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.DISTANCE,
                    value: POSSIBLE_VALUES.INCREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.LENGTH_FROM_TIP_TO_FIRST_LATERAL_ROOTS,
                    value: POSSIBLE_VALUES.INCREASED
                },
            ],
            additional_infos: []
        }
    },
    {
        factor: ENVIRONMENTAL_FACTORS.NITRATES_DEFICIENCY,
        values: {
            primary_root: [
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                    value: POSSIBLE_VALUES.INCREASED
                },
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.DIAMETER,
                    value: POSSIBLE_VALUES.DECREASED
                }
            ],
            lateral_roots: [
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.LENGTH,
                    value: POSSIBLE_VALUES.STOPPED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.NUMBER,
                    value: POSSIBLE_VALUES.INCREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.DIAMETER,
                    value: POSSIBLE_VALUES.DECREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.ANGLE,
                    value: POSSIBLE_VALUES.DECREASED
                },
            ],
            additional_infos: [
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFOS.ROOT_SHOOT_RATIO,
                    value: POSSIBLE_VALUES.INCREASED
                }
            ]
        }
    },
    {
        factor: ENVIRONMENTAL_FACTORS.HIGH_NITRATES,
        values: {
            primary_root: [
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                    value: POSSIBLE_VALUES.INCREASED
                }
            ],
            lateral_roots: [
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.LENGTH,
                    value: POSSIBLE_VALUES.INCREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.DENSITY,
                    value: POSSIBLE_VALUES.STOPPED
                }
            ],
            additional_infos: [
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFOS.BRANCHING,
                    value: POSSIBLE_VALUES.INCREASED
                }
            ]
        }
    },
    {
        factor: ENVIRONMENTAL_FACTORS.LOW_SULFATES,
        values: {
            primary_root: [],
            lateral_roots: [
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.DENSITY,
                    value: POSSIBLE_VALUES.INCREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.LENGTH_FROM_TIP_TO_FIRST_LATERAL_ROOTS,
                    value: POSSIBLE_VALUES.DECREASED
                }
            ],
            additional_infos: [
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFOS.BRANCHING,
                    value: POSSIBLE_VALUES.INCREASED
                }
            ]
        }
    },
    {
        factor: ENVIRONMENTAL_FACTORS.HIGH_SALINITY,
        values: {
            primary_root: [
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                    value: POSSIBLE_VALUES.DECREASED
                }
            ],
            lateral_roots: [
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.LENGTH,
                    value: POSSIBLE_VALUES.DECREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.NUMBER,
                    value: POSSIBLE_VALUES.DECREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.DENSITY,
                    value: POSSIBLE_VALUES.STOPPED
                },
            ],
            additional_infos: []
        }
    },
    {
        factor: ENVIRONMENTAL_FACTORS.FLOODING,
        values: {
            primary_root: [
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                    value: POSSIBLE_VALUES.STOPPED
                }
            ],
            lateral_roots: [],
            additional_infos: [
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFOS.CHARACTERISTIC_ELEMENTS,
                    value: POSSIBLE_VALUES.LONGER_ROOTS
                }
            ]
        }
    },
    {
        factor: ENVIRONMENTAL_FACTORS.TEMPERATURE_SUBOPTIMAL,
        values: {
            primary_root: [
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                    value: POSSIBLE_VALUES.DECREASED
                }
            ],
            lateral_roots: [
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.DENSITY,
                    value: POSSIBLE_VALUES.DECREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.DISTANCE,
                    value: POSSIBLE_VALUES.INCREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.ANGLE,
                    value: POSSIBLE_VALUES.DECREASED
                },
            ],
            additional_infos: []
        }
    },
    {
        factor: ENVIRONMENTAL_FACTORS.TEMPERATURE_SUPRAOPTIMAL,
        values: {
            primary_root: [
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                    value: POSSIBLE_VALUES.DECREASED
                },
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.DIAMETER,
                    value: POSSIBLE_VALUES.DECREASED
                }
            ],
            lateral_roots: [
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.DENSITY,
                    value: POSSIBLE_VALUES.DECREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.DIAMETER,
                    value: POSSIBLE_VALUES.INCREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.ANGLE,
                    value: POSSIBLE_VALUES.DECREASED
                },
            ],
            additional_infos: []
        }
    },
    {
        factor: ENVIRONMENTAL_FACTORS.FIRE,
        values: {
            primary_root: [
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                    value: POSSIBLE_VALUES.INCREASED
                }
            ],
            lateral_roots: [
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.LENGTH,
                    value: POSSIBLE_VALUES.INCREASED
                }
            ],
            additional_infos: [
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFOS.ROOT_SHOOT_RATIO,
                    value: POSSIBLE_VALUES.INCREASED
                },
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFOS.ROOT_TIPS,
                    value: POSSIBLE_VALUES.INCREASED
                },
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFOS.CHARACTERISTIC_ELEMENTS,
                    value: POSSIBLE_VALUES.LONGER_ROOTS
                },
            ]
        }
    },
]