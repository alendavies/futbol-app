import { axiosInstance } from "@/lib/axios";
import { Team } from "@/types/Team";

export type TeamsDTO = {
    team: {
        id: number;
        name: string;
        country: string;
        founded: number;
        national: boolean;
        logo: string;
    };
    venue: {
        id: number;
        name: string;
        address: string;
        city: string;
        capacity: number;
        surface: string;
        image: string;
    };
};

type GetTeamsParams = {
    league?: string;
    season: string;
};

export function getTeams(params: GetTeamsParams): Promise<Team[]> {
    return axiosInstance
        .get("/teams", {
            params: params
        })
        .then((res) =>
            res.data.response.map(
                (teams: TeamsDTO): Team => ({
                    name: teams.team.name,
                    icon: teams.team.logo
                })
            )
        );
}
