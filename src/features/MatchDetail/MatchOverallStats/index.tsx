import { useTeamStats } from "~/hooks/useTeamStats";
import { IMatch } from "~/interfaces/matches";
import { IStats, ITeamStats } from "~/interfaces/teamStats";
import { MatchStatsTeam } from "../MatchStatsTeam";
import { MatchAllStatsItem } from "./MatchAllStatsItem";

export const MatchOverallStats = ({ match }: { match: IMatch }) => {
    const { isLoading, isError, error, data: stats } = useTeamStats(match);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <h1>{JSON.stringify(error)}</h1>;

    const t1Stats: IStats = stats.filter(
        (item: ITeamStats) =>
            item.team1.shortname === match.team1.shortname && !item?.team2
    )[0].stats;

    const t2Stats: IStats = stats.filter(
        (item: ITeamStats) =>
            item.team1.shortname === match.team2.shortname && !item?.team2
    )[0].stats;

    return (
        <div className="section">
            <h1 className="text-xl font-bold text-center mb-4">Overall Wins</h1>
            <div className="grid grid-cols-2 gap-4">
                <MatchStatsTeam team={match.team1} />

                <MatchStatsTeam team={match.team2} />

                <div
                    className={`flex flex-col justify-center items-center gap-4 col-span-2`}
                >
                    {Object.entries(t1Stats).map(([key, value]) => {
                        if (
                            match.type !== "league" ||
                            (match.type === "league" && key != "knockout")
                        ) {
                            const prob2 = t2Stats[key as keyof IStats];
                            return (
                                <MatchAllStatsItem
                                    key={key}
                                    prob1={getProb(value)}
                                    title={key.toUpperCase()}
                                    prob2={getProb(prob2)}
                                />
                            );
                        } else return null;
                    })}
                </div>
            </div>
        </div>
    );
};

const getProb = (prob: number) => {
    return Math.floor(prob * 100);
};
