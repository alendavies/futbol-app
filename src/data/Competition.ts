import { Competition } from "@/types/League";

export const competitions: Competition[] = [
    {
        name: "Copa de la Liga Profesional",
        country: "Argentina",
        icon: "images/argentina.png",
        teams: [
            "Arsenal de Sarandí",
            "Colón",
            "Atlético Tucumán",
            "Talleres",
            "Belgrano",
            "Central Córdoba",
            "River Plate",
            "Independiente"
        ]
    },
    {
        name: "Champions League",
        country: "Europa",
        icon: "images/champions.png",
        teams: [
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
        ]
    }
];
