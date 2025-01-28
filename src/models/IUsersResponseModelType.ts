import {IUser} from "./IUser.ts";

export type IUsersResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    user: IUser[];
}