import { Link } from "react-router-dom";
import { IMatch } from "~/interfaces/matches";
import { MatchCarouselDate } from "./MatchCarouselDate";
import { MatchCarouselScore } from "./MatchCarouselScore";
import { MatchCarouselTeam } from "./MatchCarouselTeam";

export const MatchCarouselItem = ({ match }: { match: IMatch }) => {
    const matchDate = new Date(match.date);
    return (
        <Link
            to={`/matches/${match.num}`}
            className="relative inline-flex shadow cursor-pointer rounded-xl h-full bg-transparent"
        >
            <div className="grid grid-cols-5 gap-2 mx-1">
                <MatchCarouselDate matchDate={matchDate} />

                <div className="col-span-4 flex flex-col justify-center items-center">
                    <div className="text-xs text-gray-100 mb-2">
                        {match.result}
                    </div>

                    <div className="rounded-full grid grid-cols-5 border border-blue-900 ">
                        <MatchCarouselTeam
                            name={match.team1.shortname}
                            team="l"
                        />

                        <div className="col-span-3 bg-white flex flex-row justify-between items-center ">
                            <MatchCarouselScore
                                score={match.t1score}
                                team="l"
                            />

                            <span className="text-gray-600 text-sm">v</span>

                            <MatchCarouselScore
                                score={match.t2score}
                                team="r"
                            />
                        </div>

                        <MatchCarouselTeam
                            name={match.team2.shortname}
                            team="r"
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
};
