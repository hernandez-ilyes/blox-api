import { UserData, MultiGetByUsernameRequest, GetUserByUsernameOptions, GetUserByIdsOptions, MultiGetUserIdRequest, GetUsernameHistory, LimitPerRequest, SearchUsersByKeywords } from '../types/users';

export class UserAPI {
    public static async getUserById(id: number): Promise<UserData> {
        try {
            const userDataResponse = await fetch("https://users.roblox.com/v1/users/" + id, {
                method: "GET",
            });

            if (!userDataResponse.ok) {
                throw new Error(`Request failed with status ${userDataResponse.status}`);
            }

            const userData = await userDataResponse.json() as UserData;
            return userData;
        } catch (error) {
            throw new Error(`Failed to get user by id ${id}: ${error.message}`);
        }
    }

    public static async getUserByIds(options: GetUserByIdsOptions): Promise<MultiGetUserIdRequest> {
        try {
            const usersDataResponse = await fetch("https://users.roblox.com/v1/users", {
                method: "POST",
                body: JSON.stringify(options)
            });

            if (!usersDataResponse.ok) {
                throw new Error(`Request failed with status ${usersDataResponse.status}`);
            }

            const usersData = await usersDataResponse.json() as MultiGetUserIdRequest;
            return usersData;
        } catch (error) {
            throw new Error(`Failed to get users by ids: ${error.message}`);
        }
    }

    public static async getUserByUsernames(options: GetUserByIdsOptions): Promise<MultiGetByUsernameRequest> {
        try {
            const usersDataResponse = await fetch("https://users.roblox.com/v1/usernames/users", {
                method: "POST",
                body: JSON.stringify(options)
            });

            if (!usersDataResponse.ok) {
                throw new Error(`Request failed with status ${usersDataResponse.status}`);
            }

            const usersData = await usersDataResponse.json() as MultiGetByUsernameRequest;
            return usersData;
        } catch (error) {
            throw new Error(`Failed to get users by usernames: ${error.message}`);
        }
    }


    public static async getUsernameHistory(id: number, limit?: LimitPerRequest, sortOrder?: "Asc" | "Desc"): Promise<GetUsernameHistory> {
        try {
            if (!limit) {
                limit = 10;
            }
            if (!sortOrder) {
                sortOrder = "Desc";
            }
            const response = await fetch(`https://users.roblox.com/v1/users/${id}/username-history?limit=${limit}&sortOrder=${sortOrder}`, {
                method: "GET",
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json() as GetUsernameHistory;
            return data;
        } catch (error) {
            console.error("Error occurred while getting username history:", error);
            throw error;
        }
    }

    public static async searchUsernames(keyword: string, limit?: number): Promise<SearchUsersByKeywords> {
        try {
            const url = limit ? `https://users.roblox.com/v1/users/search?keyword=${keyword}&limit=${limit}` : `https://users.roblox.com/v1/users/search?keyword=${keyword}`;

            const usernamesDataResponse = await fetch(url, {
                method: "GET",
            });

            if (!usernamesDataResponse.ok) {
                throw new Error(`searchUsernames request failed with status ${usernamesDataResponse.status}`);
            }

            const usernamesData = await usernamesDataResponse.json() as SearchUsersByKeywords;

            return usernamesData;
        } catch (error) {
            console.error(`An error occurred while searching usernames: ${error.message}`);
            throw error;
        }
    }



}
