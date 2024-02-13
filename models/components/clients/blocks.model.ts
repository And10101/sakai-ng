export class BlockModel{
    blockId?:string;
    parkingLotId!:string;
    blockName!:string;
    blockDescription!:string;
    blockSettings?:object;
    isDelete?:number;
    lastInsert?:Date;
    lastUpdate?:Date;
}

export class createBlockModel{
    parkingLotId!:string;
    blockName!:string;
    blockDescription!:string;
}