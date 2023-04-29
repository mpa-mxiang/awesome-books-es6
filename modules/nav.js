const today = document.getElementById('today');
today.textContent = DateTime.now();

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