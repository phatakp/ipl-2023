import { ITeam } from "~/interfaces/teams";

export const TeamRow = ({ team }: { team: ITeam }) => {
    return (
        <div className="text-sm text-left font-semibold text-gray-700 grid grid-cols-5 gap-2 rounded-lg mt-1 mb-4 bg-white px-2 mx-2 border-2 border-gray-500 items-center">
            <div className="py-1 text-gray-900 flex flex-row justify-start items-center col-span-2">
                <img
                    src={`${import.meta.env.VITE_APP_IMAGE_URL}/teamLogos/${
                        team.shortname
                    }.png`}
                    alt="Team Logo"
                    className="h-8 w-8 mr-4"
                />
                <span>{team.shortname}</span>
            </div>
            <div className="py-1 text-center">{team.played}</div>
            <div className="py-1 text-center">{team.nrr.toFixed(3)}</div>
            <div className="py-1 text-center">{team.points}</div>
        </div>
    );
};
