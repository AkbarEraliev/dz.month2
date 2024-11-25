//                                      МАШИНЫ
class Cars {
	constructor(model, color, wheels) {
		 this.model = model;
		 this.color = color;
		 this.wheels = wheels;
	}

	start() {
		alert(`${this.model} заведена.`);
	}
}

class SportsCar extends Cars {
	constructor(model, color, wheels, maxSpeed) {
		 super(model, color, wheels);
		 this.maxSpeed = maxSpeed;
	}

	accelerate() {
		alert(`${this.model} разгоняется до ${this.maxSpeed} км/ч!`);
	}
}

class Truck extends Cars {
	constructor(model, color, wheels, cargoCapacity) {
		 super(model, color, wheels);
		 this.cargoCapacity = cargoCapacity;
	}

	loadCargo() {
		alert(`${this.model} загружает ${this.cargoCapacity} тонн груза.`);
	}
}

class ElectricCar extends Cars {
	constructor(model, color, wheels, batteryCapacity) {
		 super(model, color, wheels);
		 this.batteryCapacity = batteryCapacity;
	}

	charge() {
		alert(`${this.model} заряжена на ${this.batteryCapacity} %.`);
	}
}

const sportsCar = new SportsCar('Mers', 'red', 4, 350);
const truck = new Truck('Traktor', 'blue', 6, 15);
const electricCar = new ElectricCar('Tesla', 'black', 6, 87);

document.getElementById('start-sportsCar').addEventListener('click', () => {
	sportsCar.start();
	sportsCar.accelerate();
});

document.getElementById('start-truck').addEventListener('click', () => {
	truck.start();
	truck.loadCargo();
});

document.getElementById('start-electricCar').addEventListener('click', () => {
	electricCar.start();
	electricCar.charge();
});

//                                           CВЕТАФОР
class TrafficLight {
	constructor(selector) {
		 this.trafficLight = document.querySelector(selector);
		 this.redLight = this.trafficLight.querySelector('#red');
		 this.yellowLight = this.trafficLight.querySelector('#yellow');
		 this.greenLight = this.trafficLight.querySelector('#green');
	}

	turnRed() {
		 this.redLight.classList.add('red');
		 this.yellowLight.classList.remove('yellow');
		 this.greenLight.classList.remove('green');
	}

	turnYellow() {
		 this.redLight.classList.remove('red');
		 this.yellowLight.classList.add('yellow');
		 this.greenLight.classList.remove('green');
	}

	turnGreen() {
		 this.redLight.classList.remove('red');
		 this.yellowLight.classList.remove('yellow');
		 this.greenLight.classList.add('green');
	}

	turnOff() {
		 this.redLight.classList.remove('red');
		 this.yellowLight.classList.remove('yellow');
		 this.greenLight.classList.remove('green');
	}

	start() {
		 let currentLight = 'red';

		 this.intervalId = setInterval(() => {
			  switch (currentLight) {
					case 'red':
						 this.turnGreen();
						 currentLight = 'green';
						 break;
					case 'green':
						 this.turnYellow();
						 currentLight = 'yellow';
						 break;
					case 'yellow':
						 this.turnRed();
						 currentLight = 'red';
						 break;
			  }
		 }, 1000);
	}

	stop() {
		 clearInterval(this.intervalId);
		 this.turnOff();
	}
}

const trafficLight = new TrafficLight('#traffic-light');

const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button')

startButton.addEventListener('click', () => {
	trafficLight.start();
});

stopButton.addEventListener('click', () => {
	trafficLight.stop();
})


