interface IFormInputProps {
    type: string;
    name: string;
    label: string;
    value: string | number;
    onFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}
export const FormInput = ({
    type,
    name,
    label,
    value,
    onFieldChange,
    required = true,
}: IFormInputProps) => {
    return (
        <div className="relative w-full max-w-sm">
            <input
                type={type}
                name={name}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={value}
                onChange={onFieldChange}
                required={required}
            />
            <label
                htmlFor={name}
                className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
                {label}
            </label>
        </div>
    );
};
