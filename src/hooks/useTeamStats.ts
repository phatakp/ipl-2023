import { useQuery } from "react-query";
import { IMatch } from "../interfaces/matches";
import { getTeamStats } from "../services/stats";

export const useTeamStats = (match: IMatch) => {
    const team1 = match.team1.shortname;
    const team2 = match.team2.shortname;
    const { isLoading, isError, error, data } = useQuery({
        queryKey: ["teamStats", team1, team2],
        queryFn: () => getTeamStats(team1, team2),
    });

    return { isLoading, isError, error, data };
};
