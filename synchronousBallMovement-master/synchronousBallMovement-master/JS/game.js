class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        //listens to changes
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState : state
        })
    }
    start(){
        if(gameState == 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }

}