import { Button } from "@/components/ui";

function MatchFilter() {
    return (
        <div className="grid grid-cols-2 w-full place-items-center">
            <div>
                <header>Mes del calendario: octubre - noviembre · Volver a hoy</header>
                <div>
                    <Button variant={"default"} size={"m"}>
                        Hoy
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default MatchFilter;
