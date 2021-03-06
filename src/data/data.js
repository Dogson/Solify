import React from "react";
import water_stress from "../assets/water_stress.png";
import phosphate_def from "../assets/phosphate_def.png";
import high_phosphate from "../assets/high_phosphate.png";
import nitrate_def from "../assets/nitrate_def.png";
import high_nitrate from "../assets/high_nitrate.png";
import high_salinity from "../assets/high_salinity.png";
import flooding from "../assets/flooding.png";
import temperature_sub from "../assets/temperature_sub.png";
import temperature_supra from "../assets/temperature_supra.png";
import fire from "../assets/fire.png";

import primary_root_img from "../assets/primary_root.png";
import lateral_roots_img from "../assets/lateral_roots.png";
import additional_infos_img from "../assets/additional_infos.png";

export const ENVIRONMENTAL_FACTORS = {
    WATER_STRESS: {
        name: "Water stress, drought",
        description: "By gravity water accumulates in deeper soil. During drought the topsoil is dry and the plant invests in the elongation of the primary root, leading to thinner roots, less numerous and shorter lateral roots which bend downard to seek for water.",
        image: water_stress
    },
    PHOSPHATES_DEFICIENCY: {
        name: "Phosphates deficiency",
        description: "Phosphore is a important nutrient for plants, and is found mainly in the form of phosphates. Phosphates are low mobile nutrients and thus accumulate in the topsoil because of plant cycling. Therefore in limilting P conditions the plant will invest more in developping a shallow root system. The primary root will be shorter, the lateral roots longer and denser in the topsoil, with proliferation of root hairs to increase the surface area of exchange between the plant and the soil where P is the most concentrated.",
        image: phosphate_def
    },
    HIGH_PHOSPHATES: {
        name: "High phosphate",
        description: "An excess of P supply leads to a metal nutrient deficiency, it active an ethylen signal which inhibe cell proliferation and stop primary root growth",
        image: high_phosphate
    },
    NITRATES_DEFICIENCY: {
        name: "Nitrates deficiency",
        description: "Nitrogen is used by plants to produce chlorophyle a which is needed for the photosynthesis, and is often found in the form of nitrates. On the opposite to phosphates, nitrates are very mobile nutrients, they leach and accumulate in deeper soil horizon due to vertical water flow. In conditions of limiting N, the plant invests in growing deeper, with a longer primary root, less numerous, longer and thinner lateral roots which are bending downards. However in patches of high nitrate concentrations lateral roots are more developped and much denser to exploit N ressources. But it is important to not that a too important quantity of nitrogen has is toxic or the plant. It will produce a \"burning effect\" : the root are more dark. It can occurs when there is an hydrophobic layer : the water is blocked and the nitrogen which is soluble is more and more concentrated",
        image: nitrate_def
    },
    NITRATES_DEFICIENCY_PATCH: {
        name: "Nitrates deficiency but patch",
        description: "Nitrogen is used by plants to produce chlorophyle a which is needed for the photosynthesis, and is often found in the form of nitrates. On the opposite to phosphates, nitrates are very mobile nutrients, they leach and accumulate in deeper soil horizon due to vertical water flow. In conditions of limiting N, the plant invests in growing deeper, with a longer primary root, less numerous, longer and thinner lateral roots which are bending downards. However in patches of high nitrate concentrations lateral roots are more developped and much denser to exploit N ressources. But it is important to not that a too important quantity of nitrogen has is toxic or the plant. It will produce a \"burning effect\" : the root are more dark. It can occurs when there is an hydrophobic layer : the water is blocked and the nitrogen which is soluble is more and more concentrated",
        image: nitrate_def
    },
    HIGH_NITRATES: {
        name: "High nitrates",
        description: "Nitrogen is used by plants to produce chlorophyle a which is needed for the photosynthesis, and is often found in the form of nitrates. On the opposite to phosphates, nitrates are very mobile nutrients, they leach and accumulate in deeper soil horizon due to vertical water flow. In conditions of limiting N, the plant invests in growing deeper, with a longer primary root, less numerous, longer and thinner lateral roots which are bending downards. However in patches of high nitrate concentrations lateral roots are more developped and much denser to exploit N ressources. But it is important to not that a too important quantity of nitrogen has is toxic or the plant. It will produce a \"burning effect\" : the root are more dark. It can occurs when there is an hydrophobic layer : the water is blocked and the nitrogen which is soluble is more and more concentrated",
        image: high_nitrate
    },
    HIGH_SALINITY: {
        name: "High salinity",
        description: "In an environment with high salinity, the growth roots will be inhibited. All the roots will be shorter  but with a same density of laterals and the number of laterals is lower because the primary root is shorter.  The roots will have the same behavior that in a drought environment, it will be the same effect as an osmotic stress. Except for the main root it will be inhibited for salinity but promoted for drought.",
        image: high_salinity
    },
    FLOODING: {
        name: "Flooding, anoxia, hypoxia",
        description: "The response of the root for a floodind/anoxia/hypoxia environment will be an instantaneous arrest of roots growthing. Themain  root will decrease but new lateral roots will develop and multiply near the surface. Then a lot of new roots will growth closed to the surface (superficial rooting patterns) and there is a formation of an aerenchymatic tissu which is a pathway for oxygen in the root.",
        image: flooding
    },
    TEMPERATURE_SUBOPTIMAL: {
        name: "Temperature (suboptimal)",
        description: "Root-zone temperature (RTZ) is usually lower than atmospheric temperature and is less sensitive to rapid fluctuations. Plants have an optimal RTZ at which their root growth is the greatest. Far from the optimal temperature, root growth is reduced but it also impacts the root architecture. At lower temperatures (suboptimal), the primary root will be shorter, and the lateral roots will be less dense, with reduced branching, and will bend downward. The root/shoot ratio (i.e. biomass of roots compared to biomass of shoot) usually increase if the limit to the root growth is not reached. The behavior of the roots is related to nutrient limitation, for optimal performances the plant must increase the lateral root length for a higher nutrient acquisition.",
        image: temperature_sub
    },
    TEMPERATURE_SUPRAOPTIMAL: {
        name: "Temperature (supraoptimal)",
        description: "Root-zone temperature (RTZ) is usually lower than atmospheric temperature and is less sensitive to rapid fluctuations. Plants have an optimal RTZ at which their root growth is the greatest. Far from the optimal temperature, root growth is reduced but it also impacts the root architecture. At higher temperatures (supraoptimal), the primary root will be shorter, and the lateral roots will be less dense and will bend downward. Moreover the branching can increase and roots diameter may increase. The root/shoot ratio (i.e. biomass of roots compared to biomass of shoot) usually increase if the limit to the root growth is not reached. High temperatures are often linked to water stress, so the responses of the plant might overlap.",
        image: temperature_supra
    },
    FIRE: {
        name: "Fire",
        description: "",
        image: fire
    },
    OBSTACLES: {
        name: "Obstacles on the path",
        description: "In the soil there is a lot of obstacles, for exemple pebbles, rocks, or impermeable lithology that can obliged the root to bypass the obstacle. The root will adapt to the shape of the obstacle. The root architectture will also depend on the hardness and porosity of the soil, more generally on the soil structure."
    },
}

