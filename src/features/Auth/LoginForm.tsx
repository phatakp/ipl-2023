import { useState } from "react";
import { FormInput } from "~/components/shared/FormInput";

export const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({
            ...formData,
            [e.currentTarget.name]: e.currentTarget.value,
        });

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    };

    return (
        <form
            className="p-4 border shadow-lg shadow-gray-400 border-gray-200 rounded md:min-h-[300px] max-w-lg mx-auto bg-gradient-to-r from-white to-gray-200"
            autoComplete="off"
            onSubmit={onFormSubmit}
        >
            <h2 className="text-gray-800 mb-4 text-3xl font-bold uppercase">
                Login
            </h2>
            <div className="flex flex-col items-center justify-center space-y-6">
                <FormInput
                    type="email"
                    name="email"
                    label="Email"
                    value={email}
                    onFieldChange={onFieldChange}
                />
                <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    value={password}
                    onFieldChange={onFieldChange}
                />
                <button
                    type="submit"
                    className="my-8 px-6 py-2 rounded-full btn-orange"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};
