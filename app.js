const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menu && nav) {
  menu.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

try {
  const saved = JSON.parse(
    localStorage.getItem('hawkCmsContent') || '{}'
  );

  if (saved.title) {
    const heading = document.querySelector('.hero h1');
    if (heading) {
      heading.innerHTML = saved.title.replace(/\n/g, '<br>');
    }
  }

  if (saved.accent) {
    document.documentElement.style.setProperty(
      '--accent',
      saved.accent
    );
  }

  if (saved.club) {
    document.querySelectorAll('.brand span:nth-child(2)')
      .forEach(element => {
        element.firstChild.textContent = saved.club;
      });
  }
} catch (error) {
  console.warn('Не удалось загрузить настройки', error);
}
