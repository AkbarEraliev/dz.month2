const input = document.querySelector("#input");
const createBtn = document.querySelector("#create_button");
const bigBlock_list = document.querySelector(".bigBlock_list");

const createList = () => {
	if(!input.value.trim()) return alert("Напиши что нибудь");

	const block_list = document.createElement("div");
	const block_btn = document.createElement("div")
	const text_content = document.createElement("h3");
	const btn_reverse = document.createElement("button");
	const img_reverse = document.createElement("img");
	const block_buttons = document.createElement("div");
	const btn_delete = document.createElement("button");
	const btn_edit = document.createElement("button");
	const bigBtnBlock = document.createElement("div");

	img_reverse.src = "image/swap.svg";
	img_reverse.alt = "reverse button";
	btn_delete.textContent = "Удалить";
	btn_edit.textContent = "Изменить";

	block_btn.setAttribute("class", "block_btn")
	block_list.setAttribute("class", "block_list");
	text_content.setAttribute("class", "text_content");
	bigBtnBlock.setAttribute("class", "bigBtnBlock");

	btn_reverse.setAttribute("class", "btn_reverse");
	img_reverse.setAttribute("class", "img_reverse");

	block_buttons.setAttribute("class", "block_buttons")
	btn_delete.setAttribute("class", "delete_button");
	btn_edit.setAttribute("class", "edit_button");

	let reversedText = [];
	const inputTextArray = input.value.split('');
	inputTextArray.forEach(char => {
		reversedText.unshift(char);
	});

	text_content.innerHTML = reversedText.join('');

	btn_reverse.appendChild(img_reverse);

	bigBtnBlock.append(block_buttons, block_btn);
	block_buttons.append(btn_delete, btn_edit);
	bigBlock_list.append(block_list);
	block_btn.append(btn_reverse);
	block_list.append(text_content,bigBtnBlock);

	btn_delete.onclick = () => {
		block_list.remove();
	};

	btn_edit.addEventListener("click", function() {
		let newText = prompt("Введите новый текст:", block_list.text_content);

		if(newText !== null || newText !== ""){
			block_list.text_content = newText;
		};
	});

	btn_reverse.onclick = () => {
		let newReversedText = [];
		const currentText = text_content.innerHTML.split('');
		currentText.forEach(char => {
			newReversedText.unshift(char);
		});
		text_content.innerHTML = newReversedText.join('');
	};

	bigBlock_list.prepend(block_list);
	input.value = "";
}

createBtn.onclick = () => createList(); 

input.onkeydown = (e) => {
	if(e.key === "Enter") createList();
};


