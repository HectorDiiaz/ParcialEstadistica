import { Injectable } from '@angular/core';
import { Juego } from './videojuego.interface';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VideoJuegosServiceService {
  private baseUrl:string = "http://estadistica.icoders.com.co/api/api.php"
  constructor(private http:HttpClient) { }


  getGames():Observable<Juego[]>{
    let  url =this.baseUrl;
    let header=new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Origin', 'http://localhost');
    return this.http.get<Juego[]>(url, { headers: header }).pipe(
      catchError(error => {
        console.log('Error en la solicitud:', error);
        // Puedes realizar acciones de manejo de errores aquí, como mostrar un mensaje al usuario o realizar alguna otra acción necesaria
        return throwError('Ocurrió un error en la solicitud. Por favor, intenta nuevamente más tarde.');
      }));    
    }

    insertGame(juego: Juego): Observable<any> {
      const url = this.baseUrl;
      console.log("JUEGO:",juego);
      
      const header = new HttpHeaders().set('Content-Type', 'application/json');
      header.append('Access-Control-Allow-Origin', 'http://localhost');
      return this.http.post(url, juego, { headers: header }).pipe(
        catchError(error => {
          console.log('Error en la solicitud:', error);
          // Puedes realizar acciones de manejo de errores aquí, como mostrar un mensaje al usuario o realizar alguna otra acción necesaria
          return throwError('Ocurrió un error en la solicitud. Por favor, intenta nuevamente más tarde.');
        })
      );
    }
  
    deleteGame(id: number): Observable<any> {
      const url = `${this.baseUrl}/${id}`;
      const header = new HttpHeaders().set('Content-Type', 'application/json');
      header.append('Access-Control-Allow-Origin', 'http://localhost');
      return this.http.delete(url, { headers: header }).pipe(
        catchError(error => {
          console.log('Error en la solicitud:', error);
          // Puedes realizar acciones de manejo de errores aquí, como mostrar un mensaje al usuario o realizar alguna otra acción necesaria
          return throwError('Ocurrió un error en la solicitud. Por favor, intenta nuevamente más tarde.');
        })
      );
    }
}

