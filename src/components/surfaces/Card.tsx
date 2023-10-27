import { ReactNode } from "react";

function Card({ children }: { children: ReactNode }) {
    return <div className="bg-card">{children}</div>;
}

export default Card;
