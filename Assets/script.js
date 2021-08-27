
// Adding EventListner for popup Manu

const pop = document.getElementById('pop');
pop.addEventListener('click', function about() {
    document.querySelector('.about').style.display = 'flex';
});


const exit = document.getElementById('exit');
exit.addEventListener('click', function reset() {
    document.querySelector('.container').style.opacity = '1';
    document.querySelector('.about').style.display = 'none';
});


// rpsGame() function
function rpsGame(choice) {


    let myChoice, botChoice, result;

    // Storing id of element Clicked by You
    myChoice = choice.id;

    // Storing choice of Bot (Randomly Generated)
    botChoice = randChoice(randNo());

    //Storing the result
    result = gameResult(myChoice, botChoice);


    //Let's do the frontEnd----------------------------------------------

    //Storing the src of Choosed images
    let src1 = document.getElementById(myChoice).src; //Choosed by You
    let src2 = document.getElementById(botChoice).src; // Choosed by Bot 

    //Removing previous elements
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('secr').remove();

    //creating new elements
    let img1 = document.createElement('img');
    let img2 = document.createElement('img');

    let h1element = document.createElement('h1');
    let text = document.createTextNode(result.message);

    // Adding Styles to the text 
    h1element.style.color = result.color;
    h1element.style.textShadow = 'none';
    h1element.style.fontSize = '3rem';

    //Appending text to h1 element
    h1element.appendChild(text);

    //Adding src of choosed img to new img elements
    img1.src = src1;
    img2.src = src2;


    //Appending the new elements 
    document.getElementById('inner-div').appendChild(img1).style.boxShadow = '2px 2px 43px 8px rgba(109, 255, 80, 0.904)';

    document.getElementById('inner-div').appendChild(h1element);

    document.getElementById('inner-div').appendChild(img2).style.boxShadow = '2px 2px 43px 8px rgba(255, 80, 80, 0.904)';


}

// Let's create the Bot-----------------------------------------------------

// 1. func to generate random number
function randNo() {
    return Math.floor(Math.random() * 3);
}
//2. func to choose random element as text
function randChoice(num) {
    return ['rock', 'paper', 'secr'][num];
}

//3. func to calculate the result of the Game 
function gameResult(myChoice, botChoice) {
    let output;

    // Adding audios
    const winSound = new Audio('Assets/sounds/win.wav');
    const drawSound = new Audio('Assets/sounds/draw.wav');
    const lostSound = new Audio('Assets/sounds/lost.wav');

    if ((myChoice == 'paper' && botChoice == 'rock') ||
        (myChoice == 'secr' && botChoice == 'paper') || (myChoice == 'rock' && botChoice == 'secr')) {
        output = { 'message': 'You won', 'color': 'green' };

        winSound.play();

    } else if ((botChoice == 'paper' && myChoice == 'rock') ||
        (botChoice == 'secr' && myChoice == 'paper') || (botChoice == 'rock' && myChoice == 'secr')) {
        output = { 'message': 'You lost', 'color': 'red' };

        lostSound.play();

    } else {
        output = { 'message': 'You tied', 'color': 'purple' };

        drawSound.play();
    }

    return output;
}

//4. func for Play Again
function refresh() {
    window.location.reload();
}