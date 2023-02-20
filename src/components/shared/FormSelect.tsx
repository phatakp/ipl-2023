interface ISelctOption {
    text: string;
    value: string | number;
}

interface IFormSelectProps {
    name: string;
    label: string;
    value: string | number;
    onFieldChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: ISelctOption[];
    required?: boolean;
}

export const FormSelect = ({
    name,
    label,
    value,
    onFieldChange,
    options,
    required = true,
}: IFormSelectProps) => {
    return (
        <div className="relative w-full max-w-sm">
            <select
                name={name}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={value}
                defaultValue={""}
                onChange={onFieldChange}
                required={required}
            >
                <option value={""}>Choose your option</option>
                {options.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.text}
                    </option>
                ))}
            </select>
            <label
                htmlFor={name}
                className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
                {label}
            </label>
        </div>
    );
};
