import { DateTime } from '../node_modules/luxon/src/luxon.js';

let today = document.getElementById('today');
const todayEl = document.getElementById('today');

const displayTime = () => {
  today = DateTime.now();
  todayEl.textContent = today.toLocaleString(DateTime.DATETIME_FULL);
};

const changePage = (link) => {
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    if (section.classList.contains(link)) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  });
};

const pageLinks = document.querySelectorAll('[data-section]');

pageLinks.forEach((link) => {
  link.onclick = (event) => {
    event.preventDefault();
    changePage(link.dataset.section);
  };
});

// Update the current time every second
setInterval(displayTime, 1000);

export default changePage;
