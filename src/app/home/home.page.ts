import { Component } from '@angular/core';
import { IonRange } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  peso: string='';
  altura: string= '';
  sexo: string= '';
  userInput: string = '';

  resp1: string = '';
  imc: string = '';
  massa: string = '';
  gcb: string = '';
  gorduraCorporal: string = '';
  saudeGeral: string = '';


  constructor() {}

  botaoSaude() {



  }

//   IMC com a categoria correspondente
//   Massa Muscular estimada
//   Gasto Calórico Basal (GCB)
//   Percentual de Gordura Corporal
//   Análise de saúde geral com recomendações

}
