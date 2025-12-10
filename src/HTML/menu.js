// ...new file...
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const menuBtn = document.querySelector('.menuMobile'); // hamburger/menu button
  const closeBtn = document.querySelector('.mobileClose'); // optional close button inside sidebar
  const main = document.querySelector('.main-content');

  // create overlay once
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.style.display = 'none';
  document.body.appendChild(overlay);

  function openSidebar() {
    if (!sidebar) return;
    sidebar.classList.add('open');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove('open');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }
  if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (sidebar.classList.contains('open')) closeSidebar();
      else openSidebar();
    });
  }
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);
  // optional: clicking main content closes sidebar on mobile
  if (main) {
    main.addEventListener('click', () => {
      if (sidebar && sidebar.classList.contains('open')) closeSidebar();
    });
  }
});