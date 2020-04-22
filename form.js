class Form{
    constructor(){

    }
    display(){
        var title=creatElement('h2')
        title.html("car racing")
        title.position(150,10)
        var input=createInput("name")
        var button=createButton("play")
        input.position(150,160)
        button.position(250,200)
        var greeting=creatElement('h3')
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playercount++
            player.update(name)
            player.updatecount(playercount)
            greeting.html("hello"+name)
            greeting.position(150,160)
        })
    }
}