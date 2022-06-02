import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  get resultados (){
    return this.GifsService.resultado;
  
  }
  
  constructor(private GifsService : GifsService) { }

  ngOnInit(): void {
  }

}
