export class DeviceModel{
    tenantId!:string;
    deviceId?:string;
    zoneId!:string;
    deviceName!:string;
    deviceType!:string;
    deviceDescription?:string;
    deviceSettings?:object;
    isDelete?:number;
    lastInsert?:Date;
    lastUpdate?:Date;
}

export class DeviceEditDTO
{
    deviceName!:string
    deviceType!:string
    deviceDescription!:string
}