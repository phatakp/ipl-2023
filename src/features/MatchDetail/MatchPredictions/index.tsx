import { IMatch } from "~/interfaces/matches";
import { IPred } from "~/interfaces/predictions";
import { PredictionRow } from "./PredictionRow";
import { useMatchPredictions } from "./useMatchPredictions";

export const MatchPredictions = ({ match }: { match: IMatch }) => {
    const {
        isLoading,
        isError,
        error,
        data: matchPreds,
    } = useMatchPredictions(match.num);

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>{JSON.stringify(error)}</h1>;

    return (
        <div className="container mx-auto bg-darkblue p-4">
            <h1 className="btn-orange w-48 text-center py-1 mx-2 my-4 rounded text-lg font-bold">
                Match Predictions
            </h1>

            <div className="relative overflow-x-auto shadow-md">
                <div className="text-sm text-left text-gray-100 grid grid-cols-10 sm:grid-cols-8 md:grid-cols-9 gap-2 px-2 uppercase mx-2 mt-4 items-center">
                    <div className="font-bold">#</div>
                    <div className="col-span-3 sm:col-span-2">Player</div>
                    <div className="col-span-2 sm:col-span-1 text-center md:text-left">
                        Team
                    </div>
                    <div className="col-span-2 sm:col-span-1 text-center">
                        Stake
                    </div>
                    <div className="col-span-2 sm:col-span-1 text-center">
                        Result
                    </div>
                    <div className="hidden md:flex text-center">Status</div>
                    <div className="hidden sm:flex sm:col-span-2 text-center">
                        Time
                    </div>
                </div>
                {matchPreds?.map((pred: IPred, index: number) => (
                    <PredictionRow
                        key={pred.id}
                        pred={pred}
                        index={index + 1}
                    />
                ))}
            </div>
        </div>
    );
};
