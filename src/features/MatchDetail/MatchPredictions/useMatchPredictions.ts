import { useQuery } from "react-query";
import { getMatchPredictions } from "~/services/matches";

export const useMatchPredictions = (matchNum: number) => {
    const { isLoading, isError, error, data } = useQuery({
        queryKey: ["matchPredictions", matchNum],
        queryFn: () => getMatchPredictions(matchNum),
    });

    return { isLoading, isError, error, data };
};
