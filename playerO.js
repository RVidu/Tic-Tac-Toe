//boxes
let a1 = document.querySelector('#box1');
let a2 = document.querySelector('#box2');
let a3 = document.querySelector('#box3');

let b1 = document.querySelector('#box4');
let b2 = document.querySelector('#box5');
let b3 = document.querySelector('#box6');

let c1 = document.querySelector('#box7');
let c2 = document.querySelector('#box8');
let c3 = document.querySelector('#box9');

//op turn
let op = [a1, a2, a3, b1, b2, b3, c1, c2, c3]

//checks
let check = [0, 0, 0, 0, 0, 0, 0, 0, 0]

let x = 0;
let turn = 0;
let y = 0;

//player
a1.addEventListener('click', ()=> {
    if(check[0] == 0 && turn == 0) {
        document.querySelector('#block1').src = 'O.png';
    turn = 1;
    check[0] = 1;
    x = 0;

    setTimeout(gameOverO, 1000)
    } else {};
});

a2.addEventListener('click', ()=> {
    if(check[1] == 0 && turn == 0) {
        document.querySelector('#block2').src = 'O.png';
    turn = 1;
    check[1] = 1;
    x = 0;

    setTimeout(gameOverO, 1000)
    } else {};
});

a3.addEventListener('click', ()=> {
    if(check[2] == 0 && turn == 0) {
        document.querySelector('#block3').src = 'O.png';
    turn = 1;
    check[2] = 1;
    x = 0;

    setTimeout(gameOverO, 1000)
    } else {};
});

b1.addEventListener('click', ()=> {
    if(check[3] == 0 && turn == 0) {
        document.querySelector('#block4').src = 'O.png';
    turn = 1;
    check[3] = 1;
    x = 0;

    setTimeout(gameOverO, 1000)
    } else {};
});

b2.addEventListener('click', ()=> {
    if(check[4] == 0 && turn == 0) {
        document.querySelector('#block5').src = 'O.png';
    turn = 1;
    check[4] = 1;
    x = 0;

    setTimeout(gameOverO, 1000)
    } else {};
});

b3.addEventListener('click', ()=> {
    if(check[5] == 0 && turn == 0) {
        document.querySelector('#block6').src = 'O.png';
    turn = 1;
    check[5] = 1;
    x = 0;

    setTimeout(gameOverO, 1000)
    } else {};
});

c1.addEventListener('click', ()=> {
    if(check[6] == 0 && turn == 0) {
        document.querySelector('#block7').src = 'O.png';
    turn = 1;
    check[6] = 1;
    x = 0;

    setTimeout(gameOverO, 1000)
    } else {};
});

c2.addEventListener('click', ()=> {
    if(check[7] == 0 && turn == 0) {
        document.querySelector('#block8').src = 'O.png';
    turn = 1;
    check[7] = 1;
    x = 0;

    setTimeout(gameOverO, 1000)
    } else {};
});

c3.addEventListener('click', ()=> {
    if(check[8] == 0 && turn == 0) {
        document.querySelector('#block9').src = 'O.png';
    turn = 1;
    check[8] = 1;
    x = 0;

    setTimeout(gameOverO, 1000)
    } else {};
});

let over = 0;

function opp() {
    while(x == 0 || x > 9) {
        x = Math.ceil(Math.random() * 10);
    };

    if(check[x - 1] == 0){
        Xico(x);
        check[x - 1] = 2;
        gameOverX();
    } else { 
        x = 0;
        opp() 
    };
};

function gameOverO() {
    if (check[0] == 1 && check[1] == 1 && check[2] == 1) {
        alert('You Won!');
        document.querySelector('#result').innerHTML = 'You Won!';
        overType(0);
    } else if (check[3] == 1 && check[4] == 1 && check[5] == 1){
        alert('You Won!');
        document.querySelector('#result').innerHTML = 'You Won!';
        overType(1);
    } else if(check[6] == 1 && check[7] == 1 && check[8] == 1){
        alert('You Won!');
        document.querySelector('#result').innerHTML = 'You Won!';
        overType(2);
    } else if(check[0] == 1 && check[3] == 1 && check[6] == 1){
        alert('You Won!');
        document.querySelector('#result').innerHTML = 'You Won!';
        overType(3);
    } else if(check[1] == 1 && check[4] == 1 && check[7] == 1){
        alert('You Won!');
        document.querySelector('#result').innerHTML = 'You Won!';
        overType(4);
    } else if(check[2] == 1 && check[5] == 1 && check[8] == 1){
        alert('You Won!');
        document.querySelector('#result').innerHTML = 'You Won!';
        overType(5);
    } else if(check[0] == 1 && check[4] == 1 && check[8] == 1){
        alert('You Won!');
        document.querySelector('#result').innerHTML = 'You Won!';
        overType(6);
    } else if(check[2] == 1 && check[4] == 1 && check[6] == 1){
        alert('You Won!');
        document.querySelector('#result').innerHTML = 'You Won!';
        overType(7);
    } else {
            opp()
    };
};

