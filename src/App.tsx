import "flowbite";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Layout } from "./components/shared/Layout";
import { Auth } from "./features/Auth";
import { FormContainer } from "./features/Auth/FormContainer";
import { Dashboard } from "./features/Dashboard";
import { MatchDetail } from "./features/MatchDetail";
import { MatchList } from "./features/MatchList";
import { Rules } from "./features/Rules";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="rules" element={<Rules />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="matches">
                    <Route index element={<MatchList />} />
                    <Route path=":matchNum" element={<MatchDetail />} />
                </Route>

                <Route path="auth" element={<Auth />}>
                    <Route path="login" element={<FormContainer />} />
                    <Route path="register" element={<FormContainer />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
