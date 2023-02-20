import api from "./axios";

export const getMatches = () => {
    return api.get("/matches/").then((resp) => resp.data);
};

export const getMatchByNum = (num: number) => {
    return api.get(`/matches/${num}/`).then((resp) => resp.data);
};

export const getMatchWinProbability = (num: number) => {
    return api.get(`/matches/probability/${num}/`).then((resp) => resp.data);
};

export const getMatchPredictions = (num: number) => {
    return api.get(`/predictions/?match=${num}`).then((resp) => resp.data);
};
