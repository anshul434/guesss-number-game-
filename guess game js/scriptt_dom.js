let score = 20;
let secret_number = Math.trunc(Math.random()*20)+1
let highscore = 0


document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess)

    if(!guess){
        document.querySelector('.message').textContent = 'no number'
    }
    else if(guess===secret_number){
        document.querySelector('.message').textContent = 'correct number👍👍'
        document.querySelector('body').style.backgroundColor = ' #60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').style.padding = '6rem'
        document.querySelector('.number').textContent = secret_number

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent=highscore;

        }
    }
    
    else if(guess>secret_number){
        document.querySelector('.message').textContent = 'too high!!!🙌'
        score--;
        document.querySelector('.score').textContent = score
        document.querySelector('body').style.backgroundColor = '#c4c718'

    
    }
    else if(guess<secret_number){
        document.querySelector('.message').textContent = 'too loww!!!🙌'
        score--;
        document.querySelector('.score').textContent = score
        document.querySelector('body').style.backgroundColor = '#8e88cb'
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score=20;
    secret_number = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent="Start guessing.."
    document.querySelector('.score').textContent=score
    document.querySelector('.number').textContent = "?"
    document.querySelector('.guess').value = ""
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').style.padding = '3rem'
    } )





