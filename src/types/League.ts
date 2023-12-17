/* const Ligas = ["Copa de la Liga Profesional", "Champions League"] as const;

export type Liga = (typeof Ligas)[number]; */

export type League = {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
};
