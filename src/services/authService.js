import axios from "axios";

const BASE_URL = "http://localhost:8080";

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

export const authService = {
    getCurrentUser: async () => {
        try {
            const response = await api.get("/api/auth/getcurrentuser");
            return response.data;
        } catch (error) {
            console.error("Error in fetching current user", error);
            throw error;
        }
    },

    logout: async () => {
        try {
            await api.post("/api/auth/logout");
            window.location.href = `${BASE_URL}/logout`;
        } catch (error) {
            console.error("error in logging out", error);
            throw error;
        }
    },

    loginWithGoogle: () => {
        window.location.href = `${BASE_URL}/oauth2/authorization/google`;
    },

    loginWithGithub: () => {
        window.location.href = `${BASE_URL}/oauth2/authorization/github`;
    },
};