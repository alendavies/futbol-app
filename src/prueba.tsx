import React from "react";
import { getLeagues } from "./api";
import { Competition } from "./types/Competition";

export default function App() {
    const [leagues, setLeagues] = React.useState<Competition[]>();

    React.useEffect(() => {
        getLeagues({ country: "Argentina" }).then((res) => {
            console.log(res);
            setLeagues(res);
        });
    }, []);

    if (!leagues) return null;

    return <div></div>;
}
