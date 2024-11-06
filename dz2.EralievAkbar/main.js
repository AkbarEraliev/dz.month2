// №1 Задание
var numbers = [10, 20, 30, 50, 235, 3000];
var firstNumber = []

for (var num of numbers){
	var firstNum = String(num)[0];
	if( firstNum === '1' || firstNum === '2' || firstNum === '5'){
		firstNumber.push(num);
	}
}

console.log('№1 Задание');
console.log(firstNumber);

//№2 Задание
console.log('№2 Задание');

for(var i = 20; i > 0 -1; i--){
	console.log(i);
}

//№3 Задание
var svetofor = {
	red: "Stop",
	yellow: "Wait",
	green: "Go",
};
var color = prompt("Введите цвет светофора").toLowerCase()

if(color === 'красный'){
	alert(svetofor.red);
}else if(color === 'желтый'){
	alert(svetofor.yellow);
}else if(color === 'зеленый'){
	alert(svetofor.green)
}else{
	alert("Суранам туура жазчы Жаным 💋");
}
