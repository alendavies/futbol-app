export type FixtureDTO = {
    fixture: {
        id: number;
        referee: string;
        timezone: string;
        date: string;
        timestamp: number;
    };
    league: {
        id: number;
        name: string;
        country: string;
        logo: string;
        flag: string;
        season: number;
        round: string;
    };
    teams: {
        home: {
            id: number;
            name: string;
            logo: string;
        };
        away: {
            id: number;
            name: string;
            logo: string;
        };
    };
    goals: {
        home: number;
        away: number;
    };
    score: {
        halftime: {
            home: number;
            away: number;
        };
        fulltime: {
            home: number;
            away: number;
        };
        extratime: {
            home: number;
            away: number;
        };
        penalty: {
            home: number;
            away: number;
        };
    };
};
