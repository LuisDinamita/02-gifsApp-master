
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {
 

  private _apiKey: string = 'vYMVsg5GWj4oNQxIZtvJgYH0pVxkCOR9';
  private _servicioURL: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

//ToDo cambiar el tipo any por el correspondiente
  public resultado : Gif [] = []

  get historial(): string[] {
    /* Devolviendo una copia de la matriz. */
    return [...this._historial];
  }
  constructor(private http: HttpClient) {
    //forma 1
  //   if(localStorage.getItem('historial')) {
  //     this._historial = JSON.parse(localStorage.getItem('historial')!);
  // }
    
  this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
  this.resultado = JSON.parse(localStorage.getItem('resultados')!) || [];

 
  
  }
  
  buscarTermino(query:string): void {
 

    query = query.trim().toLowerCase();

    if(!this.historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this.historial.slice(0,10);

   
      localStorage.setItem('historial', JSON.stringify(this._historial));
      
      
      
    }
    
    const params = new HttpParams()
    .set('api_key', this._apiKey)
    .set('q', query)
    .set('limit', '10');


    
    this.http.get<SearchGifsResponse>(`${this._servicioURL}/search`, {params}).subscribe( (resp) => { 
  this.resultado = resp.data;
  localStorage.setItem('resultados', JSON.stringify(this.resultado));
  // console.log(resp);
  
    
      
    })




  //  fetch(`https://api.giphy.com/v1/gifs/trending?api_key=vYMVsg5GWj4oNQxIZtvJgYH0pVxkCOR9&q=dragon ball z&limit=10`).then( response =>{ 
  //   response.json().then ( resp => {
  //     console.log(resp);
  
  //   })
  // });

  }
}
