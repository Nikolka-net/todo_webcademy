'use strict';

// Выстраиваем логику обработки данных из model

// Импорт классов
import Model from './model.js';
import View from './view.js';

const model = new Model();
const view = new View(model.tasks); // созд. и перед. список задач

// 1. Добавление задачи
view.elements.form.addEventListener('submit', function (e) { // слушаем событие в форме
	e.preventDefault(); // отмена обновления стр. при отправке формы

	if (view.elements.input.value !== '') { // если поле не пустое

		const newTask = model.addTask(view.elements.input.value); // добавл. задачу в массив и в переменную
		view.renderTask(newTask); // отрисовка новой задачи
		view.clearInput(); // очистка инпута
	}
})

// 2. Нажали на чекбокс или кнопку "удалить"
view.elements.tasksList.addEventListener('click', function (e) {

	// Проверка клика "по чекбоксу"
	if (e.target.getAttribute('type') === 'checkbox') {
		const id = e.target.closest('.todo-item').dataset.id; // выходим на li, получ. id
		const task = model.findTask(id); // запис. в перем. задачу, найденную по id
		model.changeStatus(task); // меняем статус в массиве

		view.changeStatus(task); // отрисовываем, зачёркиваем. Статус уже поменялся в model
	}

	// Удаление задач
	if (e.target.hasAttribute('data-delete')) {
		const id = e.target.closest('.todo-item').dataset.id; // выходим на li, получ. id
		const task = model.findTask(id); // запис. в перем. задачу, найденную по id
		model.removeTask(task); // удаляем задачу в массиве в localeStorage
		view.removeTask(task); // удаляем на стр.
	}
})
