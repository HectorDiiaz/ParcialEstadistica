export interface Juego {
    id: number;
    titulo: string;
    fecha: string;
    empresa: string;
    clasificacion: string;
    nresenas: number;
    genero: string;
    vjugado: number;
    npendientes: number;
    ndeseos: number;
    jactivos: number;
  }
  
  export class JuegoImpl implements Juego {
    id: number;
    titulo: string;
    fecha: string;
    empresa: string;
    clasificacion: string;
    nresenas: number;
    genero: string;
    vjugado: number;
    npendientes: number;
    ndeseos: number;
    jactivos: number;
  
    constructor() {
      this.id = 0;
      this.titulo = '';
      this.fecha = '';
      this.empresa = '';
      this.clasificacion = '';
      this.nresenas = 0;
      this.genero = '';
      this.vjugado = 0;
      this.npendientes = 0;
      this.ndeseos = 0;
      this.jactivos = 0;
    }
  }