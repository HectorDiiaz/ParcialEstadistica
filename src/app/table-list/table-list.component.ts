import { Component, OnInit } from '@angular/core';
import { VideoJuegosServiceService } from 'app/services/video-juegos-service.service';
import { Juego } from 'app/services/videojuego.interface';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  lista:Juego[];

  constructor(
    private serviceJuegos:VideoJuegosServiceService
    ) { }

  ngOnInit() {

    this.serviceJuegos.getGames().subscribe(
      (juegos: Juego[]) => {
        console.log(juegos);
        this.lista= juegos;
      },
      (error: any) => {
        console.log('Error al obtener las construcciones:', error);
      }
    );
  }
}
