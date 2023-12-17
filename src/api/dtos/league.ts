export type LeagueDTO = {
    league: {
        id: number;
        name: string;
        type: 'League' | 'Cup';
        logo: string;
    };
    country: {
        name: string;
        code: string;
        flag: string;
    };
};
