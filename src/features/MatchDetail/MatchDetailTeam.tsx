import { ITeamScore } from "~/interfaces/matches";
import { ITeamShort } from "~/interfaces/teams";

export const MatchDetailTeam = ({
    team,
    score,
    type,
    winner,
}: {
    team: ITeamShort;
    score: ITeamScore | null;
    type: "l" | "r";
    winner: boolean;
}) => {
    const ovs = Math.floor(score?.overs ?? 0 / 2);

    return (
        <div
            className={`flex flex-col items-center justify-center md:justify-around w-full ${
                type === "l" ? "md:flex-row" : "md:flex-row-reverse"
            }`}
        >
            <div className="flex flex-col items-center justify-center">
                <img
                    src={`${import.meta.env.VITE_APP_IMAGE_URL}/teamLogos/${
                        team.shortname
                    }.png`}
                    alt="Team Logo"
                    className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"
                />

                <span className="text-xs font-semibold text-white sm:text-base md:text-lg lg:text-2xl mb-8 w-28 md:36 lg:w-full">
                    {team.longname}
                </span>
            </div>

            <div
                className={`text-center flex flex-col space-y-2 ${
                    type === "l" ? "md:text-right" : "md:text-left"
                }`}
            >
                <span
                    className={`text-2xl md:text-4xl font-bold ${
                        winner ? "text-white" : "text-gray-500"
                    }`}
                >
                    {score?.runs ?? 0}/{score?.wickets ?? 0}
                </span>
                <span
                    className={`font-semibold text-sm md:text-base ${
                        winner ? "text-white" : "text-gray-500"
                    }`}
                >
                    Run Rate:
                    {((score?.runs ?? 0) / (score?.overs ?? 1)).toFixed(2)}
                </span>
                <span
                    className={`font-semibold text-sm ${
                        winner ? "text-white" : "text-gray-500"
                    }`}
                >
                    Overs:{score?.overs ?? 0}/20
                </span>
                <div
                    className={`flex flex-row flex-nowrap items-center justify-center ${
                        type === "l" ? "md:justify-end" : "justify-start"
                    }`}
                >
                    {[...Array(10).keys()].map((item) => (
                        <span
                            key={item}
                            className={`w-1 h-6 ${
                                winner && item + 1 <= ovs
                                    ? "bg-white"
                                    : "bg-gray-500"
                            } mr-1.5`}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};
