import React from 'react';
import { getLeagues } from './api/leagues';
import { League } from './types/League';
import { getTeams } from './api/teams';
import { Team } from './types/Team';

export default function Prueba() {
    const [leagues, setLeagues] = React.useState<League[]>();
    const [teams, setTeams] = React.useState<Team[]>();

    React.useEffect(() => {
        /* getLeagues({ country: "Argentina" })
            .then((res) => {
                console.log(res);
                setLeagues(res);
            })
            .catch((error) => {
                console.log("Límite de requests a la api", error.name, error.message, error.code);
            }); */
        getTeams({ league: '39', season: '2023' })
            .then(res => {
                console.log(res);
                setTeams(res);
            })
            .catch(error => {
                console.log('Límite de requests a la api', error.name, error.message, error.code);
            });
    }, []);
    /* 
    if (!leagues) return null;
    if (!teams) return null; */

    return <div></div>;
}
