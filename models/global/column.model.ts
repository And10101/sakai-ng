import { FieldTypes } from "global/enumeration/field-types.enum";

export class ColumnModel{
    columnDef!:string;
    header!:string;
    cell!: (element:any, columnDef:any)=>{};
    type?:FieldTypes;
    size?:Number;
    index?:Number;
    
}