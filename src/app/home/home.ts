import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  nome: string = '';

  contador: number = 0;
    incrementar() {this.contador++;}
    decrementar() {this.contador--;}

    mostrar = false;

    frutas: string[] = ['Maçã', 'Banana', 'Laranja'];
    selecionada = '';

    cor: string = 'blue';
}
