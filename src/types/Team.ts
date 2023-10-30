/* const Equipos = [
    "Arsenal de Sarandí",
    "Colón",
    "Atlético Tucumán",
    "Talleres",
    "Belgrano",
    "Central Córdoba",
    "River Plate",
    "Independiente",
    "Feyenoord",
    "Lazio",
    "FC Barcelona",
    "Shakhtar",
    "RB Leipzig",
    "Estrella Roja",
    "Celtic",
    "Atlético de Madrid",
    "Manchester City",
    "Young Boys",
    "PSG",
    "AC Milan",
    "Porto",
    "Antwerp",
    "Dortmund",
    "Newcastle"
] as const; */

/* export type Equipo = (typeof Equipos)[number]; */

export type Team = {
    id: number;
    name: string;
    logo: string;
};
