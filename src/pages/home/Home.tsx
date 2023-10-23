import FeaturedMatch from "./FeaturedMatch";

function Home() {
    return (
        <div className="grid grid-cols-2 gap-4 w-full">
            <div className="w-full">hola</div>
            <div className="w-full">
                <FeaturedMatch />
            </div>
        </div>
    );
}

export default Home;
