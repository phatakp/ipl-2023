import { useTeams } from "~/hooks/useTeams";
import { ITeam } from "~/interfaces/teams";
import { TeamRow } from "./TeamRow";

export const TeamStandings = () => {
    const { isLoading, isError, error, data: teamList } = useTeams();

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) {
        return <h1>{JSON.stringify(error)}</h1>;
    }

    return (
        <div className="container mx-auto bg-darkblue mt-8 p-4">
            <h1 className="btn-orange w-32 text-center py-1 mx-2 my-4 rounded text-lg font-bold">
                Standings
            </h1>

            <div className="relative overflow-x-auto shadow-md">
                <div className="text-sm text-left text-gray-100 grid grid-cols-5 gap-2 px-2 uppercase mx-2 mt-4 items-center">
                    <div className="col-span-2">Team</div>
                    <div className="text-center">Pld</div>
                    <div className="text-center">Net RR</div>
                    <div className="text-center">Pts</div>
                </div>
                {teamList.map((team: ITeam) => (
                    <TeamRow key={team.id} team={team} />
                ))}
            </div>
        </div>
    );
};
