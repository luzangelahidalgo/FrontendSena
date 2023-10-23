import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegistrarFacturaComponent } from './registrar-factura/registrar-factura.component';
import { FormularioUsuariosComponent } from './formulario-usuarios/formulario-usuarios.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { VerificacionFacturaComponent } from './verificacion-factura/verificacion-factura.component';
import { DetalleFacturaComponent } from './detalle-factura/detalle-factura.component';
import { InfoFacturaComponent } from './info-factura/info-factura.component';
import { AprobacionFacturaComponent } from './aprobacion-factura/aprobacion-factura.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },            
            //{ path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },            
            { path: 'usuarios', component: UsuariosComponent},
            { path: 'blank-page', loadChildren: () => import('./blank-page/blank-page.module').then(m => m.BlankPageModule) },
            { path: 'registro-factura', component: RegistrarFacturaComponent},
            { path: 'formulario-usuarios', component: FormularioUsuariosComponent },
            { path: 'listado-usuarios', component: ListadoUsuariosComponent },
            { path: 'verificacionFactura', component: VerificacionFacturaComponent },
            { path: 'detalleFactura', component: DetalleFacturaComponent },
            { path: 'infoFactura', component: InfoFacturaComponent },
            { path: 'aprobacionFactura', component: AprobacionFacturaComponent }
            
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
