import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { faTable } from '@fortawesome/free-solid-svg-icons';
// import { faRobot } from '@fortawesome/free-solid-svg-icons';
// import { faClipboard } from '@fortawesome/free-solid-svg-icons';
// import { faBoxes } from '@fortawesome/free-solid-svg-icons';
//import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
import { NgxSpinnerService } from 'ngx-spinner';

import { Router } from '@angular/router';
import { LoginService } from '../../service/login/login.service';
import { LoginModel } from 'models/login/login.model';
import { GlobalFunctionsService } from '../../service/utils/global_functions.service';
declare const google: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit {

    valCheck: string[] = ['remember'];

    password!: string;

    login: FormGroup;
    clientid: string;
    // faTable = faTable;
    // faRobot = faRobot;
    // faClipboard = faClipboard;
    // faBoxes = faBoxes;

    flag: boolean = false;


    slideConfig2 = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '0',
        slidesToShow: 1,
        speed: 500,
        dots: true,
    };
    private el: HTMLElement;


    constructor(public layoutService: LayoutService,private fb: FormBuilder, private messageService:MessageService, 
                private router: Router,private loginService: LoginService, private spinner: NgxSpinnerService, el: ElementRef,
                private ngZone: NgZone,private glovalService: GlobalFunctionsService) 
    { 
        this.el = el.nativeElement;
        this.login = this.fb.group({
            usuario: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {
        this.ngZone.run(() => {
            this.spinner.hide();
            google.accounts.id.initialize({
            client_id: this.clientid,
            callback: this.handleCredentialResponse.bind(this),
            auto_select: false,
            cancel_on_tap_outside: true
            });
            google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "large" }
            );
            google.accounts.id.prompt((notification: PromptMomentNotification) => { });
        });
    }

    loginTry(): void {
        if(this.login.valid){
          const usuario: LoginModel = {
            email: this.login.value.usuario,
            password: this.login.value.password
          }
          this.loginService.login(usuario).subscribe({
                next:(value) => {
                    //console.log("Value ",value);
                    if(value && value.token){
                        this.loginService.setSessionStorage(value.token);
                        this.glovalService.getUserInfo();
                        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Acceso permitido'})
                        //this.toastr.success("Acceso permitido");
                        this.router.navigate(['/pages/crud']);
                    }
                },
                error: (err) => {
                    console.error("Ha ocurrido un error ",err);
                    this.messageService.add({ severity: 'error', summary: 'Error'});
                    //this.toastr.error(err, 'Error');
                    this.login.reset();
                },
            })
        }
    }

    async handleCredentialResponse(response: CredentialResponse) {
        this.ngZone.run(() => {
          // this.spinner.show()
          // const credencial: CredencialModel = {
          //   credencial: response.credential
          // }
          // this.loginService.LoginWithGoogle(credencial).subscribe(x => {
          //   console.log(x);
          //   if (x.token != null) {
          //     this.toastr.success('Acceso permitido!!')
          //     this.loginService.setLocalStorage(x.token);
          //     this.spinner.hide();
          //     this.router.navigate(['/home']);
    
          //   } else {
          //     this.spinner.hide();
          //     const dialogConfig = new MatDialogConfig();
          //     dialogConfig.maxHeight = "92vh"
          //     dialogConfig.maxWidth = "92vw"
          //     var id = response.credential;
          //     // this._SetDataService.emitEvent<string>(EnumKeys.key.toString(), id)
          //     const dialogRef = this.dialog.open(LoginGoogleComponent, dialogConfig);
          //     dialogRef.afterClosed().subscribe(x => {
          //       this.router.navigate(['/home']);
          //       this.spinner.hide();
    
          //     })
          //   }
    
          // }, error => {
          //   this.spinner.hide();
          // }
          // );
        });
    }
}
