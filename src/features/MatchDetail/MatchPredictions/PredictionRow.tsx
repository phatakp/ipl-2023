import { IPred } from "~/interfaces/predictions";

export const PredictionRow = ({
    pred,
    index,
}: {
    pred: IPred;
    index: number;
}) => {
    const time = new Date(pred.create_upd_time).toLocaleTimeString("en-us", {
        hour: "2-digit",
        minute: "2-digit",
    });
    const date = new Date(pred.create_upd_time).toLocaleDateString("en-us", {
        month: "short",
        day: "numeric",
    });

    return (
        <div className="text-sm text-left font-semibold text-gray-700 grid grid-cols-10 sm:grid-cols-8 md:grid-cols-9 gap-2 rounded-lg mt-1 mb-4 bg-white px-2 mx-2 border-2 border-gray-500 items-center relative">
            <div>
                {pred.double && (
                    <span className="absolute -rotate-12 bg-green-600 text-white rounded-full w-6 h-6 text-xs flex justify-center items-center ">
                        D
                    </span>
                )}
                <span className="font-bold text-right">{index}</span>
            </div>
            <div className="col-span-3 sm:col-span-2">
                {pred.user.name.split(" ")[0]}
            </div>
            <div className="py-1 text-gray-900 flex flex-row justify-center items-center md:justify-start col-span-2 sm:col-span-1">
                <img
                    src={`${import.meta.env.VITE_APP_IMAGE_URL}/teamLogos/${
                        pred?.team?.shortname ?? "default"
                    }.png`}
                    alt="Team Logo"
                    className="h-8 w-8 md:mr-2"
                />
                <span className="hidden md:flex">{pred?.team?.shortname}</span>
            </div>
            <div className="py-1 text-center col-span-2 sm:col-span-1">
                {pred.amount}
            </div>
            <div
                className={`py-1 text-center col-span-2 sm:col-span-1 ${
                    pred.result < 0 ? "text-red-600" : "text-green-500"
                }`}
            >
                {pred.result.toFixed(2)}
            </div>
            <div className="py-1 text-center uppercase hidden md:flex">
                {pred.status}
            </div>
            <div className="py-1 text-center hidden sm:flex sm:col-span-2">
                {`${date}, ${time}`}
            </div>
        </div>
    );
};
