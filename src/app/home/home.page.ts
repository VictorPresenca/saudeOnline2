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
  idade: string = '';

  parametros: string = '';
  imc: string = '';
  massa: string = '';
  porcentagemMagra: string = '';
  gcb: string = '';
  gorduraCorporal: string = '';

  feedback: string = ''; //(saude geral)
  indicacao: string = '';

  constructor() {}

  botaoSaude() {

    this.imc = ((Number(this.peso) / ((Number(this.altura) / 100) * (Number(this.altura) / 100))).toFixed(2)).toString();
    console.log(`IMC: ${this.imc}`);

    if (this.sexo === "Masculino"){

      // Massa magra estimada
      this.massa = ((0.407 * Number(this.peso) + 0.267 * Number(this.altura) - 19.2).toFixed(2)).toString();
      console.log(`Massa magra estimada: ${this.massa}`);

      // porcentagem de massa magra
      this.porcentagemMagra = ((Number(this.massa) / Number(this.peso)) * 100).toFixed(2);
      console.log(`Porcentagem de massa magra: ${this.porcentagemMagra}%`);

      // Gasto calórico basal
      this.gcb = ((88.362 + (13.397 * Number(this.peso)) + (4.799 * Number(this.altura)) - (5.677 * Number(this.idade))).toFixed(2)).toString();
      console.log(`Gasto calórico basal: ${this.gcb}`);
      
      // Gordura corporal
      this.gorduraCorporal = ((1.2 * Number(this.imc) + 0.23 * Number(this.idade) - 10.8 * 1 - 5.4).toFixed(0)).toString();
      console.log(`Gordura corporal: ${this.gorduraCorporal}` );

      if (this.peso === '' || this.altura === '' || this.idade === ''){
        
        alert('Preencha os campos corretamente'); // Verificação
        
      } else if (Number(this.imc) < 18.5 && Number(this.porcentagemMagra) < 60 && Number(this.gcb) < 1500 && Number(this.gorduraCorporal) < 5){ 
        
        // 1 IMC Abaixo, Massa Magra Abaixo, GCB Abaixo, Percentual de Gordura Abaixo
        this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
        this.feedback = `FEEDBACK: Você pode estar com baixo peso corporal e um metabolismo lento, o que pode indicar falta de nutrientes e músculo. Consultar um médico ou nutricionista pode ajudar a equilibrar sua alimentação e atividades.`;
        this.indicacao = "INDICAÇÃO: Invista em uma alimentação rica em calorias saudáveis, focando em proteínas e carboidratos complexos para ganhar massa muscular. Consulte um nutricionista e considere incluir exercícios de força na sua rotina.";

    } else if (Number(this.imc) < 18.5 && Number(this.porcentagemMagra) < 60 && Number(this.gcb) > 1500 || (Number(this.gcb) < 2000 && Number(this.gorduraCorporal) > 5) || Number(this.gorduraCorporal) < 20){
        
        // 2 IMC Abaixo, Massa Magra Abaixo, GCB Normal, Percentual de Gordura Normal
        this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
        this.feedback = `FEEDBACK: Seu peso está abaixo do ideal, mas seu percentual de gordura e metabolismo estão normais.`;
        this.indicacao = "INDICAÇÃO: Aumente sua ingestão calórica e concentre-se em exercícios de resistência para ganhar massa magra. Aumentar a musculatura pode melhorar sua saúde a longo prazo.";

    } else if (Number(this.imc) < 18.5 && Number(this.porcentagemMagra) > 60 || (Number(this.porcentagemMagra) < 80 && Number(this.gcb) > 1500) || (Number(this.gcb) < 2000 && Number(this.gorduraCorporal) > 5) || Number(this.gorduraCorporal) < 20){
        
        // 3 IMC Abaixo, Massa Magra Normal, GCB Normal, Percentual de Gordura Normal
        this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
        this.feedback = `FEEDBACK: Seu peso está abaixo do ideal, mas sua composição corporal está bem equilibrada com uma quantidade saudável de massa magra e gordura.`;
        this.indicacao = "INDICAÇÃO: Considere aumentar um pouco o peso corporal para alcançar um nível mais saudável. Focar em uma dieta equilibrada e exercícios pode ajudar a otimizar sua saúde.";

    } else if (Number(this.imc) < 18.5 && Number(this.porcentagemMagra) > 80 && Number(this.gcb) > 2000 && Number(this.gorduraCorporal) > 5 || Number(this.gorduraCorporal) < 20){
        
        // 4 IMC Abaixo, Massa Magra Acima, GCB Acima, Percentual de Gordura Normal
        this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
        this.feedback = `FEEDBACK: Seu corpo tem uma boa quantidade de massa muscular e metabolismo elevado, o que é positivo, mas seu peso ainda está abaixo do ideal.`;
        this.indicacao = "INDICAÇÃO: Continue com sua rotina de exercícios focados em resistência e ajuste a alimentação para garantir que você esteja recebendo calorias suficientes para apoiar sua musculatura e saúde.";

    }else if (Number(this.imc) < 18.5 && Number(this.porcentagemMagra) < 60 && Number(this.gcb) > 2000 && Number(this.gorduraCorporal) > 5) { 
        
        // 5 IMC Abaixo, Massa Magra Abaixo, GCB Acima, Percentual de Gordura Acima
        this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
        this.feedback = `FEEDBACK: Seu IMC está abaixo do ideal, mas seu metabolismo está acelerado, e você tem um pouco mais de gordura corporal. Isso pode indicar a necessidade de focar mais na musculação e controle alimentar.`;
        this.indicacao = "INDICAÇÃO: Aumente sua ingestão calórica com alimentos nutritivos para ganhar massa muscular, mas mantenha um controle da gordura corporal. Considerar exercícios de resistência e um ajuste na dieta pode ser benéfico.";

    }else if (Number(this.imc) >= 18.5 && Number(this.imc) <= 24.9 && Number(this.porcentagemMagra) < 60 && Number(this.gcb) < 1500 && Number(this.gorduraCorporal) < 20) { 
        
        // 6 IMC Normal, Massa Magra Normal, GCB Normal, Percentual de Gordura Normal
        this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
        this.feedback = `FEEDBACK: Seu IMC está normal, mas sua massa magra e metabolismo estão abaixo do ideal.`;
        this.indicacao = "INDICAÇÃO: Focar em aumentar a massa muscular com uma alimentação mais rica em proteínas e calorias saudáveis pode otimizar seus resultados. Exercícios de resistência são altamente recomendados.";

    } else if (Number(this.imc) >= 18.5 && Number(this.imc) <= 24.9 && Number(this.porcentagemMagra) > 80 && Number(this.gcb) > 2000 && Number(this.gorduraCorporal) >= 5 && Number(this.gorduraCorporal) <= 20) { 
        
        // 7 IMC Normal, Massa Magra Acima, GCB Acima, Percentual de Gordura Normal
        this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
        this.feedback = `FEEDBACK: Você tem uma boa quantidade de massa muscular e um metabolismo elevado, com um percentual de gordura corporal saudável.`;
        this.indicacao = "INDICAÇÃO: Continue com o treino de força e monitorando sua dieta. Mantenha o equilíbrio entre músculos e gordura para otimizar sua saúde a longo prazo.";

    } else if (Number(this.imc) >= 18.5 && Number(this.imc) <= 24.9 && Number(this.porcentagemMagra) < 60 && Number(this.gcb) > 2000 && Number(this.gorduraCorporal) < 5) { 
        
        // 8 IMC Normal, Massa Magra Abaixo, GCB Acima, Percentual de Gordura Abaixo
        this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
        this.feedback = `FEEDBACK: Seu IMC está normal, mas sua massa magra está abaixo do ideal, apesar de ter um gasto calórico elevado e gordura corporal baixa.`;
        this.indicacao = "INDICAÇÃO: Aumente sua ingestão calórica, focando em proteínas para ganhar massa muscular. Um treino de resistência ajudará a melhorar sua composição corporal.";

    } else if (Number(this.imc) > 24.9 && Number(this.porcentagemMagra) < 60 && Number(this.gcb) < 1500 && Number(this.gorduraCorporal) > 20) { 
        
        // 9 IMC Acima, Massa Magra Abaixo, GCB Abaixo, Percentual de Gordura Acima
        this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
        this.feedback = `FEEDBACK: Seu IMC está elevado, e você tem baixa massa magra, além de um alto percentual de gordura.`;
        this.indicacao = "INDICAÇÃO: Reduzir a gordura corporal e aumentar a massa magra é essencial. Focar em exercícios de força e controlar a alimentação pode ser um bom começo.";

    } else if (Number(this.imc) > 24.9 && Number(this.porcentagemMagra) < 60 && Number(this.gcb) >= 1500 && Number(this.gorduraCorporal) > 20) { 
        
        // 10 IMC Acima, Massa Magra Abaixo, GCB Abaixo, Percentual de Gordura Acima
        this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
        this.feedback = `FEEDBACK: Seu IMC está elevado devido ao excesso de gordura e baixa massa magra, mas seu metabolismo está normal.`;
        this.indicacao = "INDICAÇÃO: Considerar reduzir a gordura corporal e aumentar a massa muscular por meio de exercícios de resistência e ajustes na alimentação. Focar em uma dieta balanceada será essencial.";

    } else if (Number(this.imc) > 24.9 && Number(this.porcentagemMagra) >= 60 && Number(this.porcentagemMagra) <= 80 && Number(this.gcb) > 2000 && Number(this.gorduraCorporal) > 20) { 
        
        // 11 IMC Acima, Massa Magra Normal, GCB Acima, Percentual de Gordura Acima
        this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
        this.feedback = `FEEDBACK: Seu IMC está elevado devido ao excesso de gordura, mas você tem uma boa quantidade de massa magra e metabolismo acelerado.`;
        this.indicacao = "INDICAÇÃO: Continue com seu treino de resistência, mas também foque em reduzir a gordura corporal para otimizar sua saúde e performance.";

    } else if (Number(this.imc) > 24.9 && Number(this.porcentagemMagra) > 80 && Number(this.gcb) > 2000 && Number(this.gorduraCorporal) >= 5 && Number(this.gorduraCorporal) <= 20) { 
        
        // 12 IMC Acima, Massa Magra Acima, GCB Acima, Percentual de Gordura Normal
        this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
        this.feedback = `FEEDBACK: Seu peso elevado é devido ao grande desenvolvimento muscular, o que é positivo, mas você deve monitorar seu percentual de gordura corporal.`;
        this.indicacao = "INDICAÇÃO: Continue com a musculação e ajuste a dieta para manter um equilíbrio saudável entre músculos e gordura. Certifique-se de que seu percentual de gordura se mantenha saudável.";

    } else if (Number(this.imc) > 30 && Number(this.porcentagemMagra) < 60 && Number(this.gcb) < 1500 && Number(this.gorduraCorporal) > 30) { 
        
        // 13 IMC Obesidade, Massa Magra Abaixo, GCB Abaixo, Percentual de Gordura Acima
        this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
        this.feedback = `FEEDBACK: Você está com sobrepeso ou obesidade, com baixa massa magra e um alto percentual de gordura, o que pode comprometer sua saúde.`;
        this.indicacao = "INDICAÇÃO: Um plano de emagrecimento focado na redução da gordura corporal e aumento da massa magra é crucial. Consultar um nutricionista e começar um treino de resistência é essencial.";

    } else if (Number(this.imc) > 30 && Number(this.porcentagemMagra) >= 60 && Number(this.porcentagemMagra) <= 80 && Number(this.gcb) >= 1500 && Number(this.gorduraCorporal) > 30) { 
        
        // 14 IMC Obesidade, Massa Magra Normal, GCB Normal, Percentual de Gordura Acima
        this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
        this.feedback = `FEEDBACK: Seu IMC está na faixa de obesidade, mas sua massa magra está boa. A gordura corporal está elevada e deve ser tratada.`;
        this.indicacao = "INDICAÇÃO: Focar na perda de gordura corporal com uma dieta balanceada e exercícios cardiovasculares. Consultar um profissional para um plano de emagrecimento saudável.";

    } else if (Number(this.imc) > 30 && Number(this.porcentagemMagra) > 80 && Number(this.gcb) > 2000 && Number(this.gorduraCorporal) >= 5 && Number(this.gorduraCorporal) <= 20) { 
          
        // 15 IMC Obesidade, Massa Magra Acima, GCB Acima, Percentual de Gordura Normal
        this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
        this.feedback = `FEEDBACK: Seu IMC é elevado, mas a grande massa muscular pode ser um fator. A gordura corporal está no nível saudável.`;
        this.indicacao = "INDICAÇÃO: Continue com a musculação e verifique sua dieta para manter a saúde global e garantir que o excesso de peso não impacte negativamente sua saúde.";

    } else if (Number(this.imc) > 30 && Number(this.porcentagemMagra) < 60 && Number(this.gcb) > 2000 && Number(this.gorduraCorporal) > 30) { 
        
        // 16 IMC Obesidade, Massa Magra Abaixo, GCB Acima, Percentual de Gordura Acima
        this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
        this.feedback = `FEEDBACK: Você tem excesso de gordura corporal, com baixa massa magra e um metabolismo acelerado. Isso pode ser prejudicial a longo prazo.`;
        this.indicacao = "INDICAÇÃO: É essencial reduzir a gordura corporal e ganhar massa magra. Um plano nutricional e de exercícios adequado pode ajudar a melhorar sua saúde.";

    }
    

    }else if (this.sexo === "Feminino"){
        
        // Massa magra
        this.massa = (0.252 * Number(this.peso) + 0.473 * Number(this.altura) - 48.3).toString();
        console.log((Number(this.massa)).toFixed(2));

        // Gasto calórico basál
        this.gcb = (447.593 + (9.247 * Number(this.peso)) + (3.098 * Number(this.altura) - (4.330 * Number(this.idade))) ).toString();
        console.log(Number(this.gcb).toFixed(2))

        // Gordura corporal
        this.gorduraCorporal = (1.2 * Number(this.imc) + 0.23 * Number(this.idade) - 5.4).toString();
        console.log(Number(this.gorduraCorporal).toFixed(1));


        if (this.peso === '' || this.altura === '' || this.idade === '') {
        alert('Preencha os campos corretamente'); // Verificação
        } else if (Number(this.imc) < 18.5 && Number(this.porcentagemMagra) < 60 && Number(this.gcb) < 1500 && Number(this.gorduraCorporal) < 10) { 
            
            //1 IMC Abaixo, Massa Magra Abaixo, GCB Abaixo, Percentual de Gordura Abaixo
            this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
            this.feedback = `FEEDBACK: Você pode estar com baixo peso corporal e metabolismo lento, o que pode indicar falta de nutrientes e músculo. Consultar um médico ou nutricionista pode ajudar a equilibrar sua alimentação e atividades.`;
            this.indicacao = "INDICAÇÃO: Invista em uma alimentação rica em calorias saudáveis, focando em proteínas e carboidratos complexos para ganhar massa muscular. Consulte um nutricionista e considere incluir exercícios de força na sua rotina.";

        } else if (Number(this.imc) < 18.5 && Number(this.porcentagemMagra) < 60 && Number(this.gcb) > 1500 && Number(this.gorduraCorporal) >= 10 && Number(this.gorduraCorporal) <= 25) { 
            
            //2 IMC Abaixo, Massa Magra Abaixo, GCB Normal, Percentual de Gordura Normal
            this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
            this.feedback = `FEEDBACK: Seu peso está abaixo do ideal, mas seu percentual de gordura e metabolismo estão normais.`;
            this.indicacao = "INDICAÇÃO: Aumente sua ingestão calórica e concentre-se em exercícios de resistência para ganhar massa magra. Aumentar a musculatura pode melhorar sua saúde a longo prazo.";

        } else if (Number(this.imc) < 18.5 && Number(this.porcentagemMagra) >= 60 && Number(this.porcentagemMagra) <= 80 && Number(this.gcb) > 1500 && Number(this.gorduraCorporal) >= 10 && Number(this.gorduraCorporal) <= 25) { 
            
            //3 IMC Abaixo, Massa Magra Normal, GCB Normal, Percentual de Gordura Normal
            this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
            this.feedback = `FEEDBACK: Seu peso está abaixo do ideal, mas sua composição corporal está bem equilibrada com uma quantidade saudável de massa magra e gordura.`;
            this.indicacao = "INDICAÇÃO: Considere aumentar um pouco o peso corporal para alcançar um nível mais saudável. Focar em uma dieta equilibrada e exercícios pode ajudar a otimizar sua saúde.";

        } else if (Number(this.imc) < 18.5 && Number(this.porcentagemMagra) > 80 && Number(this.gcb) > 2000 && Number(this.gorduraCorporal) >= 10 && Number(this.gorduraCorporal) <= 25) { 
            
            //4 IMC Abaixo, Massa Magra Acima, GCB Acima, Percentual de Gordura Normal 
            this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
            this.feedback = `FEEDBACK: Seu corpo tem uma boa quantidade de massa muscular e metabolismo elevado, o que é positivo, mas seu peso ainda está abaixo do ideal.`;
            this.indicacao = "INDICAÇÃO: Continue com sua rotina de exercícios focados em resistência e ajuste a alimentação para garantir que você esteja recebendo calorias suficientes para apoiar sua musculatura e saúde.";

        } else if (Number(this.imc) >= 18.5 && Number(this.imc) <= 24.9 && Number(this.porcentagemMagra) < 60 && Number(this.gcb) < 1500 && Number(this.gorduraCorporal) >= 10 && Number(this.gorduraCorporal) <= 25) { 
            
            //5 IMC Normal, Massa Magra Abaixo, GCB Abaixo, Percentual de Gordura Normal
            this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
            this.feedback = `FEEDBACK: Seu IMC está normal, mas sua massa magra e metabolismo estão abaixo do ideal.`;
            this.indicacao = "INDICAÇÃO: Focar em aumentar a massa muscular com uma alimentação mais rica em proteínas e calorias saudáveis pode otimizar seus resultados. Exercícios de resistência são altamente recomendados.";

        } else if (Number(this.imc) >= 18.5 && Number(this.imc) <= 24.9 && Number(this.porcentagemMagra) >= 60 && Number(this.porcentagemMagra) <= 80 && Number(this.gcb) >= 1500 && Number(this.gorduraCorporal) >= 10 && Number(this.gorduraCorporal) <= 25) { 
            
            //6 IMC Normal, Massa Magra Normal, GCB Normal, Percentual de Gordura Normal
            this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
            this.feedback = `FEEDBACK: Parabéns! Você está dentro das faixas ideais de peso, musculatura e gordura corporal. Seu corpo está equilibrado e saudável.`;
            this.indicacao = "INDICAÇÃO: Mantenha um estilo de vida ativo e saudável com uma alimentação balanceada e exercícios regulares. Isso ajudará a manter seu corpo em ótimas condições a longo prazo.";
            
        } else if (Number(this.imc) >= 18.5 && Number(this.imc) <= 24.9 && Number(this.porcentagemMagra) > 80 && Number(this.gcb) > 2000 && Number(this.gorduraCorporal) >= 10 && Number(this.gorduraCorporal) <= 25) { 
            
            //7 IMC Normal, Massa Magra Acima, GCB Acima, Percentual de Gordura Normal
            this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
            this.feedback = `FEEDBACK: Você tem uma boa quantidade de massa muscular e metabolismo elevado, com um percentual de gordura corporal saudável.`;
            this.indicacao = "INDICAÇÃO: Continue com o treino de força e monitorando sua dieta. Mantenha o equilíbrio entre músculos e gordura para otimizar sua saúde a longo prazo.";

        } else if (Number(this.imc) >= 18.5 && Number(this.imc) <= 24.9 && Number(this.porcentagemMagra) < 60 && Number(this.gcb) > 2000 && Number(this.gorduraCorporal) < 10) { 
            
            //8 IMC Normal, Massa Magra Abaixo, GCB Acima, Percentual de Gordura Abaixo
            this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
            this.feedback = `FEEDBACK: Seu IMC está normal, mas sua massa magra está abaixo do ideal, apesar de ter um gasto calórico elevado e gordura corporal baixa.`;
            this.indicacao = "INDICAÇÃO: Aumente sua ingestão calórica, focando em proteínas para ganhar massa muscular. Um treino de resistência ajudará a melhorar sua composição corporal.";

        } else if (Number(this.imc) > 24.9 && Number(this.porcentagemMagra) < 60 && Number(this.gcb) < 1500 && Number(this.gorduraCorporal) < 10) { 
            
            //9 IMC Acima, Massa Magra Abaixo, GCB Abaixo, Percentual de Gordura Abaixo
            this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
            this.feedback = `FEEDBACK: Seu IMC está acima do ideal e sua massa magra e metabolismo estão abaixo do ideal, o que pode indicar que você possui gordura em excesso.`;
            this.indicacao = "INDICAÇÃO: É importante focar em uma alimentação balanceada e aumentar a ingestão de calorias saudáveis para otimizar o ganho de massa muscular. Exercícios de força e aeróbicos podem ajudar a melhorar sua saúde e composição corporal.";

        } else if (Number(this.imc) > 24.9 && Number(this.porcentagemMagra) < 60 && Number(this.gcb) > 1500 && Number(this.gorduraCorporal) >= 10 && Number(this.gorduraCorporal) <= 25) { 
            
            //10 IMC Acima, Massa Magra Abaixo, GCB Normal, Percentual de Gordura Normal
            this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
            this.feedback = `FEEDBACK: Seu IMC está acima do ideal, mas seu percentual de gordura está normal, com metabolismo adequado.`;
            this.indicacao = "INDICAÇÃO: É importante focar em exercícios que ajudem a aumentar sua massa muscular. Uma dieta focada em proteínas e calorias saudáveis pode te ajudar a melhorar a composição corporal e manter um peso saudável.";

        } else if (Number(this.imc) > 24.9 && Number(this.porcentagemMagra) >= 60 && Number(this.porcentagemMagra) <= 80 && Number(this.gcb) >= 1500 && Number(this.gorduraCorporal) >= 10 && Number(this.gorduraCorporal) <= 25) { 
            
            //11 IMC Acima, Massa Magra Normal, GCB Normal, Percentual de Gordura Normal
            this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
            this.feedback = `FEEDBACK: Seu IMC está acima do ideal, mas sua composição corporal está equilibrada com uma quantidade saudável de massa magra e gordura.`;
            this.indicacao = "INDICAÇÃO: Para melhorar ainda mais sua saúde, foque em exercícios para reduzir a gordura corporal e aumentar a massa magra. Isso ajudará a otimizar seu IMC e manter um corpo saudável a longo prazo.";
            
        } else if (Number(this.imc) > 24.9 && Number(this.porcentagemMagra) > 80 && Number(this.gcb) > 2000 && Number(this.gorduraCorporal) >= 10 && Number(this.gorduraCorporal) <= 25) { 
            
            //12 IMC Acima, Massa Magra Acima, GCB Acima, Percentual de Gordura Normal
            this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
            this.feedback = `FEEDBACK: Seu IMC está acima do ideal, mas você possui uma boa quantidade de massa muscular e um metabolismo elevado, com gordura corporal saudável.`;
            this.indicacao = "INDICAÇÃO: Continue com a prática de exercícios para manter e até aumentar sua massa magra, além de manter a dieta equilibrada. O foco deve ser reduzir um pouco o excesso de gordura para melhorar seu IMC e saúde geral.";

        } else if (Number(this.imc) > 24.9 && Number(this.porcentagemMagra) < 60 && Number(this.gcb) > 2000 && Number(this.gorduraCorporal) < 10) { 
            
            //13 IMC Acima, Massa Magra Abaixo, GCB Acima, Percentual de Gordura Abaixo
            this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
            this.feedback = `FEEDBACK: Seu IMC está elevado, sua massa magra está abaixo do ideal e seu gasto calórico está alto. Isso pode indicar que você tem mais gordura corporal que o ideal.`;
            this.indicacao = "INDICAÇÃO: Concentre-se em uma alimentação balanceada e comece a focar em exercícios para ganho de massa muscular. Isso ajudará a otimizar sua saúde e composição corporal.";

        } else if (Number(this.imc) > 24.9 && Number(this.porcentagemMagra) >= 60 && Number(this.porcentagemMagra) <= 80 && Number(this.gcb) > 2000 && Number(this.gorduraCorporal) < 10) { 
            
            //14 IMC Acima, Massa Magra Normal, GCB Acima, Percentual de Gordura Abaixo
            this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
            this.feedback = `FEEDBACK: Seu IMC está elevado, mas sua massa magra e metabolismo estão dentro do ideal. Seu percentual de gordura está abaixo do recomendado.`;
            this.indicacao = "INDICAÇÃO: Foque em reduzir a gordura corporal de maneira saudável com dieta e exercícios para otimizar seu IMC e melhorar a saúde a longo prazo.";

        } else if (Number(this.imc) > 24.9 && Number(this.porcentagemMagra) > 80 && Number(this.gcb) > 1500 && Number(this.gorduraCorporal) >= 10 && Number(this.gorduraCorporal) <= 25) { 
            
            //15 IMC Acima, Massa Magra Acima, GCB Normal, Percentual de Gordura Normal
            this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
            this.feedback = `FEEDBACK: Seu IMC está elevado, mas você possui uma excelente massa muscular e metabolismo elevado, o que compensa o excesso de peso.`;
            this.indicacao = "INDICAÇÃO: Continue com sua rotina de exercícios de resistência e ajuste sua dieta para manter a massa muscular e reduzir um pouco da gordura corporal.";

        } else if (Number(this.imc) > 24.9 && Number(this.porcentagemMagra) > 80 && Number(this.gcb) > 2000 && Number(this.gorduraCorporal) < 10) { 
            
            //16 IMC Acima, Massa Magra Acima, GCB Acima, Percentual de Gordura Acima
            this.parametros = `Seu imc é ${this.imc}. Seu percentual de massa magra estimada é ${this.porcentagemMagra}%. Seu gasto calórico basal é ${this.gcb}. Sua gordura corporal é ${this.gorduraCorporal}%`;
            this.feedback = `FEEDBACK: Seu IMC está elevado, mas você tem uma quantidade muito boa de massa muscular e um metabolismo acelerado. Seu percentual de gordura corporal está baixo, o que indica uma excelente forma física.`;
            this.indicacao = "INDICAÇÃO: Mantenha sua rotina de exercícios focada em resistência, alimentação equilibrada, e considere ajustar um pouco seu peso para otimizar ainda mais sua saúde.";

    }
    
    }else {
      alert('preencha o sexo');
    }

    }

    // calcular os parâmetros

    // IMC DEU CERTO
    // this.imc = (Number(this.peso) / ((Number(this.altura) / 100) * (Number(this.altura) / 100))).toString();
    // console.log(Number(this.imc).toFixed(2));
    
    // Massa magra para homens DEU CERTO
    // this.massa = (0.407 * Number(this.peso) + 0.267 * Number(this.altura) - 19.2).toString();
    // console.log((Number(this.massa)).toFixed(2));
    
    // Massa magra para mulheres DEU CERTO
    // this.massa = (0.252 * Number(this.peso) + 0.473 * Number(this.altura) - 48.3).toString();
    // console.log((Number(this.massa)).toFixed(2));

    // GCB para homens DEU CERTO
    // this.gcb = (88.362 + (13.397 * Number(this.peso)) + (4.799 * Number(this.altura)) - (5.677 * Number(this.idade)) ).toString();
    // console.log(Number(this.gcb).toFixed(2));

    // GCB para mulheres DEU CERTO
    // this.gcb = (447.593 + (9.247 * Number(this.peso)) + (3.098 * Number(this.altura) - (4.330 * Number(this.idade))) ).toString();
    // console.log(Number(this.gcb).toFixed(2))

    // Percentual de gordura corporal para homens DEU CERTO
    // this.gorduraCorporal = (1.2 * Number(this.imc) + 0.23 * Number(this.idade) - 10.8 * 1 - 5.4).toString();
    // console.log(Number(this.gorduraCorporal).toFixed(1));

    // Percentual de gordura corporal para mulheres DEU CERTO
    // this.gorduraCorporal = (1.2 * Number(this.imc) + 0.23 * Number(this.idade) - 5.4).toString();
    // console.log(Number(this.gorduraCorporal).toFixed(1));


    //   IMC com a categoria correspondente
    //   Massa Muscular estimada
    //   Gasto Calórico Basal (GCB)
    //   Percentual de Gordura Corporal
    //   Análise de saúde geral com recomendações

}
