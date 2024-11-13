//                                               №1 Задание
let num = 0;

const number = document.querySelector(".number");
const btnPlus = document.querySelector(".plus");
const btnMinus = document.querySelector(".minus");

const btnColor = () => {
	number.innerHTML = num;

	if (num > 0){
		number.style.color = 'green';
	} 
	else if (num < 0){
		number.style.color = 'red';
	} 
	else {
		number.style.color = 'black';
	}
};

btnPlus.addEventListener('click', () => {
	num++;
	btnColor();
});

btnMinus.addEventListener('click', () => {
	if(num > 0){
		number.innerHTML = num;
		num--;
		number.style.color = 'red';
	};
})

btnColor();

//                                               №2 Задание

const block = document.querySelector(".block");
const coordinates = document.querySelector("#coordinates");

block.addEventListener('mousemove', (event) => {
	const mouse = block.getBoundingClientRect();
	const x = event.clientX - mouse.left;
	const y = event.clientY - mouse.top;

	coordinates.textContent = `X: ${x} | Y: ${y}`;
});

//                                               №3 Задание

function updateTrafficLight(color) {
	document.getElementById('red').style.backgroundColor = '#ddd';
	document.getElementById('yellow').style.backgroundColor = '#ddd';
	document.getElementById('green').style.backgroundColor = '#ddd';

	if(color.toLowerCase() === "красный"){
		document.getElementById('red').style.backgroundColor = 'red';
		document.getElementById('message').innerText = "ТОКТО!";
	}else if(color.toLowerCase() === "желтый"){
		document.getElementById('yellow').style.backgroundColor = 'yellow';
		document.getElementById('message').innerText = "КУТУП ТУР!";
	}else if(color.toLowerCase() === "зеленый"){
		document.getElementById('green').style.backgroundColor = 'green';
		document.getElementById('message').innerText = "АЙДААА!!!";
	}else{
		document.getElementById('message').innerText = "Туура жазчы чырагым 💋";
	}
}

let colorInput = prompt("Введите цвет (Красный, Желтый или Зеленый):");
updateTrafficLight(colorInput);

