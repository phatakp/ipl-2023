import { IMatch } from "~/interfaces/matches";
import { MatchListDate } from "./MatchListDate";
import { MatchListDetail } from "./MatchListDetail";
import { MatchListTeams } from "./MatchListTeams";

export const MatchListItem = ({ match }: { match: IMatch }) => {
    return (
        <div className="container mx-auto border-2 shadow-lg shadow-blue-900 border-t border-t-gray-200 border-blue-900 my-6 rounded p-2 relative overflow-hidden bg-slate-100">
            <img
                src={`${import.meta.env.VITE_APP_IMAGE_URL}/circle-pattern.png`}
                alt=""
                className="absolute -right-1/4 -top-12 md:top-0 md:right-0"
            />
            <div className="flex flex-col p-4">
                <div className="flex flex-row items-center justify-between  pb-2 border-b-2 border-gray-200">
                    <MatchListDate match={match} />
                    {match.scheduled && !match.started && (
                        <button
                            className="p-2 hidden text-sm rounded text-white font-bold uppercase border border-blue-900 md:px-4 md:text-base md:flex
                                bg-gray-800 hover:bg-gray-700"
                        >
                            Predict
                        </button>
                    )}
                </div>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:items-center md:py-4">
                    <MatchListTeams match={match} />
                    <MatchListDetail match={match} />
                    <div className="flex flex-row items-center justify-between">
                        <div className="uppercase font-semibold text-blue-900 sm:text-lg sm:font-bold md:pl-4">
                            {match.result}
                        </div>
                        {match.scheduled && !match.started && (
                            <button
                                className="p-2 text-sm rounded text-white font-bold uppercase border border-blue-900 md:px-4 md:text-lg md:hidden
                                bg-gray-800 hover:bg-gray-700"
                            >
                                Predict
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
