import React from "react";
import { League, getLeagues } from "./api";

export default function App() {
    const [leagues, setLeagues] = React.useState<League[]>();

    React.useEffect(() => {
        getLeagues({ country: "Argentina" }).then((res) => {
            console.log(res);
            setLeagues(res);
        });
    }, []);

    if (!leagues) return null;

    return <div></div>;
}
