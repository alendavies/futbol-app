import { axiosInstance } from "@/lib/axios";
import { Competition } from "@/types/Competition";

export type LeagueDTO = {
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

type GetLeaguesParams = {
    country: string;
};

export function getLeagues(params: GetLeaguesParams): Promise<Competition[]> {
    return axiosInstance
        .get("/leagues", {
            params: params
        })
        .then((res) =>
            res.data.response.map(
                (league: LeagueDTO): Competition => ({
                    name: league.league.name,
                    country: league.country.name,
                    icon: league.league.logo
                })
            )
        );
}
