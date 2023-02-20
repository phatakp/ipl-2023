import { IMatch } from "~/interfaces/matches";
import { ITeamForm } from "~/interfaces/teams";
import { useMatchProbability } from "./useMatchProbability";

export const MatchWinProbability = ({ match }: { match: IMatch }) => {
    const {
        isLoading,
        isError,
        error,
        data: matchProbability,
    } = useMatchProbability(match.num);

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>{JSON.stringify(error)}</h1>;

    const { team1: t1prob, team2: t2prob } = matchProbability;
    const { team1: t1form, team2: t2form } = match.form;

    return (
        <div className="section">
            <h1 className="text-xl font-bold text-center">Win Probability</h1>
            <div className="flex flex-row items-center justify-center flex-nowrap gap-4 w-full md:max-w-5xl md:mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <img
                        src={`${import.meta.env.VITE_APP_IMAGE_URL}/teamLogos/${
                            match.team1.shortname
                        }.png`}
                        alt="Team Logo"
                        className="w-16 h-16 md:w-20 md:h-20"
                    />
                    <div className={`flex justify-evenly items-center`}>
                        {t1form.map((item: ITeamForm, index) => (
                            <span
                                key={index}
                                className={`rounded-full flex justify-center items-center w-6 h-6 ${
                                    item.winner
                                        ? item.winner === match.team1.shortname
                                            ? "bg-green-500"
                                            : "bg-red-600"
                                        : "bg-gray-500"
                                } text-white text-xs`}
                            >
                                {item.winner
                                    ? item.winner === match.team1.shortname
                                        ? "W"
                                        : "L"
                                    : ""}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center flex-nowrap bg-transparent rounded w-full">
                    <div
                        className={`h-full bg-${match.team1.shortname} text-center text-white rounded-l`}
                        style={{ width: `${t1prob}%` }}
                    >
                        {t1prob}%
                    </div>
                    <div
                        className={`h-full bg-${match.team2.shortname} text-center text-white rounded-r`}
                        style={{ width: `${t2prob}%` }}
                    >
                        {t2prob}%
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img
                        src={`${import.meta.env.VITE_APP_IMAGE_URL}/teamLogos/${
                            match.team2.shortname
                        }.png`}
                        alt="Team Logo"
                        className="w-16 h-16 md:w-20 md:h-20"
                    />
                    <div
                        className={`flex flex-row-reverse justify-evenly items-center`}
                    >
                        {t2form.map((item: ITeamForm, index) => (
                            <span
                                key={index}
                                className={`rounded-full flex justify-center items-center w-6 h-6 ${
                                    item.winner
                                        ? item.winner === match.team2.shortname
                                            ? "bg-green-500"
                                            : "bg-red-600"
                                        : "bg-gray-500"
                                } text-white text-xs`}
                            >
                                {item.winner
                                    ? item.winner === match.team2.shortname
                                        ? "W"
                                        : "L"
                                    : ""}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
