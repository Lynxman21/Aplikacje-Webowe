let min_len = document.getElementById('min_length');
let max_len = document.getElementById('max_length');
let capital = document.getElementById('capital_letter');
let special = document.getElementById('special');
let generate = document.getElementById('generate');

generate.addEventListener('click',generatePassword);

function generateChar(type) {
    let range;
    if (type == 0) {
        range = 'qwertyuiopasdfghjlkzxcvbnm';
    }
    else if (type == 1) {
        range = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjlkzxcvbnm';
    }
    else if (type == 2){
        range = 'qwertyuiopasdfghjlkzxcvbnm12334567890!@#$%^&*()<>?/';
    }
    else {
        range = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjlkzxcvbnm12334567890!@#$%^&*()<>?/';
    }
    return range.charAt(Math.floor(Math.random()*range.length));
}

function generatePassword() {
    let password = '';
    let type = 0;
    let mini = parseInt(min_len.value);
    let maxi = parseInt(max_len.value);

    let length = Math.floor(Math.random()*(maxi-mini) + mini);

    if (capital.checked == 1) {
        type = 1;
    }
    if (special.checked == 1) {
        type = 2;
    }
    if (capital.checked == 1 && special.checked == 1) {
        type = 3;
    }
    for (let i=0;i<length;i++) {
        password += generateChar(type);
    }
    alert(password);
}