import { Match as Match_ } from "@/types/Match";

function Match({ match }: { match: Match_ }) {
    return (
        <div>
            {match.local.name} {match.local_score} - {match.visitor_score} {match.visitor.name}
        </div>
    );
}

export default Match;
