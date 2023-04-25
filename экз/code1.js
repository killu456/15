let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,' ']]
let Arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,' ']];
let table =  document.querySelector('#t')
let body = document.querySelector("body")
let Data = 0

let players = 0

let steps = 100;
let status = 2;
let Time = '';
let Step = 0
let pole = 4;


let enter = document.querySelector("#enter")
enter.onclick = function(){
    document.querySelector(".block.abs2").innerHTML += `
        <div class = "form">
            <h3>Регистрация:</h3>
            <form method="GET">
                <label> Name: <input type = "text" name = "yourname"> </label> <br>  
                <label>Email: <input type = "text" name = "email"></label><br> 
                <label>Password: <input type = "text" name = "password"></label><br> 
                <input type = "submit">
            </form>
        </div>       
    `;
    let form = document.querySelector("form")

    form.addEventListener('submit',getFunc);
    
    function getFunc(e){
    e.preventDefault();
    let name = form.querySelector('[name="yourname"]');
    console.log(name.value);
    let email = form.querySelector('[name="email"]');
    console.log(email.value);
     let password = form.querySelector('[name="password"]');
    console.log(password.value);
     let parent = document.querySelector(".form")
     parent.parentNode.removeChild(parent);
    }
}





document.querySelector("#registr").onclick = function(){
        
}


class Player{
    constructor(){
        this.email = email
        this.name = name
        this.password = password
        this.time = 0;
        this.steps = 0
        this.rating = 0
    }
}



function show(){//функция для вывода пятнашек в html
    table.innerHTML = ''
    for(let i = 0;i < pole;i++){
        let tr = document.createElement('tr')
        for(let j = 0;j < pole;j++){
            let td = document.createElement('td')
            td.id = i+""+j;
            if(arr[i][j] == ' ') td.classList.add("null");
            td.textContent = arr[i][j]
            tr.appendChild(td)   
        }
        table.appendChild(tr)
    }
}

show();

async function check(){//функция для проверки : выиграл или нет
    Step++;
    document.querySelector("#steps").innerHTML = `Кол-во ходов: ${Step}`;
    for(let i = 0;i < arr.length;i++){
        for(let j = 0;j < arr.length;j++){
            if(arr[i][j] != Arr[i][j]) return 0;
        }
    }

    table.innerHTML += `
        <div class = "modal">
            <h3><center>Good job!</center></h3>
            <hr>
            <div class = "element">
                <img src = "./icons/./free-icon-like-5253390.png">
            </div>
            <div class = "butt"><b>ОK</b></div>
            <p><b>Размер поля: ${pole}x${pole}</b></p>
            <p><b>Кол-во ходов: ${Step}</b></p>
            <p><b>${Time}</b></p>
        </div>

    `;
    Data = new Date();
    console.log("win")
    status = 0;
    Step = 0;
    document.querySelector(".butt").onclick = function(){
        let parent = document.querySelector(".modal")
        parent.parentNode.removeChild(parent);
    };
    status = 2;
}

function rand(max){//функция для генерации случайного числа
    return Math.floor(Math.random()*max);
}



document.querySelector("#pole").innerHTML = `Поле: ${pole}x${pole}`;



    let childs = document.querySelector("#Pole").childNodes;
    for(let i = 0;i < childs.length;i++){
        if(i % 2 != 0 && i != 0) childs[i].onclick = function(){
                pole = Number(childs[i].id[0])
                if(pole == 3) {
                    arr = [[1,2,3],[4,5,6],[7,8,' ']];
                    Arr = [[1,2,3],[4,5,6],[7,8,' ']];
                }
                else if(pole == 4){
                    arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,' ']];   
                    Arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,' ']]; 
                } 
                else if(pole == 5) {
                    arr = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,' ']];
                    Arr = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,' ']];
                }
                else if(pole == 6){
                    arr = [[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18],[19,20,21,22,23,24],[25,26,27,28,29,30],[31,32,33,34,35,' ']];
                    Arr = [[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18],[19,20,21,22,23,24],[25,26,27,28,29,30],[31,32,33,34,35,' ']];   
                }
                Data = new Date();
                Step = 0;
                show();
                document.querySelector("#pole").innerHTML = `Поле: ${pole}x${pole}`;    
        } 
    }
    
    
    








