import { Link } from "react-router-dom";
import { IMatch } from "~/interfaces/matches";

export const MatchListDetail = ({ match }: { match: IMatch }) => {
    return (
        <div className="flex flex-row justify-between items-center gap-2 pb-2 border-b-2 border-gray-200 md:flex-col md:border-b-0 md:border-r-2 md:pb-0 md:pr-2 md:py-2 md:text-center">
            <span className="text-blue-800 font-semibold">{match.venue}</span>
            <Link
                to={`/matches/${match.num}`}
                className="text-sm bg-orange-600 font-bold uppercase p-2 rounded text-white text-center"
            >
                Match Center
            </Link>
        </div>
    );
};
