export const SliderChevron = ({
    direction,
}: {
    direction: "left" | "right";
}) => {
    return (
        <img
            onClick={() => slide(direction)}
            className={`absolute ${direction}-0 z-10 hover:bg-pink-600 p-4 rounded-full cursor-pointer`}
            src={`${
                import.meta.env.VITE_APP_IMAGE_URL
            }/${direction}-chevron.svg`}
        />
    );
};

const slide = (direction: "left" | "right") => {
    const slider = document.getElementById("slider");
    if (direction === "left") {
        slider!.scrollLeft = slider!.scrollLeft - 300;
    } else {
        slider!.scrollLeft = slider!.scrollLeft + 300;
    }
};