function mix(steps){//функция перемешивания
    Step = 0;
    status = 1;
    document.querySelector("#steps").innerHTML = `Кол-во ходов: ${Step}`;
    for(let i = 0;i < steps;i++){
        let a = rand(4);
        switch(a){
            case 0:
                Left();
                break;
            case 1:
                Right();
                break;
            case 2:
                Up();
                break;
            case 3:
                Down();
                break;
        }
    }  
}

document.querySelector("button").onclick = function() {//отлавливание события на перемешивание
    mix(steps);
    Data = new Date();
};


timer = setInterval(function () {
    // Условие если время закончилось то...
    if (!status) {
        // Таймер удаляется
        clearInterval(timer);
        console.log("00000")
        // Выводит сообщение что время закончилось
    } else if(status == 1){ // Иначе
        let data = new Date();
        document.querySelector("#time").innerHTML = `Время: ${Math.floor((data-Data)/1000/60/60)}:${Math.floor((data-Data)/1000/60)}:${Math.floor((data-Data)/1000-(Math.floor((data-Data)/1000/60)*60))}`
        Time = document.querySelector("#time").textContent;
    } // Уменьшаем таймер
}, 1>0)







table.addEventListener('click',func_click)

function func_click(){
    let tds = table.querySelectorAll("td")
    for(let i = 0;i < tds.length;i++){
        tds[i].onclick = function() {
            let n = document.querySelector(".null");
            if(Number(n.id[1]) == Number(tds[i].id[1]) && Math.abs(Number(n.id[0])-Number(tds[i].id[0])) == 1 ||
              Number(n.id[0]) == Number(tds[i].id[0]) && Math.abs(Number(n.id[1])-Number(tds[i].id[1])) == 1){
                   arr[Number(n.id[0])][Number(n.id[1])] = tds[i].textContent;
                   arr[Number(tds[i].id[0])][Number(tds[i].id[1])] = n.textContent;
                   show();
                   check();
            } 
        };

    }
     
}




function Left(){
    let n = document.querySelector(".null");
    let id = n.id;
    if(id[1] > 0){
        let id1 = id-1;
        if(id1 < 10) id1 = "0"+id1;
        let element = document.getElementById(id1);
        id1 = Number(id1)
        arr[Number(id[0])][Number(id[1])] = element.textContent;
        arr[(id1-id1%10)/10][id1%10] = n.textContent;
        show();
    } 
}

function Right(){
    let n = document.querySelector(".null");
    let id = n.id;
    if(id[1] < pole-1){
        let id1 = Number(id)+1; 
        if(id1 < 10) id1 = "0"+id1;
        let element = document.getElementById(id1);
        id1 = Number(id1)
        arr[Number(id[0])][Number(id[1])] = element.textContent;
        arr[(id1-id1%10)/10][id1%10] = n.textContent;
        show();
    } 
}

function Up(){
    let n = document.querySelector(".null");
    let id = n.id;
    if(id[0] > 0){
        let id1 = String(Number(id)-10);
        if(id1 < 10) id1 = "0"+id1
        let element = document.getElementById(id1);
        arr[Number(id[0])][Number(id[1])] = element.textContent;
        arr[Number(id1[0])][Number(id1[1])] = n.textContent;
        show();
    } 
}

function Down(){
    let n = document.querySelector(".null");
    let id = n.id;
    if(id[0] < pole-1){
        let id1 = Number(id)+10;      
        let element = document.getElementById(id1);
        arr[Number(id[0])][Number(id[1])] = element.textContent;
        arr[(id1-id1%10)/10][id1%10] = n.textContent;
        show();
    } 
}




function func(e){
    switch (e.key) {
        case "ArrowLeft":
            Left();
            check();
            break;
        case "ArrowRight":
            Right();
            check();
            break;
        case "ArrowUp":
            Up();
            check();
            break;
        case "ArrowDown":
            Down();
            check();
            break;
    }
}
addEventListener("keydown",func);




