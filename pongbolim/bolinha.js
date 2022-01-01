let xBolinha = 300;
let yBolinha = 200;
let diametro = 10;
let raio = diametro / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function mostraBolinha(){
  fill(255);
  circle(xBolinha, yBolinha, diametro); 
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;  
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;    
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function posicaoInicialBolinha(){
  xBolinha = 300;
  yBolinha = 200;
}

function reiniciarJogo(){
  if (golMarcado == true){
    posicaoInicialBolinha();
    posicaoInicialJogadores();
  }
  golMarcado = false;  
}



