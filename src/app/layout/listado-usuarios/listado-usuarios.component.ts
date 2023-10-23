import { Component } from '@angular/core';
import { GeneralService } from 'src/app/shared';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent {


  rsp: Array<Usuarios> = [];
  
  constructor(
    public generalService: GeneralService
    ) {
    }

  async ngOnInit() {
    this.rsp = await this.generalService.obtenerUsuarios().toPromise();
    console.log(this.rsp)
    /*
    this.proveedores = await this.generalService.obtenerproveedores().toPromise();*/
}
}

interface Usuarios { 
  id: number;
  nombre: string;
  apellido: string;
  telefono: number;
  correo: string;
  password: string;
  cargo: string;
  cedula: number;
}
