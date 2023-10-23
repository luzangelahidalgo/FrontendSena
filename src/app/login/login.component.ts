import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/* import { routerTransition } from '../router.animations';
import { GeneralService } from '../shared'; */
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    //animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, 
        //public generalService: GeneralService
        ) {}

    ngOnInit() {}

    miClick(){
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/'])

        console.log("aqui llamamos el back para que valide el usuario y pass");
    }
    onLoggedin() {
        alert("aqui voy");
  /*       this.generalService.login().subscribe(
            res => {
                console.log('res', res);
            },
            error => {
                console.log('error', error);
            }
        ); */
        // localStorage.setItem('isLoggedin', 'true');
    }
}
