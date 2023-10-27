import { Match as Match_ } from "@/types/Match";

function Match({ match }: { match: Match_ }) {
    return (
        <div className="grid grid-cols-12 w-full place-items-center p-4 hover:bg-secondary-foreground/10">
            <p className="text-end col-span-3 text-[14px] w-full">{match.local.name}</p>
            <img className="col-span-2 max-w[34px] max-h-[34px]" src={match.local.icon} />
            <div className="col-span-2 text-[16px] flex flex-row">
                {match.local_score} - {match.visitor_score}
            </div>
            <img className="col-span-2 max-w[34px] max-h-[34px]" src={match.visitor.icon} />
            <p className="text-start col-span-3 text-[14px] w-full">{match.visitor.name}</p>
        </div>
    );
}

export default Match;