export const POSSIBLE_VALUES = {
    INCREASED: "Increased",
    DECREASED: "Decreased",
    STOPPED: "Unchanged",
    YES: "Yes",
    NO: "No",
    NEW_LATERAL_ROOTS: "New lateral roots develop and multiply near the surface",
    LONGER_ROOTS: <span>0-10 cm : lower number of lateral roots first to third order in the first 10 cm <br/> after 10 : higher number of lateral roots first to third order and especially for 3rd order</span>,
    NONE: "None",
    DISCOLORATION: "Root are darker locally where the nitrate is too high (toxicity)",
}

export const ATTRIBUTES = {
    PRIMARY_ROOT: {
        LENGTH: "length",
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
    ADDITIONAL_INFO: {
        BRANCHING: "branching",
        ROOT_SHOOT_RATIO: "root_shoot_ratio",
        ROOT_HAIRS: "root_hairs",
        ROOT_TIPS: "root_tips",
        CHARACTERISTIC_ELEMENTS: "characteristic elements"
    }

}

export const PRIMARY_ROOT_ATTR =
    {
        id: "primary_root",
        label: "Primary root",
        description: <span>Please answer these questions about the <strong>primary root</strong>.</span>,
        image: primary_root_img,
        attributes: [
            {
                type: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                label: "Length",
                question:
                    <span>How has the length of the <strong>primary root (related to depth)</strong> evolved ?</span>,
                values: [POSSIBLE_VALUES.DECREASED, POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.STOPPED]
            },
            {
                type: ATTRIBUTES.PRIMARY_ROOT.DIAMETER,
                label: "Diameter",
                question: <span>How has the <strong>diameter</strong> of the primary root evolved ?</span>,
                values: [POSSIBLE_VALUES.DECREASED, POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.STOPPED]
            }
        ]
    }

export const LATERAL_ROOTS_ATTR = {
    id: "lateral_roots",
    label: "Lateral roots",
    image: lateral_roots_img,
    description: <span>Please answer these questions about the <strong>lateral roots</strong>.</span>,
    attributes: [
        {
            type: ATTRIBUTES.LATERAL_ROOTS.LENGTH,
            label: "Length",
            question:
                <span>How has the <strong>length</strong> of the lateral roots (related to depth) evolved ?</span>,
            values: [POSSIBLE_VALUES.DECREASED, POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.STOPPED]
        },
        {
            type: ATTRIBUTES.LATERAL_ROOTS.NUMBER,
            label: "Number",
            question: <span>How has the <strong>number</strong> of lateral roots evolved ?</span>,
            values: [POSSIBLE_VALUES.DECREASED, POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.STOPPED]
        },
        {
            type: ATTRIBUTES.LATERAL_ROOTS.DENSITY,
            label: "Density of lateral roots per unit of main root",
            question:
                <span>How has the <strong>density of lateral roots per unit of main root</strong> evolved ?</span>,
            values: [POSSIBLE_VALUES.DECREASED, POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.STOPPED]
        },
        {
            type: ATTRIBUTES.LATERAL_ROOTS.DIAMETER,
            label: "Diameter",
            question: <span>How has the <strong>diameter</strong> of the lateral roots evolved ?</span>,
            values: [POSSIBLE_VALUES.DECREASED, POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.STOPPED]
        },
        {
            type: ATTRIBUTES.LATERAL_ROOTS.ANGLE,
            label: "Angle with the primary roots",
            question: <span>How has the <strong>angle with the primary root</strong> evolved ?</span>,
            values: [POSSIBLE_VALUES.DECREASED, POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.STOPPED]
        },
        {
            type: ATTRIBUTES.LATERAL_ROOTS.LENGTH_FROM_TIP_TO_FIRST_LATERAL_ROOTS,
            label: "Length from tip to first lateral root",
            question: <span>How has the <strong>length from tip to first lateral root</strong> evolved ?</span>,
            values: [POSSIBLE_VALUES.DECREASED, POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.STOPPED]
        }
    ]
}

export const ADDITIONAL_INFO_ATTR = {
    id: "additional_info",
    label: "Additional information",
    image: additional_infos_img,
    description: <span>Please complete these additional pieces of information.</span>,
    attributes: [
        {
            type: ATTRIBUTES.ADDITIONAL_INFO.BRANCHING,
            label: "Branching",
            question: <span>How has the <strong>branching</strong> evolved ?</span>,
            values: [POSSIBLE_VALUES.DECREASED, POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.STOPPED]
        },
        {
            type: ATTRIBUTES.ADDITIONAL_INFO.ROOT_SHOOT_RATIO,
            label: "Root/shoot ratio",
            question: <span>How has the <strong>root/shoot ratio</strong> evolved ?</span>,
            values: [POSSIBLE_VALUES.DECREASED, POSSIBLE_VALUES.INCREASED, POSSIBLE_VALUES.STOPPED]
        },
        {
            type: ATTRIBUTES.ADDITIONAL_INFO.ROOT_TIPS,
            label: "Root tips",
            question: <span>Has the number of <strong>root tips</strong> increased ?</span>,
            values: [POSSIBLE_VALUES.NO, POSSIBLE_VALUES.YES]
        },
        {
            type: ATTRIBUTES.ADDITIONAL_INFO.ROOT_HAIRS,
            label: "Root hairs",
            question: <span>Have you noticed a proliferation of <strong>root hairs</strong> ?</span>,
            values: [POSSIBLE_VALUES.NO, POSSIBLE_VALUES.YES]
        },
        {
            type: ATTRIBUTES.ADDITIONAL_INFO.CHARACTERISTIC_ELEMENTS,
            label: "Very characteristic elements",
            question: <span>Have you noticed any of theses characteristic elements ?</span>,
            values: [POSSIBLE_VALUES.NEW_LATERAL_ROOTS, POSSIBLE_VALUES.LONGER_ROOTS, POSSIBLE_VALUES.DISCOLORATION, POSSIBLE_VALUES.NONE],
            default: POSSIBLE_VALUES.NONE
        }
    ]
}

export const STRESS_RESULTS = [
    {
        factor: ENVIRONMENTAL_FACTORS.WATER_STRESS,
        values: {
            primary_root: [
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                    value: POSSIBLE_VALUES.INCREASED,
                    important: true
                },
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                    value: POSSIBLE_VALUES.DECREASED
                }
            ],
            lateral_roots: [
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.LENGTH,
                    value: POSSIBLE_VALUES.DECREASED,
                    important: true
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.NUMBER,
                    value: POSSIBLE_VALUES.DECREASED,
                    important: true
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
            additional_info: []
        }
    },
    {
        factor: ENVIRONMENTAL_FACTORS.PHOSPHATES_DEFICIENCY,
        values: {
            primary_root: [
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                    value: POSSIBLE_VALUES.DECREASED,
                    important: true
                }
            ],
            lateral_roots: [
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.LENGTH,
                    value: POSSIBLE_VALUES.INCREASED,
                    important: true
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.NUMBER,
                    value: POSSIBLE_VALUES.INCREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.DENSITY,
                    value: POSSIBLE_VALUES.INCREASED,
                    important: true
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.ANGLE,
                    value: POSSIBLE_VALUES.INCREASED,
                    important: true
                },
            ],
            additional_info: [
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFO.ROOT_HAIRS,
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
                    value: POSSIBLE_VALUES.DECREASED,
                    important: true
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
                    attribute: ATTRIBUTES.LATERAL_ROOTS.LENGTH_FROM_TIP_TO_FIRST_LATERAL_ROOTS,
                    value: POSSIBLE_VALUES.INCREASED
                },
            ],
            additional_info: []
        }
    },
    {
        factor: ENVIRONMENTAL_FACTORS.NITRATES_DEFICIENCY,
        values: {
            primary_root: [
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                    value: POSSIBLE_VALUES.INCREASED,
                    important: true
                },
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.DIAMETER,
                    value: POSSIBLE_VALUES.DECREASED
                }
            ],
            lateral_roots: [
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.LENGTH,
                    value: POSSIBLE_VALUES.INCREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.DENSITY,
                    value: POSSIBLE_VALUES.DECREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.DIAMETER,
                    value: POSSIBLE_VALUES.DECREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.ANGLE,
                    value: POSSIBLE_VALUES.DECREASED,
                    important: true
                },
            ],
            additional_info: [
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFO.ROOT_SHOOT_RATIO,
                    value: POSSIBLE_VALUES.INCREASED
                }
            ]
        }
    },
    {
        factor: ENVIRONMENTAL_FACTORS.NITRATES_DEFICIENCY_PATCH,
        values: {
            primary_root: [
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                    value: POSSIBLE_VALUES.INCREASED,
                    important: true
                },
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.DIAMETER,
                    value: POSSIBLE_VALUES.DECREASED
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
                    attribute: ATTRIBUTES.LATERAL_ROOTS.DIAMETER,
                    value: POSSIBLE_VALUES.DECREASED
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.ANGLE,
                    value: POSSIBLE_VALUES.DECREASED,
                    important: true
                },
            ],
            additional_info: [
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFO.ROOT_SHOOT_RATIO,
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
                    value: POSSIBLE_VALUES.DECREASED,
                    important: true
                }
            ],
            lateral_roots: [
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.LENGTH,
                    value: POSSIBLE_VALUES.DECREASED,
                    important: true
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.DENSITY,
                    value: POSSIBLE_VALUES.STOPPED
                }
            ],
            additional_info: [
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFO.CHARACTERISTIC_ELEMENTS,
                    value: POSSIBLE_VALUES.DISCOLORATION
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
                    value: POSSIBLE_VALUES.DECREASED,
                    important: true
                }
            ],
            lateral_roots: [
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.LENGTH,
                    value: POSSIBLE_VALUES.DECREASED,
                    important: true
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
            additional_info: []
        }
    },
    {
        factor: ENVIRONMENTAL_FACTORS.FLOODING,
        values: {
            primary_root: [
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                    value: POSSIBLE_VALUES.DECREASED,
                    important: true
                }
            ],
            lateral_roots: [
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.NUMBER,
                    value: POSSIBLE_VALUES.DECREASED,
                }
            ],
            additional_info: [
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFO.CHARACTERISTIC_ELEMENTS,
                    value: POSSIBLE_VALUES.NEW_LATERAL_ROOTS,
                    important: true
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
                    value: POSSIBLE_VALUES.DECREASED,
                    important: true
                }
            ],
            lateral_roots: [
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.LENGTH,
                    value: POSSIBLE_VALUES.STOPPED,
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.NUMBER,
                    value: POSSIBLE_VALUES.DECREASED,
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.DENSITY,
                    value: POSSIBLE_VALUES.DECREASED,
                    important: true
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.ANGLE,
                    value: POSSIBLE_VALUES.DECREASED
                },
            ],
            additional_info: [
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFO.BRANCHING,
                    value: POSSIBLE_VALUES.DECREASED
                },
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFO.ROOT_SHOOT_RATIO,
                    value: POSSIBLE_VALUES.INCREASED
                },
            ]
        }
    },
    {
        factor: ENVIRONMENTAL_FACTORS.TEMPERATURE_SUPRAOPTIMAL,
        values: {
            primary_root: [
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.LENGTH,
                    value: POSSIBLE_VALUES.DECREASED,
                    important: true
                },
                {
                    attribute: ATTRIBUTES.PRIMARY_ROOT.DIAMETER,
                    value: POSSIBLE_VALUES.INCREASED
                }
            ],
            lateral_roots: [
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.LENGTH,
                    value: POSSIBLE_VALUES.STOPPED,
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.NUMBER,
                    value: POSSIBLE_VALUES.DECREASED,
                },
                {
                    attribute: ATTRIBUTES.LATERAL_ROOTS.DENSITY,
                    value: POSSIBLE_VALUES.DECREASED,
                    important: true
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
            additional_info: [
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFO.BRANCHING,
                    value: POSSIBLE_VALUES.INCREASED
                },
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFO.ROOT_SHOOT_RATIO,
                    value: POSSIBLE_VALUES.INCREASED
                },
            ]
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
            additional_info: [
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFO.BRANCHING,
                    value: POSSIBLE_VALUES.INCREASED
                },
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFO.ROOT_SHOOT_RATIO,
                    value: POSSIBLE_VALUES.INCREASED
                },
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFO.ROOT_TIPS,
                    value: POSSIBLE_VALUES.INCREASED
                },
                {
                    attribute: ATTRIBUTES.ADDITIONAL_INFO.CHARACTERISTIC_ELEMENTS,
                    value: POSSIBLE_VALUES.LONGER_ROOTS,
                    important: true
                },
            ]
        }
    },
]