import React from "react";
import { getLeagues } from "./api/leagues";
import { Competition } from "./types/Competition";
import { getTeams } from "./api/teams";
import { Team } from "./types/Team";

export default function App() {
    const [leagues, setLeagues] = React.useState<Competition[]>();
    const [teams, setTeams] = React.useState<Team[]>();

    React.useEffect(() => {
        /* getLeagues({ country: "Argentina" }).then((res) => {
            console.log(res);
            setLeagues(res);
        }); */
        getTeams({ league: "39", season: "2023" }).then((res) => {
            console.log(res);
            setTeams(res);
        });
    }, []);

    if (!leagues) return null;

    return <div></div>;
}
