import { useWindowDimensions } from "~/hooks/useWindowDimensions";
import { IMatch } from "~/interfaces/matches";
import { MatchDetailTeams } from "./MatchDetailTeams";

export const MatchDetailBanner = ({ match }: { match: IMatch }) => {
    const { width } = useWindowDimensions();
    const img =
        width < 600
            ? `url('${import.meta.env.VITE_APP_IMAGE_URL}/hero-bg-mobile.jpg')`
            : `url('${import.meta.env.VITE_APP_IMAGE_URL}/hero-bg.jpg')`;

    return (
        <div
            className={`w-screen relative bg-center bg-no-repeat bg-cover p-2`}
            style={{ backgroundImage: img }}
        >
            <div className="lg:container mx-auto text-white text-center">
                <div className="text-xs md:text-sm font-semibold tracking-wide pb-2 border-b md:border-b-2 border-gray-400 w-[80%] md:w-[60%] mx-auto">
                    <span>
                        {match.type === "league"
                            ? `Match ${match.num}`
                            : match.type}
                    </span>{" "}
                    | <span>{match.venue}</span>
                </div>
                <div className="uppercase text-sm md:text-xl mt-4 font-bold">
                    {match.result}
                </div>
                <MatchDetailTeams match={match} />
            </div>
        </div>
    );
};
