import { MatchCarousel } from "~/features/MatchCarousel";
import { TeamStandings } from "~/features/TeamStandings";

export const Home = () => {
    return (
        <div className="mt-24">
            <TeamStandings />
            <MatchCarousel />
        </div>
    );
};
