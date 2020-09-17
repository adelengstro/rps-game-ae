

window.onload = function(){
    document.getElementById("rock-button").addEventListener("click", playGame); //addEventListener() tells js to call this fuction onclick
    document.getElementById("paper-button").addEventListener("click", playGame);
    document.getElementById("scissors-button").addEventListener("click", playGame);
}




function playGame() {
let chooseAnObject = document.getElementById('choose-object').value //value allows us to get the value from input
function getRandomObject(chooseAnObject);
function gameResult();

}














//computer chooses a random object from the array
function getRandomObject () {
    let gameObjects = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * gameObjects.length); 
    console.log(random, gameObjects[random]);
    }
    
    
    
    
    
    /*Shows the result for the game, if you won lost or if it's a tie.
    */
    
    function gameResult() 
    {
        function random();
        let player;
        let computer;
        let answer;
        if (player == 'scissors' && computer == 'paper',
             player == 'rock' && computer == 'scissors',
             player == 'paper' && computer == 'rock') 
        {
            answer = "You win!";
        
        } else if (computer == 'scissors' && player == 'paper',
            computer == 'rock' && player == 'scissors',
            computer == 'paper' && player == 'rock') 
        {
            answer = "You lose!";
        
        } else 
        {
            answer = "It's a tie!";
        }
        
    
    }
    