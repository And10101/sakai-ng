export class CompaniesModel{
    tenantId?:string;
    identifier?:string;
    name!:string;
    connectionString?:string;
    csAppId?:string;
    description?:string;
    csTenantId?:string;
    dbName?:string;
    tenantSettings?:object;
    isDelete?:number;
    lastInsert?:Date;
    lastUpdate?:Date;
}