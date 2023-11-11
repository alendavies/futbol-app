import { axiosInstance } from '@/lib/axios';
import { LeagueDTO } from '../dtos/league';
import { League } from '@/types/League';

type GetLeaguesParams = {
    country: string;
};

export function getLeagues(params: GetLeaguesParams): Promise<League[]> {
    return axiosInstance
        .get('/leagues', {
            params: params
        })
        .then(res =>
            res.data.response.map(
                (league: LeagueDTO): League => ({
                    id: league.league.id,
                    name: league.league.name,
                    country: league.country.name,
                    logo: league.league.logo,
                    flag: league.country.flag
                })
            )
        );
}
