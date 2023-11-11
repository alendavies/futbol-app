import { axiosInstance } from '@/lib/axios';
import { Match } from '@/types/Match';

type GetFixtureParams = {
    team: string;
    league: string;
    season: string;
    date: string; // "YYYY-MM-DD"
};

export function getFixture(params: GetFixtureParams): Promise<Match[]> {
    return axiosInstance
        .get('/fixtures', {
            params: params
        })
        .then(res =>
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
