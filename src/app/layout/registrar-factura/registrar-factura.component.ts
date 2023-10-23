import { Component } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GeneralService } from 'src/app/shared';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrar-factura',
  templateUrl: './registrar-factura.component.html',
  styleUrls: ['./registrar-factura.component.css']
})
export class RegistrarFacturaComponent {

  facturasRsp: Array<Factura> = [];
  facturaVisor: Factura | undefined;
  proveedores: Array<Proveedor> = [];
  itemsFacturasRsp: Array<Items> = [];
  showModal = false;
	closeResult = '';
  facturaForm: FormGroup;


  constructor(
    public generalService: GeneralService,
    private modalService: NgbModal,
    private fb: FormBuilder
    ) {
      this.facturaForm = this.fb.group({
        proveedor: [''],
        numeroFactura: [''],
        items: this.fb.array([]),
      });
    }

    get items() {
      return this.facturaForm.get('items') as FormArray;
    }
  
    agregarItem() {
      this.items.push(this.crearItemFormGroup());
    }
  
    eliminarItem(index: number) {
      this.items.removeAt(index);
    }
  
    private crearItemFormGroup() {
      return this.fb.group({
        producto: [''],
        cantidad: [''],
        precio: [''],
      });
    }
  

  async onSubmit() {
    console.log(this.facturaForm.value);
    await this.generalService.guardarFactura(this.facturaForm.value).toPromise();
    window.location.reload() 

  }

    async openCrear(content: any) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' }).result.then(
        (result) => {
          console.log("1");
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          console.log("2");
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );
    }

    async open(content: any, item: Factura) {
      this.facturaVisor = item;
      console.log( content);
      await this.generalService.obtenerItemsFactura(item.idFactura).subscribe(
        respuesta => {
            console.log('itemsFacturasRsp -> ', respuesta);
            this.itemsFacturasRsp = respuesta;
        },
        error => {
            console.log('error', error);
        }
    ); 
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
          console.log("1");
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          console.log("2");
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }

  async ngOnInit() {
    this.facturasRsp = await this.generalService.obtenerAprobacionFactura().toPromise();
    this.proveedores = await this.generalService.obtenerproveedores().toPromise();
}
}

interface Factura { 
  idFactura: number;
  fecha: string;
  nombreProveedor: string;
  total: number;
  estado: string;
  nitProveedor: number;
}

interface Items { 
  id: number;
  descripcion: string;
  precio: number;
  cantidad: number;
  idFactura: number;
}

interface Proveedor { 
  id: number;
  nombreRepresentatelegal: string;
  nitProveedor: number;
}