function gameOverX(){
    if (check[0] == 2 && check[1] == 2 && check[2] == 2){
        alert('You Lost!');
        document.querySelector('#result').innerHTML = 'You Lost!';
        overType(0);
    } else if (check[3] == 2 && check[4] == 2 && check[5] == 2){
        alert('You Lost!');
        document.querySelector('#result').innerHTML = 'You Lost!';
        overType(1);
    } else if(check[6] == 2 && check[7] == 2 && check[8] == 2){
        alert('You Lost!');
        document.querySelector('#result').innerHTML = 'You Lost!';
        overType(2);
    } else if(check[0] == 2 && check[3] == 2 && check[6] == 2){
        alert('You Lost!');
        document.querySelector('#result').innerHTML = 'You Lost!';
        overType(3);
    } else if(check[1] == 2 && check[4] == 2 && check[7] == 2){
        alert('You Lost!');
        document.querySelector('#result').innerHTML = 'You Lost!';
        overType(4);
    } else if(check[2] == 2 && check[5] == 2 && check[8] == 2){
        alert('You Lost!');
        document.querySelector('#result').innerHTML = 'You Lost!';
        overType(5);
    } else if(check[0] == 2 && check[4] == 2 && check[8] == 2){
        alert('You Lost!');
        document.querySelector('#result').innerHTML = 'You Lost!';
        overType(6);
    } else if(check[2] == 2 && check[4] == 2 && check[6] == 2){
        alert('You Lost!');
        document.querySelector('#result').innerHTML = 'You Lost!';
        overType(7);
    } else {
        turn = 0;
    };
};

function Xico(z){
    switch(z) {
        case 1:
            document.querySelector('#block1').src = 'X.png';
            break;
        case 2:
            document.querySelector('#block2').src = 'X.png';
            break;
        case 3:
            document.querySelector('#block3').src = 'X.png';
            break;
        case 4:
            document.querySelector('#block4').src = 'X.png';
            break;
        case 5:
            document.querySelector('#block5').src = 'X.png';
            break;
        case 6:
            document.querySelector('#block6').src = 'X.png';
            break;
        case 7:
            document.querySelector('#block7').src = 'X.png';
            break;
        case 8:
            document.querySelector('#block8').src = 'X.png';
            break;
        case 9:
            document.querySelector('#block9').src = 'X.png';
            break;
    };
    console.log(z)
};

function overType(type){
    switch(type){
        case 0:
            a1.style.backgroundColor = 'aqua';
            a2.style.backgroundColor = 'aqua';
            a3.style.backgroundColor = 'aqua';   
            document.querySelector('#block1').style.backgroundColor = 'aqua';   
            document.querySelector('#block2').style.backgroundColor = 'aqua';   
            document.querySelector('#block3').style.backgroundColor = 'aqua';   
            break;
        case 1:
            b1.style.backgroundColor = 'aqua';
            b2.style.backgroundColor = 'aqua';
            b3.style.backgroundColor = 'aqua';   
            document.querySelector('#block4').style.backgroundColor = 'aqua';   
            document.querySelector('#block5').style.backgroundColor = 'aqua';   
            document.querySelector('#block6').style.backgroundColor = 'aqua';   
            break;
        case 2:
            c1.style.backgroundColor = 'aqua';
            c2.style.backgroundColor = 'aqua';
            c3.style.backgroundColor = 'aqua';   
            document.querySelector('#block7').style.backgroundColor = 'aqua';   
            document.querySelector('#block8').style.backgroundColor = 'aqua';   
            document.querySelector('#block9').style.backgroundColor = 'aqua';   
            break;
        case 3:
            a1.style.backgroundColor = 'aqua';
            b1.style.backgroundColor = 'aqua';
            c1.style.backgroundColor = 'aqua';   
            document.querySelector('#block1').style.backgroundColor = 'aqua';   
            document.querySelector('#block4').style.backgroundColor = 'aqua';   
            document.querySelector('#block7').style.backgroundColor = 'aqua';   
            break;
        case 4:
            a2.style.backgroundColor = 'aqua';
            b2.style.backgroundColor = 'aqua';
            c2.style.backgroundColor = 'aqua';   
            document.querySelector('#block2').style.backgroundColor = 'aqua';   
            document.querySelector('#block5').style.backgroundColor = 'aqua';   
            document.querySelector('#block8').style.backgroundColor = 'aqua';   
            break;
        case 5:
            a3.style.backgroundColor = 'aqua';
            b3.style.backgroundColor = 'aqua';
            c3.style.backgroundColor = 'aqua';   
            document.querySelector('#block3').style.backgroundColor = 'aqua';   
            document.querySelector('#block6').style.backgroundColor = 'aqua';   
            document.querySelector('#block9').style.backgroundColor = 'aqua';   
            break;
        case 6:
            a1.style.backgroundColor = 'aqua';
            b2.style.backgroundColor = 'aqua';
            c3.style.backgroundColor = 'aqua';   
            document.querySelector('#block1').style.backgroundColor = 'aqua';   
            document.querySelector('#block5').style.backgroundColor = 'aqua';   
            document.querySelector('#block9').style.backgroundColor = 'aqua';   
            break;
        case 7:
            a3.style.backgroundColor = 'aqua';
            b2.style.backgroundColor = 'aqua';
            c1.style.backgroundColor = 'aqua';   
            document.querySelector('#block3').style.backgroundColor = 'aqua';   
            document.querySelector('#block5').style.backgroundColor = 'aqua';   
            document.querySelector('#block7').style.backgroundColor = 'aqua';   
    };
};

//finale touch
document.querySelector('#restart').addEventListener('click', ()=>{
    location.reload();
});

function back(){
    window.open('index.html', '_self');
};