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

		let id = 1; // свой идентифи-р для каждой задачи

		if (this.tasks.length > 0) { // если массив не пустой, есть задачи

			id = this.tasks[this.tasks.length - 1]['id'] + 1; // добавл. id = индекс последнего + 1
		}

		//  Новый объект с задачей
		const newTask = {
			id: id,
			status: 'active', // статус задачи
			text: text, // сама задача
		};

		this.tasks.push(newTask); // пушим в массив
		this.saveToLocalStorage(); // сохр. в localeStorage

		// Возвращаем объект(новую задачу) для отрисовки
		return newTask;
	}

	// Находим задачу по id
	findTask(id) {

		const task = this.tasks.find(function(task) { // перебор задач, возвр. нужную задачу
			if (task.id === parseInt(id)) { // сравнивает число с числом, id
				return true;
			}
		})

		return task; // возвр. задачу, ко-ю нашёл
	}

	// Смена статуса задачи
	changeStatus(task) {

		if (task.status === 'active') {
			task.status = 'done';
		} else {
			task.status = 'active';

		}

		this.saveToLocalStorage();
	}

	// Удаление задач
	removeTask(task) {

		const index = this.tasks.indexOf(task); // находим индекс удаляемой задачи
		this.tasks.splice(index, 1); // удаляем элемент с нужным индексом
		this.saveToLocalStorage();
	}



}
