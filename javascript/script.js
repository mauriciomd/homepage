function openMenu() {
  const menu = document.getElementsByTagName('nav')[0];
  const menuButton = document.getElementById('menu-icon');

  menuButton.style.visibility = 'hidden';

  menu.style.display = 'block';
  menu.setAttribute('class', 'show-menu');
}

function closeMenu() {
  const menu = document.getElementsByTagName('nav')[0];
  const menuButton = document.getElementById('menu-icon');

  menu.removeAttribute('class');
  menuButton.style.visibility = 'visible';
}

function menuEventListener(event) {
  const nav = document.getElementsByTagName('nav')[0];
  let isOutsideFromMenu = true;

  for (let item of event.path) {
    if (item === nav) {
      isOutsideFromMenu = false;
    }
  }

  if (isOutsideFromMenu) {
    closeMenu();
    isOutsideFromMenu = false;
  }
}

function addGridRowEffect(event) {
  const projects = document.querySelectorAll('.project-item');

  for (const project of projects) {
    const bounding = project.getBoundingClientRect();
    const clientHeight = document.documentElement.clientHeight;
    const boundWithTreshold = bounding.top + 0.05 * bounding.height;

    if (boundWithTreshold < clientHeight) {
      project.setAttribute('class', 'project-item showItem');
    }

    if (bounding.top + bounding.height < 0 || boundWithTreshold >= clientHeight) {
      project.setAttribute('class', 'project-item');
    }
  }
}

document.addEventListener('mouseup', menuEventListener);
document.addEventListener('touchstart', menuEventListener);
document.addEventListener('scroll', addGridRowEffect);
