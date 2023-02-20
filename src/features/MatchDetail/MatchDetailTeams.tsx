import { IMatch } from "~/interfaces/matches";
import { MatchDetailTeam } from "./MatchDetailTeam";

export const MatchDetailTeams = ({ match }: { match: IMatch }) => {
    return (
        <div className="flex flex-row justify-between items-center gap-2 py-4 lg:mx-10">
            <MatchDetailTeam
                team={match.team1}
                score={match.t1score}
                type="l"
                winner={match.team1.id === match?.winner?.id}
            />
            <span className="text-pink-600 text-3xl font-bold md:mx-8">vs</span>
            <MatchDetailTeam
                team={match.team2}
                score={match.t2score}
                type="r"
                winner={match.team2.id === match?.winner?.id}
            />
        </div>
    );
};
