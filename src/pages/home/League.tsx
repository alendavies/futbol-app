import Match from "@/components/Match";
import { Competition } from "@/types/Competition";
import { match } from "@/data/Match";

function League({ league }: { league: Competition }) {
    const matches = match.filter((match) => match.league === league.name);
    return (
        <div className="w-full flex flex-col">
            <div className="flex space-x-2 -mt-5">
                <img className="max-w[24px] max-h-[24px] mt-1.5" src={league.icon} />
                <p className="text-[13px] ">{league.name}</p>
            </div>
            <p className="text-neutral-400 text-[13px] pl-8 -mt-3">{league.country}</p>
            <div className="m-8">{matches && matches.map((match) => <Match match={match} />)}</div>
        </div>
    );
}

export default League;
