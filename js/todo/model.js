'use strict';
// Данные, их обработка

export default class Model {

	constructor() {
		this.tasks = []; // массив для задач
		this.loadFromLocalStorage(); // сработал сразу при загрузке или обновлении стр.

	}

	// Берём данные из localStorage
	loadFromLocalStorage() {
		const data = localStorage.getItem('tasks');

		if (data) { // если есть
			this.tasks = JSON.parse(data); // перезаписыв. массив, иначе он пустой
		}
	}

	// Сохраняем данные в localStorage
	saveToLocalStorage() {
		localStorage.setItem('tasks', JSON.stringify(this.tasks)); // сохр. массив в виде строки
	}

	// Добавление задач в массив
	addTask(text) {

		//  Новый объект с задачей
		const newTask = {
			status: 'active', // статус задачи
			text: text, // сама задача
		};

		this.tasks.push(newTask); // пушим в массив
	}

	// Смена статуса задачи
	doneTask(task) {
		task.status = 'done'; // выполнена
	}

	// Удаление задач
	removeTask(task) {

		const index = this.tasks.indexOf(task); // находим индекс удаляемой задачи
		this.tasks.splice(index, 1); // удаляем элемент с нужным индексом
	}



}
