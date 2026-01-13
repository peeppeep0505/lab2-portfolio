import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            role: null,
            isAuthenticated: false,

            login: (role) =>
                set(() => ({
                    user: role === "admin" ? "Admin User" : "Normal User",
                    role,
                    isAuthenticated: true,
                })),

            logout: () =>
                set(() => ({
                    user: null,
                    role: null,
                    isAuthenticated: false,
                })),
        }),
        {
            name: "myportfolio_auth",
        }
    )
);

export default useAuthStore;