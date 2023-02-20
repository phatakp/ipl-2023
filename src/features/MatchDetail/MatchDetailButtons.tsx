import { Link } from "react-router-dom";
import { IMatch } from "~/interfaces/matches";

export const MatchDetailButtons = ({ match }: { match: IMatch }) => {
    return (
        <div className="w-screen bg-darkblue flex flex-row justify-between items-center py-2">
            {match.num !== 1 && (
                <Link to={`/matches/${match.num - 1}/`} className="p-2">
                    <img
                        className="hover:bg-pink-600 p-4 rounded-full cursor-pointer"
                        src={`${
                            import.meta.env.VITE_APP_IMAGE_URL
                        }/left-chevron.svg`}
                    />
                </Link>
            )}
            <button className="btn-pink px-4 py-2 rounded">Score</button>
            <button className="btn-pink px-4 py-2 rounded">Winner</button>
            {match.type !== "final" && (
                <Link to={`/matches/${match.num + 1}/`} className="p-2">
                    <img
                        className="hover:bg-pink-600 p-4 rounded-full cursor-pointer"
                        src={`${
                            import.meta.env.VITE_APP_IMAGE_URL
                        }/right-chevron.svg`}
                    />
                </Link>
            )}
        </div>
    );
};
