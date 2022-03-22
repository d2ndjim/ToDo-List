import './style.css';
import options from './images/options.svg';
import enter from './images/enter.svg';
import refresh from './images/refresh.svg';

const tasks = [
  {
    info: 'Wash Dishes',
    completed: false,
    index: 0,
  },
  {
    info: 'Learn WebPack',
    completed: false,
    index: 1,
  },
  {
    info: 'Complete ToDo List Project',
    completed: false,
    index: 2,
  },
];

const taskSection = document.querySelector('.tasks');
const enterImg = document.querySelector('.enter');
const refreshImg = document.querySelector('.refresh');

enterImg.src = enter;
refreshImg.src = refresh;

const populateTask = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    taskSection.innerHTML += `
      <div class="task">
        <input type="checkbox">
        <input type="text" value="${tasks[i].info}">
        <img class="options" src="${options}" alt="">
      </div>
    `;
  }
};

populateTask();
