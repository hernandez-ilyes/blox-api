export interface UserData {
	description: string;
	created: string;
	isBanned: boolean;
	externalAppDisplayName: string;
	hasVerifiedBadge: boolean;
	id: number;
	name: string;
	displayName: string;
}

export interface UserDataFound {
	requestedUsername: string;
	hasVerifiedBadge: boolean;
	id: number;
	name: string;
	displayName: string;
}

export interface MultiGetByUsernameRequest {
	data: UserDataFound[];
}

export interface UserDataFoundMultiGetUserIdRequest {
	hasVerifiedBadge: boolean;
	id: number;
	name: string;
	displayName: string;
}

export interface MultiGetUserIdRequest {
	data: UserDataFoundMultiGetUserIdRequest[];
}

export interface Usernames {
	name: string;
}

export interface GetUsernameHistory {
	previousPageCursor: string;
	nextPageCursor: string;
	data: Usernames[];
}

export interface DataGetUserByKeywords {
	previousUsernames: string[];
	hasVerifiedBadge: boolean;
	id: number;
	name: string;
	displayName: string;
}

export interface SearchUsersByKeywords {
	previousPageCursor: string;
	nextPageCursor: string;
	data: DataGetUserByKeywords[];
}

export interface GetUserByUsernameOptions {
    usernames: string[],
    excludeBannedUsers: boolean
}

export interface GetUserByIdsOptions {
    userIds: number[],
    excludeBannedUsers: boolean
}

export type LimitPerRequest = 10 | 25 | 50 | 100