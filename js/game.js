class Game{
    constructor(){}
getstate(){
    var gstateref=database.ref('gamestate')
    gstateref.on("value",function(data){
        gamestate=data.val()
    })
}
updatestate(state){
    database.ref('/').update({
        gamestate:state
    })
}
start(){
    if (gamestate===0){
        player=new Player();
        player.getcount();
        form=new Form();
        form.display();
    }
}
}