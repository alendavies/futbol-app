import Card from "@/components/Card";
import FeaturedMatch from "./FeaturedMatch";
import League from "./League";

function Home() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-2 gap-4 w-full">
                <div className="w-full">
                    <p className="mb-2 ml-4 font-semibold">Ligas populares de Fútbol</p>
                    <Card>
                        <League />
                    </Card>
                </div>
                <div className="w-full">
                    <Card>
                        <FeaturedMatch />
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Home;
