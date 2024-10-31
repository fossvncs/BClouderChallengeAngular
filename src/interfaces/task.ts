import { User } from "./user";

export interface BCloudTask {

    id: number,
    title: string,
    description: string,
    created: Date,
    userID: number,
    user: User,
    taskStatus: any,
    active: boolean,
    deleted: Date,
    isDeleted: boolean

}