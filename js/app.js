// UI
const num1 = document.getElementById('num1'),
    sig = document.getElementById('sig'),
    num2 = document.getElementById('num2'),
    ans = document.getElementById('ans');



function number(num) {
    // console.log(num);
    if(sig.innerText !== ''){
        num2.innerText += num;
    }else{
        num1.innerText += num;
    }

}

function sign(sign) {
    // console.log(sign);
    sig.innerText = sign;
}

function removeinput() {
    num1.innerText ='';
    num2.innerText ='';
    sig.innerText ='';
}

function result(result) {
    // console.log(result);
    switch (sig.innerText) {
        case '+':
            ans.innerText = Number(num1.innerText) + Number(num2.innerText);
            removeinput();
            break;
        case '-':
            ans.innerText = Number(num1.innerText) - Number(num2.innerText);
            removeinput();
            break;
        case 'x':
            ans.innerText = Number(num1.innerText) * Number(num2.innerText);
            removeinput();
            break;
        case '/':
            ans.innerText = Number(num1.innerText) / Number(num2.innerText);
            removeinput();
            break;
        case '%':
            ans.innerText = Number(num1.innerText) % Number(num2.innerText);
            removeinput();
            break;
    }
}

function removeresult() {
    num1.innerText ='';
    num2.innerText ='';
    sig.innerText ='';
    ans.innerText ='';
}