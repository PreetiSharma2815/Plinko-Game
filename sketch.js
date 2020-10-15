const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var divisionArray = []
var plinkoArray=[]
var particleArray=[]

var divisionHeight=240;
var score=0

function setup() {
  createCanvas(490,600);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,30);

  //create divisions
  for(var div=0;div<=width;div+=80){
    newDiv= new Division(div,465,10,divisionHeight)
    divisionArray.push(newDiv);
    
  }

  //create plinkos
  for(var pi=10;pi<=width;pi+=50){
    for(var pj=30;pj<=300;pj+=60){
      newPinko= new Plinko(pi,pj,10)
      plinkoArray.push(newPinko);
      
    }
  }

}

function draw() {
  background(0);
  fill("red") 
  textSize(17)
  textFont("Times New Roman")
  text("500 Points",50,height-20);
  text("400 Points",50,height-20);
  text("300 Points",50,height-20);
  text("200 Points",50,height-20);
  text("500 Points",50,height-20);
  text("600 Points",50,height-20);
  
  Engine.update(engine); 
  
  ground.display();
  
  //display divisions
  for(let i = 0; i<divisionArray.length;i++){
    divisionArray[i].display();
  }

  //display plinkos
  for(var j=0;j<plinkoArray.length;j++){
    console.log(plinkoArray[j])
    plinkoArray[j].display();
  }

  //create particle every 60th frame and add to particles array 
  if(frameCount%60===0){
    var newParticle= new Particles(random(90,450),10,10)
    particleArray.push(newParticle)

  }
  //display particles
  for(var k=0;k<particleArray.length;k++){
    particleArray[k].display();
  }
}

//scoring
function collectCoins(){
  
}