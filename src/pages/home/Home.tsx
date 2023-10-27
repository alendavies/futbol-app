import Card from "@/components/surfaces/Card";
import FeaturedMatch from "./FeaturedMatch";
import League from "./League";
import { competitions } from "@/data/Competition";
import CardContent from "@/components/surfaces/CardContent";

function Home() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-2 gap-4 w-full">
                <div className="w-full">
                    <p className="mb-2 ml-4 font-semibold">Ligas populares de Fútbol</p>
                    <div className="space-y-4">
                        <League league={competitions[0]} />
                        <League league={competitions[1]} />
                    </div>
                </div>
                <div className="w-full">
                    <Card>
                        <CardContent>
                            <FeaturedMatch />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Home;
