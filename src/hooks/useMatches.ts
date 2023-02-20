import { useQuery } from "react-query";
import { getMatchByNum, getMatches } from "../services/matches";

export const useMatches = (matchNum?: number) => {
    if (matchNum) {
        const { isLoading, isError, error, data } = useQuery({
            queryKey: ["matches", matchNum],
            queryFn: () => getMatchByNum(matchNum),
        });
        return { isLoading, isError, error, data };
    } else {
        const { isLoading, isError, error, data } = useQuery({
            queryKey: ["matches"],
            queryFn: getMatches,
        });
        return { isLoading, isError, error, data };
    }
};
