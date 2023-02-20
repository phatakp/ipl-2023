import api from "./axios";

export const getTeamStats = (team1: string, team2: string) => {
    return api.get(`/stats/${team1}/${team2}/`).then((resp) => resp.data);
};

export const getTeamHistory = (team1: string, team2: string) => {
    return api
        .get(`/stats/history/${team1}/${team2}/`)
        .then((resp) => resp.data);
};
