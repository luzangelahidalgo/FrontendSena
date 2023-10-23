import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegistrarFacturaComponent } from './registrar-factura/registrar-factura.component';
import { FormularioUsuariosComponent } from './formulario-usuarios/formulario-usuarios.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { VerificacionFacturaComponent } from './verificacion-factura/verificacion-factura.component';
import { DetalleFacturaComponent } from './detalle-factura/detalle-factura.component';
import { InfoFacturaComponent } from './info-factura/info-factura.component';
import { AprobacionFacturaComponent } from './aprobacion-factura/aprobacion-factura.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        NgbDropdownModule
    ],
    providers:[
        
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, UsuariosComponent, RegistrarFacturaComponent, FormularioUsuariosComponent, ListadoUsuariosComponent, VerificacionFacturaComponent, DetalleFacturaComponent, InfoFacturaComponent, AprobacionFacturaComponent, ]
})
export class LayoutModule {}
