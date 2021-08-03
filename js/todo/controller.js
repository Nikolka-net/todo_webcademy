'use strict';

// Выстраиваем логику обработки данных из model

// Импорт классов
import Model from './model.js';

const model = new Model();

model.addTask('Заверстать стартовый шаблон'); // передаём задачу
model.addTask('Написать скрипт');
model.addTask('Записать урок');


// model.doneTask(model.tasks[1]); // добавл. ссылку на объект в метод для смены статуса


model.removeTask(model.tasks[0]); // удаляем задачу
console.log('model: ', model);

model.saveToLocalStorage();
