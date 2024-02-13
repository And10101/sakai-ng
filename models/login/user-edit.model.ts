import { InsertArchiveModel } from "../global/insert-archive.model"

export class UserEditModel {
    userId!:number
    userName!:string
    userImage!:string
    firstName!:string
    lastName!:string
    email!:string
    phoneNumber!:string
    tenantId!:string
    userTypeId!:number
    insertArchive?:InsertArchiveModel
}
