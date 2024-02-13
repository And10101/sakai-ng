import { FieldTypes } from "global/enumeration/field-types.enum";

export class HeaderTableModel{
    name_column!:string;
    name_data!:string;
    type?:FieldTypes;
    size?:Number;
}
