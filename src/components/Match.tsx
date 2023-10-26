import { Match as Match_ } from "@/types/Match";

function Match({ match }: { match: Match_ }) {
    return (
        <div className="grid grid-cols-5 w-full place-items-center">
            <p className="text-[14px] place-self-end w-full">{match.local.name}</p>
            <img className="max-w[34px] max-h-[34px]" src={match.local.icon} />

            <div className="text-[16px] flex flex-row">
                {match.local_score} - {match.visitor_score}
            </div>
            <img className="max-w[34px] max-h-[34px]" src={match.visitor.icon} />
            <p className="text-[14px] place-self-start w-full">{match.visitor.name}</p>
        </div>
    );
}

export default Match;
