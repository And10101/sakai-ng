export class ParkingLotsModel{
    parkingLotId?:string;
    parkingLotName!:string;
    parkingLotAddress!:string;
    parkingLotLatitude!:number;
    parkingLotLongitude!:number;
    parkingLotDescription!:string;
    parkingLotSettings?:object;
    isDelete?:number;
    lastInsert?:Date;
    lastUpdate?:Date;
}

export class ParkingLotsCreateModel{
    parkingLotName!:string;
    parkingLotAddress!:string;
    parkingLotLatitude!:number;
    parkingLotLongitude!:number;
    parkingLotDescription!:string;
    parkingLotSettings!:string;
}