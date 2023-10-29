import { axiosInstance } from "@/lib/axios";

export type League = {
    league: {
        id: number;
        name: string;
        type: "League" | "Cup";
        logo: string;
    };
    country: {
        name: string;
        code: string;
        flag: string;
    };
};

export function getLeagues({ country }: { country: string }): Promise<League[]> {
    return axiosInstance.get("/leagues").then((res) => res.data.response);
}
