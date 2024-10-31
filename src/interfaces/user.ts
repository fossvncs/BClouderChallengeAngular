import { BCloudTask } from "./task"

export interface User {
    
    active: boolean,
    available: boolean,
    created: Date,
    dateOfBirth: Date,
    deleted?: Date,
    email: string,
    id: number, 
    isDeleted: boolean,
    name: string
    tasks: BCloudTask[]

}