import { useState } from "react";
import { FormInput } from "~/components/shared/FormInput";
import { FormSelect } from "~/components/shared/FormSelect";
import { useTeams } from "~/hooks/useTeams";
import { ITeam } from "~/interfaces/teams";

export const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
        ipl_winner: "",
    });

    const { name, email, password, password2, ipl_winner } = formData;

    const { isLoading, isError, error, data: teamList } = useTeams();

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) {
        return <h1>{JSON.stringify(error)}</h1>;
    }

    const teamOptions = teamList.map((team: ITeam) => ({
        text: team.longname,
        value: team.shortname,
    }));

    const onFieldChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(name);
        console.log(ipl_winner);
    };

    return (
        <form
            className="p-4 border shadow-lg shadow-gray-400 border-gray-200 rounded md:min-h-[300px] max-w-lg mx-auto bg-white"
            autoComplete="off"
            onSubmit={onFormSubmit}
        >
            <h2 className="text-gray-800 mb-4 text-3xl font-bold uppercase">
                Login
            </h2>
            <div className="flex flex-col items-center justify-center space-y-6">
                <FormInput
                    type="text"
                    name="name"
                    label="Name"
                    value={name}
                    onFieldChange={onFieldChange}
                />
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
                <FormInput
                    type="password"
                    name="password2"
                    label="Confirm Password"
                    value={password2}
                    onFieldChange={onFieldChange}
                />
                <FormSelect
                    name="ipl_winner"
                    label="IPL Winner"
                    value={ipl_winner}
                    onFieldChange={onFieldChange}
                    options={teamOptions}
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
