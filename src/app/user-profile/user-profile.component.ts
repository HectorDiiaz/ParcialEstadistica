import { Component, OnInit } from '@angular/core';
import { VideoJuegosServiceService } from 'app/services/video-juegos-service.service';
import { Juego } from 'app/services/videojuego.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  juego: Juego={
    id: 0,
    titulo: '',
    fecha: '',
    empresa: '',
    clasificacion: '',
    nresenas: 0,
    genero: '',
    vjugado: 0,
    npendientes: 0,
    ndeseos: 0,
    jactivos: 0
  };
  formulario: FormGroup;
  constructor(private service:VideoJuegosServiceService,
    private formBuilder: FormBuilder) {
    // this.formulario = new FormGroup({
    //   titulo: new FormControl('', Validators.required),
    //   fecha: new FormControl('', Validators.required),
    //   empresa: new FormControl('', Validators.required),
    //   clasificacion: new FormControl('', Validators.required),
    //   nresenas: new FormControl('', Validators.required),
    //   genero: new FormControl('', Validators.required),
    //   vjugando: new FormControl('', Validators.required),
    //   npendientes: new FormControl('', Validators.required),
    //   ndeseos: new FormControl('', Validators.required),
    //   jactivos: new FormControl('', Validators.required),
    //   // Otros campos del formulario
    // }); 
    
  }

  ngOnInit() { 
  }

  // submitForm() {
  //   if (this.myForm.valid) {
  //     // El formulario es válido, puedes enviar los datos
  //     this.guardarJuego()
  //     console.log(this.myForm.value);
  //   } else {
  //     // El formulario no es válido, muestra mensajes de error o realiza acciones adicionales
  //     console.log('Formulario incompleto');
  //   }
  // }
  
  guardarJuego(){

    this.service.insertGame(this.juego).subscribe(
      () => {
        // Lógica después de agregar el juego exitosamente
        alert('Juego agregado exitosamente');
      },
      (error) => {
        // Lógica de manejo de errores
        alert('Error al agregar el juego:' +error);
      }
    );
  }
  // validaForm(){
  //   let varResult=false;
  //   if(this.juego.titulo !='' && this.juego.clasificacion != 
  //   ){

  //   }
  // }
  limpiarJuego(){
    this.juego={
      id: 0,
      titulo: '',
      fecha: '',
      empresa: '',
      clasificacion: '',
      nresenas: 0,
      genero: '',
      vjugado: 0,
      npendientes: 0,
      ndeseos: 0,
      jactivos: 0
    };
  }
}
