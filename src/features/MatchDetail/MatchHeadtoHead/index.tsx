import { useTeamStats } from "~/hooks/useTeamStats";
import { IMatch } from "~/interfaces/matches";
import { ITeamStats } from "~/interfaces/teamStats";
import { MatchStatsTeam } from "../MatchStatsTeam";
import { MatchH2HStatsItem } from "./MatchH2HStatsItem";

export const MatchHeadtoHead = ({ match }: { match: IMatch }) => {
    const { isLoading, isError, error, data: stats } = useTeamStats(match);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <h1>{JSON.stringify(error)}</h1>;

    const t1H2HStats: ITeamStats = stats.filter(
        (item: ITeamStats) =>
            item.team1.shortname === match.team1.shortname &&
            item?.team2?.shortname === match.team2.shortname
    )[0];

    const t2batfirst: number = stats.filter(
        (item: ITeamStats) =>
            item.team1.shortname === match.team2.shortname &&
            item?.team2?.shortname === match.team1.shortname
    )[0].stats.batFirst;

    return (
        <div className="section">
            <h1 className="text-xl font-bold text-center mb-4">
                Head to Head Wins
            </h1>
            <div className="grid grid-cols-3 gap-4">
                <MatchStatsTeam team={match.team1} />

                <div className="flex flex-col items-center justify-center">
                    <span className="font-semibold text-sm">Played</span>
                    <span className="text-4xl font-bold text-pink-600">
                        {t1H2HStats.played}
                    </span>
                </div>

                <MatchStatsTeam team={match.team2} />

                <div
                    className={`flex flex-col justify-center items-center  gap-4 col-span-3`}
                >
                    {Object.entries(t1H2HStats.stats).map(
                        ([key, value]) =>
                            match.type !== "league" ||
                            (match.type === "league" && key != "knockout" && (
                                <MatchH2HStatsItem
                                    key={key}
                                    prob={getProb(value)}
                                    title={key.toUpperCase()}
                                    t2batfirst={getProb(t2batfirst)}
                                />
                            ))
                    )}
                </div>
            </div>
        </div>
    );
};

const getProb = (prob: number) => {
    return Math.floor(prob * 100);
};
