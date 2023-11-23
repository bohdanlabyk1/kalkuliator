let a = "";
let b = "";
let sing = "";
finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6','7','8','9','.'];
const action = [ '-','+', 'x','/'];

const out = document.querySelector('.calc-sreach p');
function clearAll (){
    a = "";
    b = "";
    sing = "";
    finish = false;
    out.textContent = 0;
}
document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;

  
    out.textContent = '';
    const key = event.target.textContent;

    if(digit.includes(key)){
       if(b ==='' && sing ===''){
        a+= key;
        console.log(a, b, sing);
       out.textContent = a;
       }
       else if(a!=='' && b!=='' && finish){
        b = key;
        finish = false;
        out.textContent = a;
       }
       else{
        b += key;
        out.textContent = a;
       }
       console.log(a, b, sing);
       return;
    }  

    if ( action.includes(key)){
        sing = key;
        out.textContent = sing;
    }


    if (key=== '='){
        if (b === '') b = a;
        switch (sing) {
            case "+":
            a = (+a) + (+b);
            break;
            case "-":
            a = a - b;
            break;
            case "x":
            a = a * b;
            break;
            case "/":
            a = a / b;
            break;
        }
        finish = true;
        out.textContent = a;
    
    }
}


