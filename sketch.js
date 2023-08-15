var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg

function preload(){
  
  //carrege as imagens do atirador parado e atirando
  bgImg = loadImage("assets/bg.jpeg");
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  zombieImg = loadImage("assets/zombie.png");
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
  

//crie o sprite do jogador de acordo com o exemplo do bg acima e ajuste o tamanho
  player = createSprite(displayWidth -1300, displayHeight -300, 50,50);
  player.addImage(shooterImg);
  player.scale = 0.3;

 
  player.debug = true
  //player.debug = false
  //player.Debug =false
  //Player.debug = true

  //player.Collider("rectagle",0,0,300,300)
  //player.setcollider("rectangle",0,0)
  player.setCollider("rectangle",0,0,300,300)
  //player.Setcollider("rectangle",0,0,300,300)
  zombieGroup = new Group()
}

function draw() {
  background(0); 

  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando touches (toques)
  if(keyDown("UP_ARROW")&& player.y > 450||touches.length>0){
    //escreva o código
    player.y -= 25
    console.log(player.y);

  }

  if(keyDown("DOWN_ARROW")&& player.y < 725||touches.length>0){
    //escreva o código
    player.y += 25
    console.log(player.y);
  }
//tchau

//libere as balas e mude a imagem do personagem para a posição de tiro quando a tecla espaço for pressionada
  if(keyWentDown("space")){
    //escreva o código
  player.addImage(shooter_shooting);
  }

//jogador volta pra imagem original quando liberar a tecla espaço
  else if(keyDown("enter")){
  //player.addImage( shooter_shooting )
  //player.addImage()
  player.addImage(shooterImg)
  //player.addImage(shooter_1.png)
  }
  if(zombieGroup.isTouching(player)){
    for(var i = 0;i<zombieGroup.length;i++){
        if(zombieGroup[i].isTouching(player)){
          zombieGroup[i].destroy();
        }
    }
  }
enemy();
drawSprites();

}

function enemy(){
  if(frameCount %50 === 0){
    zombie = createSprite(random(500, 1100), random(250,500), 40, 40);
    zombie.addImage(zombieImg);
    zombie.velocityX = -3;
    zombie.scale = 0.15;
    zombie.lifetime = 500;
    zombie.debug = true;
    zombie.setCollider("rectangle",0,0 , 400,400);
    zombieGroup.add(zombie);
  }


}