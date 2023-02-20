import { ITeamShort } from "~/interfaces/teams";

export const RecentMeetingsTeam = ({
    team,
    type,
    winner,
}: {
    team: ITeamShort;
    winner: ITeamShort | null;
    type: "l" | "r";
}) => {
    return (
        <div
            className={`flex items-center justify-end flex-nowrap space-x-2 py-1 ${
                type === "l" ? "flex-row" : "flex-row-reverse"
            }`}
        >
            <span className="sm:hidden">{team.shortname}</span>
            <span className="hidden sm:flex">{team.longname}</span>
            <img
                src={`${import.meta.env.VITE_APP_IMAGE_URL}/teamLogos/${
                    team.shortname
                }.png`}
                alt="Team Logo"
                className="w-12 h-12"
            />
            <span
                className={`rounded-full flex justify-center items-center w-6 h-6 ${
                    winner
                        ? winner.shortname === team.shortname
                            ? "bg-green-500"
                            : "bg-red-600"
                        : "bg-gray-500"
                } text-white text-xs`}
            >
                {winner
                    ? winner.shortname === team.shortname
                        ? "W"
                        : "L"
                    : "-"}
            </span>
        </div>
    );
};
