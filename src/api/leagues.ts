import { axiosInstance } from "@/lib/axios";
import { Competition } from "@/types/League";

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
                    id: league.league.id,
                    name: league.league.name,
                    country: league.country.name,
                    logo: league.league.logo,
                    flag: league.country.flag
                })
            )
        );
}
