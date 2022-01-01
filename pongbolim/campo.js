let quatroLinhasCampo = [3, 3, 593, 394]; //valores x, y, comprimento, altura
let pequenaAreaMeuTime = [3, 150, 30, 100]; //valores x, y, comprimento, altura
let pequenaAreaOponente = [566, 150, 30, 100]; //valores x, y, comprimento, altura
let grandeAreaMeuTime = [3, 100, 70, 200]; //valores x, y, comprimento, altura
let grandeAreaOponente = [526, 100, 70, 200]; //valores x, y, comprimento, altura
let marcaPenaltyMeuTime = [50, 200, 3]; // valores do circulo
let marcaPenalyOponente = [550, 200, 3]; // valores do circulo
let marcaMeioCampo = [300, 200, 4]; // valores do circulo
let circuloCentral = [300, 200, 100]; // valores do circulo
let linhaMeioCampo = [300, 3, 300, 394]; // valores da linha
let arcoGrandeArea = [73, 200, 80, 110, 11, 20.4];// arc da grande area
let arcoGrandeAreaOponente = [518, 200, 70, 110, 7.7, 30];// arc da grande area
let arcoEscanteioSuperiorEsquerdo  = [5, 5, 40, 40, 0, 1.57]; // arc escanteio
let arcoEscanteioSuperiorDireito  = [594, 5, 40, 40, 1.57, 3.14];
let arcoEscanteioInferiorEsquerdo  = [594, 395, 40, 40, 3.14, 3.14 + 1.57];
let arcoEscanteioInferiorDireito  = [5, 389, 35, 35, 3.14 + 1.57, 0.3895];

function mostraCampo(){
  //campo
  noFill();
  stroke(255);
  strokeWeight(2);
  rect(quatroLinhasCampo[0], quatroLinhasCampo[1], quatroLinhasCampo[2], quatroLinhasCampo[3]);
  
  //pequena area meu time
  noFill();
  stroke(255);
  strokeWeight(2);
  rect(pequenaAreaMeuTime[0], pequenaAreaMeuTime[1], pequenaAreaMeuTime[2], pequenaAreaMeuTime[3]);
  
  //pequena area oponente
  noFill();
  stroke(255);
  strokeWeight(2);
  rect(pequenaAreaOponente[0], pequenaAreaOponente[1], pequenaAreaOponente[2], pequenaAreaOponente[3]);
  
  //grande area meu time
  noFill();
  stroke(255);
  strokeWeight(2);
  rect(grandeAreaMeuTime[0], grandeAreaMeuTime[1], grandeAreaMeuTime[2], grandeAreaMeuTime[3]);
  
  //grande area oponente
  noFill();
  stroke(255);
  strokeWeight(2);
  rect(grandeAreaOponente[0], grandeAreaOponente[1], grandeAreaOponente[2], grandeAreaOponente[3]);
  
  //marca do penalty meu time
  fill(255);
  circle(marcaPenaltyMeuTime[0], marcaPenaltyMeuTime[1], marcaPenaltyMeuTime[2]);
  
  //marca do penalty oponente
  fill(255);
  circle(marcaPenalyOponente[0], marcaPenalyOponente[1], marcaPenalyOponente[2]);
  
  //marca meio campo
  fill(255);
  circle(marcaMeioCampo[0], marcaMeioCampo[1], marcaMeioCampo[2]);
  
  //circulo central
  noFill();
  circle(circuloCentral[0], circuloCentral[1], circuloCentral[2]);
  
  //linha meio de campo
  stroke(255);
  strokeWeight(2);
  line(linhaMeioCampo[0], linhaMeioCampo[1], linhaMeioCampo[2], linhaMeioCampo[3]);
  
  //forma arc
  noFill();
  arc(arcoGrandeArea[0], arcoGrandeArea[1], arcoGrandeArea[2], arcoGrandeArea[3], arcoGrandeArea[4], arcoGrandeArea[5]);
  
  //forma arc grande area
  noFill();
  arc(arcoGrandeAreaOponente[0], arcoGrandeAreaOponente[1], arcoGrandeAreaOponente[2], arcoGrandeAreaOponente[3], arcoGrandeAreaOponente[4], arcoGrandeAreaOponente[5]);
  
  //forma arc escanteio
  noFill();
  //angleMode(DEGREES);
  arc(arcoEscanteioSuperiorEsquerdo[0], arcoEscanteioSuperiorEsquerdo[1], arcoEscanteioSuperiorEsquerdo[2], arcoEscanteioSuperiorEsquerdo[3], arcoEscanteioSuperiorEsquerdo[4], arcoEscanteioSuperiorEsquerdo[5]);
  
  //forma arc escanteio
  noFill();  
  arc(arcoEscanteioSuperiorDireito[0], arcoEscanteioSuperiorDireito[1], arcoEscanteioSuperiorDireito[2], arcoEscanteioSuperiorDireito[3], arcoEscanteioSuperiorDireito[4], arcoEscanteioSuperiorDireito[5]);

  noFill();  
  arc(arcoEscanteioInferiorEsquerdo[0], arcoEscanteioInferiorEsquerdo[1], arcoEscanteioInferiorEsquerdo[2], arcoEscanteioInferiorEsquerdo[3], arcoEscanteioInferiorEsquerdo[4], arcoEscanteioInferiorEsquerdo[5]);
  
  noFill();  
  arc(arcoEscanteioInferiorDireito[0], arcoEscanteioInferiorDireito[1], arcoEscanteioInferiorDireito[2], arcoEscanteioInferiorDireito[3], arcoEscanteioInferiorDireito[4], arcoEscanteioInferiorDireito[5]);
}