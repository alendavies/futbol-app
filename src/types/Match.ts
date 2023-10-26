import { Liga } from "./Competition";
import { Team } from "./Team";

export type Match = {
    local: Team;
    visitor: Team;
    local_score: number;
    visitor_score: number;
    league: Liga;
    id: number;
};
