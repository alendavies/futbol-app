import Match from "@/components/Match";
import { Competition } from "@/types/League";
import { match } from "@/data/Match";
import Card from "@/components/surfaces/Card";

function League({ league }: { league: Competition }) {
    const matches = match.filter((match) => match.league === league.name);

    return (
        <div className="w-full flex flex-col space-y-0.5">
            <Card>
                <div className="flex items-center space-x-2 pl-2 py-1">
                    <img className="max-w[24px] max-h-[24px]" src={league.icon} />
                    <div className="leading-4">
                        <p className="text-[13px]">{league.name}</p>
                        <p className="text-secondary-foreground text-[13px]">{league.country}</p>
                    </div>
                </div>
            </Card>
            {matches &&
                matches.map((match) => (
                    <Card>
                        <Match match={match} />
                    </Card>
                ))}
        </div>
    );
}

export default League;
