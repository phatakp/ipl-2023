export const MatchAllStatsItem = ({
    prob1,
    title,
    prob2,
}: {
    prob1: number;
    title: string;
    prob2: number;
}) => {
    return (
        <div className={`grid grid-cols-3 md:grid-cols-5 gap-2 w-full`}>
            <div
                className={`flex flex-row items-center flex-nowrap bg-gray-300 w-full justify-end md:col-span-2`}
            >
                <div
                    className={`h-full bg-green-500 text-center text-white text-sm`}
                    style={{ width: `${prob1}%` }}
                >
                    {prob1}%
                </div>
            </div>
            <span className="text-center text-xs sm:text-sm">{title}</span>
            <div
                className={`flex flex-row items-center flex-nowrap bg-gray-300 w-full justify-start md:col-span-2`}
            >
                <div
                    className={`h-full bg-green-500 text-center text-white text-sm`}
                    style={{ width: `${prob2}%` }}
                >
                    {prob2}%
                </div>
            </div>
        </div>
    );
};
