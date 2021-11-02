


const container = document.querySelector('.container-grid');

const btn = document.getElementById('play-btn');
btn.addEventListener('click', function(){
    run(container);
});


function run(container){
    const easy = 100;
    const medium = 81;
    const hard = 49;

    const selectDiff = document.getElementById('difficulty');
    let numSquares = null;
    let difficulty = null;

    switch(selectDiff.value){
        case "1": 
            difficulty = 'easy';
            numSquares = easy;
            break;
        case "2": 
            difficulty = 'medium';
            numSquares = medium;
            break;
        case "3":     
            difficulty = 'hard';
            numSquares = hard;
            break;
    }
    fillContainer(container, numSquares, difficulty);
    return 0;
}


function fillContainer(cont, num, diff){
    cont.innerHTML = '';
    for(let i = 1; i < num + 1; i++){
        const square = createSquare(cont, i, diff);
        
        square.addEventListener('click',function(){
            this.classList.add('clicked');
        })
    }
}


function createSquare(cont, i, diff){
    const square = document.createElement('div');
    square.classList.add(diff);
    /* aggiungere qui logica se è una bomba o meno */
    square.innerHTML= `<span> ${i} </span>`;
    
    cont.append(square);
    return square;

}

