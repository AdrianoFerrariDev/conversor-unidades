import { createUnitSystem } from "../utils/createUnitSystem";

const speedSystem = {
    metric: { name: "metric", units: {
            quilometro_hora: {factor: (1/3.6), symbol: 'km/h', name: 'metricSystem.kilometerhour'},
            quilemetro_min: {factor: (1/0.06), symbol: 'km/min', name: 'metricSystem.kilometerminute'},
            quilometro_segundo: {factor: 1000, symbol: 'km/s', name: 'metricSystem.kilometersec'},
            metro_segundo: {factor: 1, symbol: 'm/s', name: 'metricSystem.metersec'},
            milimetro_segundo: {factor: (0.001), symbol: 'mm/s', name: 'metricSystem.millimetersec'}
        }
    },

    imperial: { name: "imperial", units: {
            milha_hora: {factor: (1609.344/3600), symbol: 'mph', name: 'imperialSystem.milehour'},
            milha_segundo :{factor: (1609.344), symbol: 'mps', name: 'imperialSystem.milesec'},
            pe_segundo: {factor: (0.3048), symbol: 'ft/s', name: 'imperialSystem.footsec'},
            polegada_segundo :{factor: (0.0254), symbol: 'in/s', name: 'imperialSystem.inchsec'}
        }
    },

    relevants: { name: "relevants", units: {
            luz: {factor: (299792458), symbol: '', name: 'relevantsUnits.lightspeed'},
            som: {factor: (343.2), symbol: '', name: 'relevantsUnits.soundspeed'}
        }

    }
};

export const { unitSystem, units } = createUnitSystem(speedSystem)