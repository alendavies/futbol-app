import { ReactNode } from "react";

function Card({ children }: { children: ReactNode }) {
    return <div className="bg-card p-6">{children}</div>;
}

export default Card;
