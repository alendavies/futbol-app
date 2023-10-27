import { ReactNode } from "react";

function CardContent({ children }: { children: ReactNode }) {
    return <div className="p-6">{children}</div>;
}

export default CardContent;
