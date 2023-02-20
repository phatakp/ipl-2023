import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useMatches } from "~/hooks/useMatches";
import { IMatch } from "~/interfaces/matches";
import { MatchListItem } from "./MatchListItem";

export const MatchList = () => {
    const [page, setPage] = useState<"schedule" | "result">("schedule");

    const setPageResult = () => setPage("result");
    const setPageSchedule = () => setPage("schedule");

    const { isLoading, isError, error, data: matchList } = useMatches();

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>{JSON.stringify(error)}</h1>;

    const schedule = matchList
        .filter((match: IMatch) => match.scheduled)
        .sort((a: IMatch, b: IMatch) => a.num > b.num);

    const results = matchList
        .filter((match: IMatch) => !match.scheduled)
        .sort((a: IMatch, b: IMatch) => b.num > a.num);

    const matches = page === "schedule" ? schedule : results;

    return (
        <>
            <div
                className={`w-screen relative min-h-screen bg-center bg-cover bg-no-repeat p-2 mt-16`}
                style={{
                    backgroundImage: `url('${
                        import.meta.env.VITE_APP_IMAGE_URL
                    }/scheduleBg.jpg')`,
                }}
            >
                <div className="container mx-auto">
                    <div className="flex flex-row items-center mb-8 mt-4">
                        <button
                            className={`p-2 rounded-l text-white font-bold uppercase border-2 border-blue-900 border-r-white border-r md:px-4 md:text-lg ${
                                page === "schedule" ? "btn-orange" : "btn-blue"
                            } `}
                            onClick={setPageSchedule}
                        >
                            Schedule
                        </button>
                        <button
                            className={`p-2 rounded-r text-white font-bold uppercase border-2 border-blue-900 border-l-white border-l md:px-4 md:text-lg ${
                                page === "result" ? "btn-orange" : "btn-blue"
                            } `}
                            onClick={setPageResult}
                        >
                            Results
                        </button>
                    </div>
                    {matches.map((item: IMatch) => (
                        <MatchListItem key={item.id} match={item} />
                    ))}
                </div>
            </div>
            <Outlet />
        </>
    );
};
