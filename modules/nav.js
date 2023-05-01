import { DateTime } from 'luxon';

let today = document.getElementById('today');
const todayEl = document.getElementById('today');

today = DateTime.now();

function displayTime() {
  today = DateTime.now();
  todayEl.textContent = today.toLocaleString(DateTime.DATETIME_FULL);
}

function changePage(link) {
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    if (section.classList.contains(link)) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  });
}

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
