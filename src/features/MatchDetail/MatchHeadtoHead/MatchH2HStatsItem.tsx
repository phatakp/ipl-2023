export const MatchH2HStatsItem = ({
    prob,
    title,
    t2batfirst,
}: {
    prob: number;
    t2batfirst: number;
    title: string;
}) => {
    return (
        <div className={`grid grid-cols-3 md:grid-cols-5 gap-2 w-full`}>
            <div
                className={`flex flex-row items-center flex-nowrap bg-gray-300 w-full justify-end md:col-span-2`}
            >
                <div
                    className={`h-full bg-green-500 text-center text-white text-sm`}
                    style={{ width: `${prob}%` }}
                >
                    {prob}%
                </div>
            </div>
            <span className="text-center text-xs sm:text-sm">{title}</span>
            <div
                className={`flex flex-row items-center flex-nowrap bg-gray-300 w-full justify-start md:col-span-2`}
            >
                <div
                    className={`h-full bg-green-500 text-center text-white text-sm`}
                    style={{
                        width: `${
                            title === "BATFIRST" ? t2batfirst : 100 - prob
                        }%`,
                    }}
                >
                    {title === "BATFIRST" ? t2batfirst : 100 - prob}%
                </div>
            </div>
        </div>
    );
};
