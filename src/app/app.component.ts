import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private translate: TranslateService,private primengConfig: PrimeNGConfig) { 
        this.translate.addLangs(['en','es']);
        const lang = this.translate.getBrowserLang();
        if(lang !== 'en' && lang !== 'es'){
        this.translate.setDefaultLang('en');
        }
        else{
        this.translate.use(lang);
        }
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
