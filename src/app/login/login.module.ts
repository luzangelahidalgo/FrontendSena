import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
//import { GeneralService } from '../shared';
@NgModule({
    imports: [CommonModule, 
        //TranslateModule, 
        LoginRoutingModule],
    providers: [
        //GeneralService
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
