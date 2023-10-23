import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as ENV } from '../../../environments/environment';

@Injectable()
export class GeneralService {

    options: any;
    routeBaseApi: string = ENV.BASE_URL;

    constructor(private http: HttpClient) {
        this.options = {
            headers: {
                Accept: 'application/json',
                contentType: 'application/json'
            }
        };
    }

    login(data: any): Observable<any> {
        const ruta = this.routeBaseApi + 'login';
        return this.http.post(ruta, JSON.stringify(data), this.options.headers);

    }

    obtenerAprobacionFactura(): Observable<any> {
        const ruta = this.routeBaseApi + 'listadofactura';
        return this.http.get(ruta, this.options.headers);
    }

    obtenerproveedores(): Observable<any> {
        const ruta = this.routeBaseApi + 'proveedor'; 
        return this.http.get(ruta, this.options.headers);
    }

    obtenerItemsFactura(idFactura: number): Observable<any> {
        const ruta = this.routeBaseApi + 'listadoitemsfactura/'+ idFactura;
        return this.http.get(ruta, this.options.headers);
    }

    guardarFactura(data: any): Observable<any> {
        const ruta = this.routeBaseApi + 'factura';
        return this.http.post(ruta, data, this.options.headers);
    }

    obtenerUsuarios(): Observable<any> {
        const ruta = this.routeBaseApi + 'usuarios';
        return this.http.get(ruta, this.options.headers);
    }

    guardarUsuarios(data: any): Observable<any> {
        const ruta = this.routeBaseApi + 'usuarios';
        return this.http.post(ruta, data, this.options.headers);
    }
}
