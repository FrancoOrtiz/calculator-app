const $display__number = document.getElementById('display__number');
const $reset = document.getElementById('reset');
const $equal = document.getElementById('equal');
const $dot = document.getElementById('dot');
const $zero = document.getElementById('zero');
const $slash = document.getElementById('slash');
const $multiplier = document.getElementById('multiplier');
const $one = document.getElementById('one');
const $two = document.getElementById('two');
const $three = document.getElementById('three');
const $rest = document.getElementById('rest');
const $four = document.getElementById('four');
const $five = document.getElementById('five');
const $six = document.getElementById('six');
const $sum = document.getElementById('sum');
const $seven = document.getElementById('seven');
const $eight = document.getElementById('eight');
const $nine = document.getElementById('nine');
const $del = document.getElementById('del');
let dotset = false;

$dot.addEventListener('click', () => {
    if(dotset === true) {
    } else {
    addDigits(".");
    dotset = true;
    }
})

$slash.addEventListener('click', () => {
    addDigits("/");
    dotset = false;
})

$multiplier.addEventListener('click', () => {
    addDigits("x");
    dotset = false;
})

$rest.addEventListener('click', () => {
    addDigits("-");
    dotset = false;
})

$sum.addEventListener('click', () => {
    addDigits("+");
    dotset = false;
})

$zero.addEventListener('click', () => {
    addDigits(0);
})

$one.addEventListener('click', () => {
    addDigits(1);
})

$two.addEventListener('click', () => {
    addDigits(2);
})

$three.addEventListener('click', () => {
    addDigits(3);
})

$four.addEventListener('click', () => {
    addDigits(4);
})

$five.addEventListener('click', () => {
    addDigits(5);
})

$six.addEventListener('click', () => {
    addDigits(6);
})

$seven.addEventListener('click', () => {
    addDigits(7);
})

$eight.addEventListener('click', () => {
    addDigits(8);
})

$nine.addEventListener('click', () => {
    addDigits(9);
})

$reset.addEventListener('click', () => {
    $display__number.textContent = 0;
    dotset = false;
})

const addDigits = (e) => {
    if($display__number.textContent === "0") {
        if (e >= 0 && e < 10) {
            $display__number.textContent = e;
        } else if (e === ".") {
            $display__number.textContent = $display__number.textContent + e;
        }
    } else if(e >= 0 && e < 10 ) {
        $display__number.textContent = $display__number.textContent + e;
    } else if(!Number.isInteger(parseInt($display__number.textContent[$display__number.textContent.length - 1]))) {
        console.log($display__number.textContent[$display__number.textContent.length - 1]);
    } else {
        $display__number.textContent = $display__number.textContent + e;
    } 
    console.log(dotset);
}