function FeaturedMatch() {
    return (
        <div className="flex flex-col items-center bg-card p-6 mt-7">
            <div className="flex flex-row space-x-2 items-center">
                <img src="public\images\premier.png" className="max-w-4 max-h-5" />
                <p>Premier League</p>
            </div>
            <p className="text-3xl mb-2">Mañana</p>
            <div className="flex w-full justify-around items-center">
                <div className="w-1/2 flex-grow flex flex-row justify-start items-center">
                    <img src="public\images\tottenham.png" className="absolute max-w-24 max-h-24" />
                    <div className="p-4 flex bg-blue-950 flex-grow pl-12 ml-12">
                        <p className="text-xl font-semibold">TOTTENHAM</p>
                    </div>
                </div>
                <p className="text-3xl absolute">VS</p>
                <div className="w-1/2 flex-grow flex flex-row justify-end items-center">
                    <div className="p-4 bg-black flex-grow flex justify-end pr-12 mr-12">
                        <p className="text-xl font-semibold">FULHAM</p>
                    </div>
                    <img src="public\images\fulham.png" className="absolute max-w-24 max-h-24" />
                </div>
            </div>
        </div>
    );
}

export default FeaturedMatch;
