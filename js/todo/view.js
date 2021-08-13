'use strict';

export default class View {
	constructor(tasks) { // перед. список задач

		// Перебор и отрисовка задач
		tasks.forEach((task) => {
			this.renderTask(task);
		});
	}

	// Получаем элементы
	elements = {
		input: document.getElementById('newTask'),
		form: document.getElementById('form'),
		tasksList: document.getElementById('tasksList'),
	};

	// Отрисовка задач
	renderTask(taskObject) {

		const completeClass = taskObject.status === 'done' ? 'completed' : ''; // Класс для зачёркивания выполненной задачи
		const checked = taskObject.status === 'done' ? 'checked' : ''; // Для чекбокса

		// Переменная для вставки новой задачи
		const taskHTML = `
		<li class="todo-item" data-id="${taskObject.id}">
		  <label class="todo-item-label">
		  	<input class="checkbox" type="checkbox" ${checked}/>
		  	<span class="${completeClass}" data-task>${taskObject.text}</span>
		  	<button class="btn btn-secondary btn-sm" data-delete>Удалить</button>
		  </label>
	  </li>
		`
		this.elements.tasksList.insertAdjacentHTML('beforeend', taskHTML); // вставка задачи в ul
	}

	// Очистка инпута
	clearInput() {
		this.elements.input.value = '';
	}

	// Отрисовка выполненной задачи, зачёркиваем
	changeStatus(taskObject) {

		// Находим среди всех задач нужную по id
		const taskElement = this.elements.tasksList.querySelector(`[data-id="${taskObject.id}"]`);

		const taskTextEl = taskElement.querySelector('[data-task]'); // получ. эл. с задачей

		if (taskObject.status === 'done') {
			taskTextEl.classList.add('completed');
		} else {
			taskTextEl.classList.remove('completed');

		}
	}

	// Удаление задачи на странице
	removeTask(taskObject) {
		// Находим среди всех задач нужную по id
		const taskElement = this.elements.tasksList.querySelector(`[data-id="${taskObject.id}"]`);
		taskElement.remove();
	}
}
