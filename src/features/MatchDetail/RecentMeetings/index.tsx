import { IMatchHistory } from "~/interfaces/history";
import { IMatch } from "~/interfaces/matches";
import { RecentMeetingItem } from "./RecentMeetingItem";
import { useMatchHistory } from "./useMatchHistory";

export const RecentMeetings = ({ match }: { match: IMatch }) => {
    const {
        isLoading,
        isError,
        error,
        data: matchHistory,
    } = useMatchHistory(match);

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>{JSON.stringify(error)}</h1>;

    return (
        <div className="section">
            <h1 className="text-xl font-bold text-center">Recent Meetings</h1>

            <div className="container mx-auto">
                {matchHistory.map((item: IMatchHistory) => (
                    <RecentMeetingItem key={item.id} match={item} />
                ))}
            </div>
        </div>
    );
};
