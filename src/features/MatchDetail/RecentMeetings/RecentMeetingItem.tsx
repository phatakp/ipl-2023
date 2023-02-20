import { IMatchHistory } from "~/interfaces/history";
import { RecentMeetingsTeam } from "./RecentMeetingsTeam";

export const RecentMeetingItem = ({ match }: { match: IMatchHistory }) => {
    const date = new Date(match.date).toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    return (
        <div className="flex flex-col items-center justify-center mt-6 w-full">
            <span className="text-xs text-gray-600">{date}</span>
            <span className="text-sm text-gray-800 font-semibold">
                {match.result}
            </span>
            <div className="grid grid-cols-2 gap-8 border-b border-t border-gray-200 w-full max-w-3xl bg-gray-100 mt-2">
                <RecentMeetingsTeam
                    team={match.team1}
                    type="l"
                    winner={match.winner}
                />
                <RecentMeetingsTeam
                    team={match.team2}
                    type="r"
                    winner={match.winner}
                />
            </div>
        </div>
    );
};
