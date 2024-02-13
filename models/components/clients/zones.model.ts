export class ZonesModel{
    zoneId!:string;
    floorId!:string;
    zoneName!:string;
    zoneDescription?:string;
    zoneSettings?:object;
    isDelete?:number;
    lastInsert?:Date;
    lastUpdate?:Date;
}