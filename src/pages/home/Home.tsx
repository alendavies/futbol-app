import Card from "@/components/Card";
import FeaturedMatch from "./FeaturedMatch";
import PopularLeagues from "./PopularLeagues";

function Home() {
    return (
        <div className="grid grid-cols-2 gap-4 w-full mt-7">
            <div className="w-full">
                <Card>
                    <PopularLeagues />
                </Card>
            </div>
            <div className="w-full">
                <Card>
                    <FeaturedMatch />
                </Card>
            </div>
        </div>
    );
}

export default Home;
