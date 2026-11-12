const fields = ['club', 'title', 'accent'];

const defaults = {
  club: 'АВАНГАРД',
  title: 'ВМЕСТЕ\nК ПОБЕДЕ',
  accent: '#e12632'
};

function loadSettings() {
  let data = { ...defaults };

  try {
    data = {
      ...data,
      ...JSON.parse(
        localStorage.getItem('hawkCmsContent') || '{}'
      )
    };
  } catch (error) {
    console.warn('Ошибка чтения настроек', error);
  }

  fields.forEach(key => {
    document.getElementById(key).value =
      data[key] || defaults[key];
  });
}

document.getElementById('save').addEventListener('click', () => {
  const data = {};

  fields.forEach(key => {
    data[key] = document.getElementById(key).value;
  });

  localStorage.setItem(
    'hawkCmsContent',
    JSON.stringify(data)
  );

  document.getElementById('status').textContent =
    'Изменения сохранены. Открой главную страницу в этом браузере.';
});

document.getElementById('reset').addEventListener('click', () => {
  localStorage.removeItem('hawkCmsContent');

  loadSettings();

  document.getElementById('status').textContent =
    'Настройки сброшены.';
});

loadSettings();
