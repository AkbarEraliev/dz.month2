//                                                №1 Задание
console.log('№1 Задание');

function min(a, b){
	if(a > b){
		console.log("Минимальное значение: " + b);
	}else{
		console.log("Минимальное значение: " + a);
	}
}
min(10, 5);

//                                                №2 Задание
console.log('№2 Задание');

function str(input){
	console.log("Длина строки: " + input.length);
}

var userInput = prompt("Введите строку:");

str(userInput);

//                                                №3 Задание
console.log('№3 Задание');

function calculator(num1, num2, operator){
	switch(operator){
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		case '*':
			return num1 * num2;
		case '/':
			if(num2 === 0){
				return "На 0 не делится";
			}
			return num1 / num2;
		default:
			return "Пиши нормально, калькулятор сломаешь";
	}
}

let num1 = 34;
let num2 = 0;

console.log(calculator(num1, num2, "%"));    //    Для примера 
console.log(calculator(num1, num2, "+"));
console.log(calculator(num1, num2, "-"));
console.log(calculator(num1, num2, "*"));
console.log(calculator(num1, num2, "/"));


