// Discovra front-end prototype interactions. No backend or account storage is connected.
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// const projectSearch = document.querySelector('#project-search');
// const categoryFilter = document.querySelector('#category-filter');
// const statusFilter = document.querySelector('#status-filter');
// const projectCards = [...document.querySelectorAll('.searchable-card')];
// const emptyState = document.querySelector('#empty-state');

// function filterProjects() {
//   if (!projectCards.length) return;
//   const query = (projectSearch?.value || '').trim().toLowerCase();
//   const category = categoryFilter?.value || 'all';
//   const status = statusFilter?.value || 'all';
//   let visible = 0;
//   projectCards.forEach(card => {
//     const matchesQuery = `${card.dataset.name} ${card.dataset.tech} ${card.textContent}`.toLowerCase().includes(query);
//     const matchesCategory = category === 'all' || card.dataset.category === category;
//     const matchesStatus = status === 'all' || card.dataset.status === status;
//     const show = matchesQuery && matchesCategory && matchesStatus;
//     card.hidden = !show;
//     if (show) visible++;
//   });
//   if (emptyState) emptyState.hidden = visible > 0;
// }
// [projectSearch, categoryFilter, statusFilter].forEach(el => el?.addEventListener('input', filterProjects));
// [projectSearch, categoryFilter, statusFilter].forEach(el => el?.addEventListener('change', filterProjects));

// const studentSearch = document.querySelector('#student-search');
// const skillFilter = document.querySelector('#skill-filter');
// const studentCards = [...document.querySelectorAll('.searchable-student')];
// const studentEmptyState = document.querySelector('#student-empty-state');
// function filterStudents() {
//   if (!studentCards.length) return;
//   const query = (studentSearch?.value || '').trim().toLowerCase();
//   const skill = skillFilter?.value || 'all';
//   let visible = 0;
//   studentCards.forEach(card => {
//     const text = `${card.dataset.name} ${card.textContent}`.toLowerCase();
//     const matchesQuery = text.includes(query);
//     const matchesSkill = skill === 'all' || text.includes(skill.toLowerCase());
//     const show = matchesQuery && matchesSkill;
//     card.hidden = !show;
//     if (show) visible++;
//   });
//   if (studentEmptyState) studentEmptyState.hidden = visible > 0;
// }
// [studentSearch, skillFilter].forEach(el => el?.addEventListener('input', filterStudents));
// [studentSearch, skillFilter].forEach(el => el?.addEventListener('change', filterStudents));

// document.querySelectorAll('.demo-form').forEach(form => {
//   form.addEventListener('submit', event => {
//     event.preventDefault();
//     const message = form.querySelector('.form-message');
//     if (message) message.textContent = 'This is a front-end demo. Account creation and login will work after a backend is connected.';
//   });
// });
