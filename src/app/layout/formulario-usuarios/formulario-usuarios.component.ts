import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneralService } from 'src/app/shared';
import {Router} from '@angular/router';

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.css']
})
export class FormularioUsuariosComponent {

  form: FormGroup;


  constructor(
    public generalService: GeneralService,
    private fb: FormBuilder,
    private router:Router
    ) {
      this.form = this.fb.group({
        nombre: [''],
        apellido: [''],
        tipodeDocumento: [''],
        cedula: [''],
        fechaNacimiento: [''],
        cargo: [''],
        correo: [''],
        telefono: [''],
        usuario: [''],
        password: [''],
       
      });
      
    }

    async guardar(){
      console.log(this.form.value)
      await this.generalService.guardarUsuarios(this.form.value).toPromise();
      this.router.navigate(['listado-usuarios']);
    }
}
