import { Injectable, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { LoginService } from "../login/login.service";
// import { TableEventsDTOResponse } from "DTO/table-events.dto";
import { MatDialog } from "@angular/material/dialog";
// import { NotificationComponent } from "src/app/popups/notification/notification.component";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
    providedIn: 'root',
})
export class GlobalFunctionsService implements OnDestroy{

    private _roleUser!:any;
    private _tenantId!:any;
    private _userInfo!:any;

    subscription:Subscription = new Subscription();

    /////////////////////////

    public get getRoleUser(): any {
        return this._roleUser;
    }

    public set setRoleUser(data: any) {
        this._roleUser = data;
    }

    public get getTenantId(): any {
        return this._tenantId;
    }

    public set setTenantId(data: any) {
        this._tenantId = data;
    } 

    public set setUser(data:any){
        this._userInfo = data;
    }

    public get getUser(){
        return this._userInfo;
    }

    constructor(private loginService: LoginService, private dialog:MatDialog, private translateService:TranslateService) { }

    getUserInfo(){
        let userData = this.loginService.getTokenDecoded();
        if(userData){
            this.setUser = userData;
            this.setTenantId = userData.TenantId;
            return userData;
        }
        return null;
    }

    // StructDataTable(dataTable: TableEventsDTOResponse) {
    //     if (dataTable.data != null && dataTable.data != undefined && dataTable.data.length > 0) {
    //         var ELEMENT_DATA: any[] = dataTable.data;
    //         var ELEMENT_HEADERS: string[] = [];
    //         if (ELEMENT_DATA.length > 0) {
    //             ELEMENT_HEADERS = Object.keys(ELEMENT_DATA[0]);
    //         }
    //         var LENGTH_DATA = dataTable.totalCount;
    //         var PAGE_SIZE = dataTable.pageSize;
    
    //         return {
    //             element_data: ELEMENT_DATA,
    //             element_header: ELEMENT_HEADERS,
    //             length_data: LENGTH_DATA,
    //             page_size: PAGE_SIZE,
    //         };
    //     }
    //     return null;
    // }

    // ErrorPopup(msg: string, param: string | undefined = undefined) {
    //     this.dialog.open(NotificationComponent, {panelClass: 'popup-error',
    //         data: {
    //             message: this.translateService.instant(msg, { param: param }),
    //             type: 'error',
    //         },
    //     });
    // }
    
    // SuccessPopup(msg: string, auto_close:boolean = false) {
    //     this.dialog.open(NotificationComponent, {
    //         panelClass: 'popup-success',
    //         data: { message: this.translateService.instant(msg), type: 'success', auto_close },
    //     });
    // }
    
    // InformativePopup(msg: string) {
    //     this.dialog.open(NotificationComponent, {
    //         panelClass: 'popup-informative',
    //         data: { message: this.translateService.instant(msg), type: 'info' },
    //     });
    // }
    
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
      }
}