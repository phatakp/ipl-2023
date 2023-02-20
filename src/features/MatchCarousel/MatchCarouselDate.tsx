export const MatchCarouselDate = ({ matchDate }: { matchDate: Date }) => {
    return (
        <div className="bg-slate-800 text-gray-300 flex flex-col justify-center items-center py-3">
            <span className="text-sm">
                {new Intl.DateTimeFormat("en", {
                    month: "short",
                }).format(matchDate)}
            </span>
            <span className="text-3xl font-semibold">
                {new Intl.DateTimeFormat("en", {
                    day: "2-digit",
                }).format(matchDate)}
            </span>
        </div>
    );
};
