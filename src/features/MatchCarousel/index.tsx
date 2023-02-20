import { SliderChevron } from "~/components/shared/SliderChevron";
import { useMatches } from "~/hooks/useMatches";
import { IMatch } from "~/interfaces/matches";
import { MatchCarouselItem } from "./MatchCarouselItem";

export const MatchCarousel = () => {
    const { isLoading, isError, error, data: matches } = useMatches();

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>{JSON.stringify(error)}</h1>;

    return (
        <div className="my-2 bg-darkblue">
            <div className="relative flex items-center">
                <SliderChevron direction="left" />

                <div
                    id="slider"
                    className="relative container mx-auto overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
                >
                    {matches.map((item: IMatch) => (
                        <MatchCarouselItem key={item.id} match={item} />
                    ))}
                </div>

                <SliderChevron direction="right" />
            </div>
        </div>
    );
};
