

function exponentiation( firstNum, secNum = 1){
    if(isNaN(firstNum) || isNaN(secNum)) {
        return alert('Error')
    }
    else {
        return alert(Math.pow(firstNum,secNum) )
    }

}


let firstNum = +prompt('Введите число');
let secNum = +prompt('В какую степень вы бы хотели возвести это число?');




let result = exponentiation(firstNum,secNum);
