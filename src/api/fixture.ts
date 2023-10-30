import { axiosInstance } from "@/lib/axios";
import { Match } from "@/types/Match";

export type FixtureDTO = {
    fixture: {
        id: number;
        referee: string;
        timezone: string;
        date: string;
        timestamp: number;
    };
    league: {
        id: number;
        name: string;
        country: string;
        logo: string;
        flag: string;
        season: number;
        round: string;
    };
    teams: {
        home: {
            id: number;
            name: string;
            logo: string;
        };
        away: {
            id: number;
            name: string;
            logo: string;
        };
    };
    goals: {
        home: number;
        away: number;
    };
    score: {
        halftime: {
            home: number;
            away: number;
        };
        fulltime: {
            home: number;
            away: number;
        };
        extratime: {
            home: number;
            away: number;
        };
        penalty: {
            home: number;
            away: number;
        };
    };
};

type GetFixtureParams = {
    team: string;
    league: string;
    season: string;
    date: string; // "YYYY-MM-DD"
};

export function getFixture(params: GetFixtureParams): Promise<Match[]> {
    return axiosInstance
        .get("/fixtures", {
            params: params
        })
        .then((res) =>
            res.data.response.map(
                (fixture: FixtureDTO): Match => ({
                    local: fixture.teams.home,
                    visitor: fixture.teams.away,
                    local_score: fixture.goals.home,
                    visitor_score: fixture.goals.away,
                    league: fixture.league
                })
            )
        );
}
