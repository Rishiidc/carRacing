var ball;
var database,position
var form,game,player,playercount,gamestate
function setup(){
    database=firebase.database()
    createCanvas(500,500);    
    game=new Game()
    game.getstate()
    game.start()
}

function draw(){
    background("white");
    
    drawSprites();
}

