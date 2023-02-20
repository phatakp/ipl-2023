import { ITeamScore } from "~/interfaces/matches";
import { ITeamShort } from "~/interfaces/teams";

export const MatchListTeam = ({
    team,
    score,
    type,
}: {
    team: ITeamShort;
    score: ITeamScore | null;
    type: "l" | "r";
}) => {
    return (
        <div
            className={`flex flex-col items-center justify-center sm:gap-3 ${
                type === "l" ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
        >
            <img
                src={`${import.meta.env.VITE_APP_IMAGE_URL}/teamLogos/${
                    team.shortname
                }.png`}
                alt="Team Logo"
                className="w-20 h-20 lg:w-28 lg:h-28"
            />
            <div
                className={`text-center flex flex-col ${
                    type === "l" ? "sm:text-left" : "sm:text-right"
                }`}
            >
                <em className="text-xs uppercase font-semibold text-blue-900 sm:text-base md:text-lg">
                    {team.longname}
                </em>
                <span className="text-lg font-bold text-blue-800 sm:text-xl">
                    {score?.runs ?? 0}/{score?.wickets ?? 0}
                </span>
                <span className="text-sm text-gray-500 font-semibold">
                    ({score?.overs ?? 0} OV)
                </span>
            </div>
        </div>
    );
};
