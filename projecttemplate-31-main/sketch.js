const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg
var engine, world;
var drops=[]
var maxDrops=100
var boyImage,boy
function preload(){
  boyImage=loadAnimation("walking_1.png","walking_2.png",
  "walking_3.png","walking_4.png","walking_5.png",
  "walking_6.png","walking_7.png",   
  "walking_8.png") 
  
  t1=loadImage("1.png")
  t2=loadImage("2.png")
  t3=loadImage("3.png")
  t4=loadImage("4.png")
}

function setup(){
  createCanvas(1000,500)
   engine=Engine.create() 
   world=engine.world
   boy=createSprite(500,330)
   boy.addAnimation("boyWalking",boyImage)
   boy.scale=0.5

   thunder=createSprite(random(50,900),100)
   thunder.scale=0.4
   for(var i=0;i<maxDrops;i++){
     drops.push(new Drops(random(0,1000),random(0,500)))
   }
}

function draw(){
  background(0)
  Engine.update(engine)
   for(i=0;i<maxDrops;i++){
     drops[i].display()
     drops[i].update()
   }  
   thunder.x=Math.round(random(0,900))
   var r =Math.round(random(1,4))
   switch(r){
     case 1:thunder.addImage(t1);
     break;
     case 2:thunder.addImage(t2);
     break;
     case 3:thunder.addImage(t3);
     break;
     case 4:thunder.addImage(t4)
   }

   drawSprites()
}   

