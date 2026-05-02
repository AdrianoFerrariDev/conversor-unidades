import { createUnitSystem } from "../utils/createUnitSystem";

const volumeSystem = {
    metric: { name: "Métrico" , units: {
            quilometroCub: {factor: 1000000000, symbol: 'km³', name: 'metricSystem.cbkilometer'},
            metroCub: {factor: 1, symbol: 'm³', name: 'metricSystem.cbmeter'},
            decimetroCub: { factor: 0.001, symbol: 'dm³', name: 'metricSystem.cbdecimeter'},
            centimetroCub: {factor: 0.000001, symbol: 'cm³', name: 'metricSystem.cbcentimeter'},
            milimetroCub: {factor: 0.000000001, symbol: 'mm³', name: 'metricSystem.cbmillimeter'},
            litro: {factor: 0.001, symbol: 'L', name: 'metricSystem.liter'},
            decilitro: {factor: 0.0001, symbol: 'dL', name: 'metricSystem.deciliter'},
            centilitro: {factor: 0.00001, symbol: 'cL', name: 'metricSystem.centiliter'},
            mililitro: {factor: 0.000001, symbol: 'mL', name: 'metricSystem.milliliter'},
        }
    },
    us_solid: { name: "Americano - Sólidos", units: {
            usmilhaCub: {factor: 4168181825.44058, symbol: 'mi³', name: 'us_solidSystem.cbmile'},
            usacre_pe: {factor: 33.30400961378304, symbol: '', name: 'us_solidSystem.acrefoot'},
            usjardaCub: {factor: 0.764554857984, symbol: 'yd³', name: 'us_solidSystem.cbyard'},
            uspeCub: {factor: 0.028316846592, symbol: 'ft³', name: 'us_solidSystem.cbfoot'},
            uspolegadaCub: {factor: 0.000016387064, symbol: 'in³', name: 'us_solidSystem.cbinch'},
        }
    },
    us_arid: {name: "Americano - Árido", units: {
            usabushel: {factor: 0.03523907016688, symbol: 'bu', name: 'us_aridSystem.bushel'},
            usapeck: {factor: 0.00880976754172, symbol: 'pk', name: 'us_aridSystem.peck'},
            usagalao: {factor: 0.00440488377086, symbol: 'gal', name: 'us_aridSystem.gallon'},
            usaquarto: {factor: 0.001101220942715, symbol: 'qt', name: 'us_aridSystem.quart'},
            usapint: {factor: 0.0005506104713575, symbol: 'pt', name: 'us_aridSystem.pint'},
        }   
    },
    us_liquid: {name: "Americano - Líquido", units: {
            uslbarril: {factor: 0.15898722, symbol: '', name: 'us_liquidSystem.barrel'},
            uslgalao: {factor: 0.00378541, symbol: 'gal', name: 'us_liquidSystem.gallon'},
            uslquarto: {factor: 0.0009463525, symbol: 'qt', name: 'us_liquidSystem.quart'},
            uslpint: {factor: 0.00047317625, symbol: 'pt', name: 'us_liquidSystem.pint'},
            uslgill: {factor: 0.0001182940625, symbol: '', name: 'us_liquidSystem.gill'},
            uslonca_liquida: {factor: 0.000029573515625, symbol: 'fl oz', name: 'us_liquidSystem.fluidounce'},
            usldracma_liquido: {factor: 0.000003696689453125, symbol: 'fl dr', name: 'us_liquidSystem.fluiddram'},
            uslminim: {factor: 0.0000000616114908854167, symbol: '', name: 'us_liquidSystem.minim'},
        }
    },
    british_solid: {name: "Imperial/Britânico - Sólidos", units: {
            brtmilhaCub: {factor: 4168181825.44058, symbol: 'mi³', name: 'imperial_solidSystem.cbmile'},
            brtacre_pe: {factor: 33.30400961378304, symbol: '', name: 'imperial_solidSystem.acrefoot'},
            brtjardaCub: {factor: 0.764554857984, symbol: 'yd³', name: 'imperial_solidSystem.cbyard'},
            brtpeCub: {factor: 0.028316846592, symbol: 'ft³', name: 'imperial_solidSystem.cbfoot'},
            brtpolegadaCub: {factor: 0.000016387064, symbol: 'in³', name: 'imperial_solidSystem.cbinch'},
        }
    },
    british_arid: {name: "Imperial/Britânico- Árido", units: {
            brtabushel: {factor: 0.04232035869184, symbol: 'bu', name: 'imperial_aridSystem.bushel'},
            brtapeck: {factor: 0.01058008967296, symbol: 'pk', name: 'imperial_aridSystem.peck'},
            brtaquarto: {factor: 0.00132251120912, symbol: 'qt', name: 'imperial_aridSystem.quart'},
        }
    },
    britsh_liquid: {name: "Imperial/Britânico - Líquido", units: {
            brtlbarril: {factor: 0.15911315, symbol: '', name: 'imperial_liquidSystem.barrel'},
            brtlgalao: {factor: 0.00454609, symbol: 'gal', name: 'imperial_liquidSystem.gallon'},
            brtlquarto: {factor: 0.0011365225, symbol: 'qt', name: 'imperial_liquidSystem.quart'},
            brtlpint: {factor: 0.00056826125, symbol: 'pt', name: 'imperial_liquidSystem.pint'},
            brtlgill: {factor: 0.0001420653125, symbol: '', name: 'imperial_liquidSystem.gill'},
            brtlonca_liquida: {factor: 0.0000284130625, symbol: 'fl oz', name: 'imperial_liquidSystem.fluidounce'},
            brtldracma_liquido: {factor: 0.0000035516328125, symbol: 'fl dr', name: 'imperial_liquidSystem.fluiddram'},
            brtlescropulo_fluido: {factor: 0.00000118387760416667, symbol: '', name: 'imperial_liquidSystem.fluidescropule'},
            brtlminim: {factor: 0.0000000591938802083333, symbol: '', name: 'imperial_liquidSystem.minim'},
        }
    }
};

export const { unitSystem, units } = createUnitSystem(volumeSystem)