export class UserModel{
    userId?:string;
    userTypeId!:string;
    userName!:string;
    userImage?:string;
    normalizedUserName?:string;
    firstName!:string;
    lastName!:string;
    email!:string;
    normalizedEmail?:string;
    emailConfirmed?:number;
    passwordHash?:string;
    phoneNumber!:string;
    phoneNumberConfirmed?:number;
    twoFactorEnabled?:number;
    userTypeName?:string;
    tenantId!:string;
    isActive?:number;
    isDelete?:number;
    lastInsert?:Date;
    lastUpdate?:Date;
    userSettings?:object;
}

export class CreateUserModel{
    firstName!: string;
    lastName!: string;
    email!: string;
    phoneNumber!: string;
    tenantId!: string;
    password?: string;
    userSettings?:object;
}
