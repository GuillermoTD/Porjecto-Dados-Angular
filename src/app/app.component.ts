import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dadoIzquierda = '../../img/dice1.png';
  dadoDerecha = '../../img/dice4.png';
  numero1: number;
  numero2: number;

  tirarDado(): void {}
}
