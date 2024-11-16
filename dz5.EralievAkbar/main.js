const input = document.getElementById("input");
const createButton = document.getElementById("create_button");
const todoList = document.getElementById("todo_list");

const createTodo = () => {
	if(!input.value.trim()) return alert('напиши что нибудь');

	const div = document.createElement("div");
	const divIn = document.createElement("div");
	const text = document.createElement("h3");
	const btnDelete = document.createElement("button");
	const btnEdit = document.createElement("button");

	div.setAttribute("class", "block_text");
	divIn.setAttribute("class", "block_btn");
	btnDelete.setAttribute("class", "delete_button");
	btnEdit.setAttribute("class", "edit_button");

	btnDelete.textContent = "Удалить";
	btnEdit.textContent = "Изменить";

	text.innerHTML = input.value;

	div.append(text);
	div.append(divIn);
	divIn.append(btnEdit);
	divIn.append(btnDelete);
	todoList.append(div);

	btnEdit.addEventListener("click", function() {
		let newText = prompt("Введите новый текст:", text.textContent);

		if(newText !== null || newText !== ""){
			text.textContent = newText;
		};
	});

	btnDelete.addEventListener("click", function() {
		div.remove();
	});

	input.value = "";
};

createButton.onclick = () => createTodo;
// createButton.addEventListener("click", createTodo);

//                                Обращение к одной кнопке
input.onkeydown = (e) => {
	if (e.key === "Enter") createTodo();
};