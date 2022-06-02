import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
/* Un decorador que se usa para inyectar una referencia a un elemento DOM en un componente o directiva. */
@ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  

constructor(private gifsService: GifsService) { }

buscar() {
  const valor = this.txtBuscar.nativeElement.value;
    if(valor.trim().length === 0) {
      return;
    }

    this.txtBuscar.nativeElement.value = '';
    this.gifsService.buscarTermino(valor);
    
  }

}
