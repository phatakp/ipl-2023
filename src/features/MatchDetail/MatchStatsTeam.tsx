import { ITeamShort } from "~/interfaces/teams";

export const MatchStatsTeam = ({ team }: { team: ITeamShort }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <span>{team.shortname}</span>
            <img
                src={`${import.meta.env.VITE_APP_IMAGE_URL}/teamLogos/${
                    team.shortname
                }.png`}
                alt="Team Logo"
                className="w-16 h-16 md:w-20 md:h-20 "
            />
        </div>
    );
};
