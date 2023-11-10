import { Button } from "@/components/ui";

function MatchFilter() {
    return (
        <div className="grid grid-cols-2 w-full place-items-center py-10 border-secondary border-b-[1px]">
            <div className="space-y-5">
                <header className="text-[.875rem] flex flex-row font-bold">
                    <p>Mes del calendario:</p> <p>Octubre </p> - <p>Noviembre </p> ·
                    <a className="cursor-pointer font-normal text-primary"> Volver a hoy</a>
                </header>
                <div className="space-x-4">
                    <Button variant={"default"} size={"m"}>
                        Hoy
                    </Button>
                    <Button variant={"default"} size={"m"}>
                        Hoy
                    </Button>
                    <Button variant={"default"} size={"m"}>
                        Hoy
                    </Button>
                    <Button variant={"default"} size={"m"}>
                        Hoy
                    </Button>
                    <Button variant={"default"} size={"m"}>
                        Hoy
                    </Button>
                    <Button variant={"default"} size={"m"}>
                        Hoy
                    </Button>
                    <Button variant={"default"} size={"m"}>
                        Hoy
                    </Button>
                </div>
            </div>
            <div className="space-y-5 border-l-[1.5px] border-secondary pl-10">
                <p className="font-bold text-[.875rem]">Filtrar por tipo de partido</p>
                <div className="space-x-4">
                    <Button variant={"default"} size={"lg"}>
                        TODOS
                    </Button>
                    <Button variant={"default"} size={"lg"}>
                        EN DIRECTO
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default MatchFilter;
