class Game {
     constructor(){
    

     }
     getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
        gameState = data.val();
    })
  }
update(state){
database.ref('/').update({ gameState: state
});
}
async start(){
    if(gameState === 0){
      
        player = new Player()
        var playerCountref=await database.ref("playerCount").once("value")
        if(playerCountref.exists()){
          playerCount=playerCountref.val();
          player.getCount();
        }
        
        form = new Form();
        form.display();
    }
    car1=createSprite(100,200);
    car1.addImage("car1",car1img)
    car2=createSprite(300,200);
    car2.addImage("car2",car2img)
    car3=createSprite(500,200);
    car3.addImage("car3",car3img)
    car4=createSprite(700,200);
    car4.addImage("car4",car4img)
cars =[car1,car2,car3,car4]; 

   }
   play()
   {
     form.hideForm(1)
     textSize(30);
     text("gameStart",150,100);
     Player.getPlayerInfo();
     player.getCarsAtEnd();
     if(allPlayers!==undefined){
      // var displayPosition=200;
      image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
        var index=0;
        var x=175;
        var y;
       for(var i in allPlayers)
       {
         index=index+1;
         x=x+200;
         y=displayHeight-allPlayers[i].distance;
         cars[index-1].x=x;
         cars[index-1].y=y;
         textAlign(CENTER);
         textSize(20);
         text(allPlayers[i].name,cars[index-1].x,cars[index-1].y+75);
         if(index===player.index){
           stroke(10);
           fill("red");
           ellipse(x,y,60,60);
           cars[index-1].shapeColor="red";
           camera.position.x=displayWidth/2;
           camera.position.y=cars[index-1].y;
         }
       }
     }
        if(keyIsDown(UP_ARROW)&& player.index!==null){
          player.distance=player.distance+20;
          player.update();
        }
        if(player.distance>3760){
          gameState=2
          player.rank+=1;
          Player.updateCarsAtEnd(player.rank);
        }
        drawSprites();
  }
        end(){
          console.log("game ends");
          console.log("PlayerRank"+player.rank);

        }
}