const Buttons = document.querySelector(".Calc-base button");
const result = document.querySelector(".result");
const input_output = document.querySelector(".input_output");
function Controller(value) {
    switch (value) {
        case 'C':
            input_output.value = '';
            input_output.style.fontSize = '50px';
            break;
        case '/':

            break;
        case '*':

            break;
        case '←':
            input_output.value = input_output.value.slice(0, --input_output.value.length);
            break;
        case '+':

            break;
        case '=':

            break;
        case '.':
            input_output.value = input_output.value + '.';
            break;
        case '1':
            input_output.value = input_output.value + '1';
            break;
        case '2':
            input_output.value = input_output.value + '2';
            break;
        case '3':
            input_output.value = input_output.value + '3';
            break;
        case '4':
            input_output.value = input_output.value + '4';
            break;
        case '5':
            input_output.value = input_output.value + '5';
            break;
        case '6':
            input_output.value = input_output.value + '6';
            break;
        case '7':
            input_output.value = input_output.value + '7';
            break;
        case '8':
            input_output.value = input_output.value + '8';
            break;
        case '9':
            input_output.value = input_output.value + '9';
            break;
        case '0':
            input_output.value = input_output.value + '0';
            break;
        default:
            break;
    }
}
function KeyHandle() {

}
document.addEventListener('keydown', KeyHandle);