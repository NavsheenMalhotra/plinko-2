var Engine = Matter.Engine,
   World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies,
  Body=Matter.Body;
  var ground;
 var particle;
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0;
var count= 0;
var PLAY=1;
var END=0;
var gameState=PLAY
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


 

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("lightblue");
  //textSize(20)
  textSize(25)
  text("Score : "+score,20,40);
  
  fill("red");
  
  textSize(35)
  
  text(" 100 ", 5, 550);
  
  text(" 200 ", 80, 550);
  
  text(" 300 ", 160, 550);
  
  text(" 400 ", 240, 550);
  
  text(" 500 ", 320, 550);
  
  text(" 600 ", 400, 550);
  
  text(" 700 ", 480, 550);
  
  text(" 800 ", 560, 550);
  
  text(" 900 ", 640, 550);
  
  text(" 1000 ", 720, 550);

 //text("Sc
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   ////  score++;
  // }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();

     if (particles[j].body.position.x < 300 && particles[j].body.position.y>760) {
      score = score+500;
      particles.pop();
     }
    else if (particles[j].body.position.x < 600 && particles[j].body.position.x > 301 && particles[j].body.position.y > 760) {
      score = score + 100;
      particles.pop();
    }
    else if (particles[j].body.position.x < 900 && particles[j].body.position.x > 601 && particles[j].body.position.y > 760) {
      score = score + 200;
      particles.pop();
      
    }
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

   }
   if( count > 8)
   {
    gameState = END
    textSize(70); 
    text("GAME OVER",150,250) 
   }
        
}

function mousePressed(){
  if(gameState!==END){
      count++;
     particles.push(new Particle(mouseX, 10, 10, 10)); 
  }   
}