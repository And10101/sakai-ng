import { SearchFilter } from "./search-filter.dto";

export class TableEventsDTO{
    page!:number;
    size!:number;
    sort!:SortTable[];
    direction?:string;
    filter!:string;
    columns!:string[];
}

export class NewTableEventsDTO{
    page!:number;
    size!:number;
    sort!:SortTable[];
    direction?:string;
    filters!:SearchFilter[];
}

export class SortTable{
    column!:string;
    direction!:string;
}

export class TableEventActions{
    data!:any;
    table!:TableEventsDTO;
}

export class TableEventUpdateActions{
    data!:any;
    state!:boolean;
    table!:TableEventsDTO;
}

export class TableEventsDTOResponse{
    data!:any[];
    pageSize!:number;
    totalCount!:number;
}

class Pageable{
    offset!:number;
    pageNumber!:number;
    pageSize!:number;
    paged!:number;
    unpaged!:boolean;
}