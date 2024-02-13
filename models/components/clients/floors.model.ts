export class FloorModel{
    floorId?:string;
    blockId!:string;
    floorName!:string;
    floorImage?:string;
    floorMaxHeight!:number;
    floorIsCovered!:number;
    floorDescription?:string;
    floorSettings?:object;
    insertArchive?:object;
    isDelete?:number;
    lastInsert?:Date;
    lastUpdate?:Date;
}

export class urlImgModel{
    url?:string;
}

export class path{
    path?:string
}

export class CanvasModel{
    canvas?:string;
}