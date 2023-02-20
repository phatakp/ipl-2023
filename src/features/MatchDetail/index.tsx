import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMatches } from "~/hooks/useMatches";
import { MatchDetailBanner } from "./MatchDetailBanner";
import { MatchDetailButtons } from "./MatchDetailButtons";
import { MatchHeadtoHead } from "./MatchHeadtoHead";
import { MatchOverallStats } from "./MatchOverallStats";
import { MatchPredictions } from "./MatchPredictions";
import { MatchWinProbability } from "./MatchWinProbability";
import { RecentMeetings } from "./RecentMeetings";

export const MatchDetail = () => {
    const { matchNum } = useParams();

    const {
        isLoading,
        isError,
        error,
        data: match,
    } = useMatches(Number(matchNum));
    const [statsPage, setStatsPage] = useState(!!match?.scheduled);

    const setPageToStats = () => setStatsPage(true);
    const setPageToPredictions = () => setStatsPage(false);

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>{JSON.stringify(error)}</h1>;

    return (
        <div
            className={`w-screen relative mt-20 flex flex-col items-center justify-center`}
        >
            <MatchDetailBanner match={match} />
            <MatchDetailButtons match={match} />

            <div
                className={`w-screen relative min-h-screen bg-center bg-cover bg-no-repeat p-2 mt-16`}
                style={{
                    backgroundImage: `url('${
                        import.meta.env.VITE_APP_IMAGE_URL
                    }/scheduleBg.jpg')`,
                }}
            >
                <div className="flex flex-row items-center justify-center mb-8">
                    <button
                        className={`p-2 font-semibold uppercase w-32  shadow-lg shadow-gray-400 ${
                            statsPage ? "btn-blue" : "border-b border-gray-400"
                        } `}
                        onClick={setPageToStats}
                    >
                        Stats
                    </button>
                    <button
                        className={`p-2 font-semibold uppercase w-32  shadow-lg shadow-gray-400 ${
                            !statsPage ? "btn-blue" : "border-b border-gray-400"
                        } `}
                        onClick={setPageToPredictions}
                    >
                        Predictions
                    </button>
                </div>

                {statsPage && (
                    <>
                        <MatchWinProbability match={match} />
                        <MatchHeadtoHead match={match} />
                        <MatchOverallStats match={match} />
                        <RecentMeetings match={match} />
                    </>
                )}

                {!statsPage && <MatchPredictions match={match} />}
            </div>
        </div>
    );
};
