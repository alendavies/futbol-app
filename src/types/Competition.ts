import { Equipo } from "./Team";

const Ligas = ["Copa de la Liga Profesional", "Champions League"] as const;

export type Liga = (typeof Ligas)[number];

export type Competition = {
    name: string;
    country: string;
    icon: string;
    teams: Equipo[];
};
