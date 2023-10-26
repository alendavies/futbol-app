import Match from "@/components/Match";
import { Competition } from "@/types/Competition";
import { match } from "@/data/Match";

function League({ league }: { league: Competition }) {
    const matches = match.filter((match) => match.league === league.name);
    return (
        <div className="flex flex-col w-full">
            <p>{league.name}</p>
            <p className="text-neutral-400">{league.country}</p>
            <div className="flex flex-col items-center w-full">
                {matches && matches.map((match) => <Match match={match} />)}
            </div>
        </div>
    );
}

export default League;
