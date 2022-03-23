import './style.css';
import List from './AddRemove.js';

const tasks = new List();

document.querySelector('#add-task').addEventListener('submit', (e) => {
  e.preventDefault();
  const activity = e.target.elements.activity.value;
  tasks.addActivity(activity);
  e.target.reset();
});
