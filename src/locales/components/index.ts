export const components = {
  main: {
    sort: {
      label: 'Сортировать по:',
      options: [
        { label: 'Сначала высокий рейтинг' },
        { label: 'Сначала низкий рейтинг' },
        { label: 'Сначала новые игры' },
        { label: 'Сначала старые игры' },
      ],
    },
    filter: {
      label: 'Фильтрация по платформам',
      elseOption: 'Все',
    },
    search: {
      label: 'Поиск по названию',
      placeholder: 'Введите название игры',
    },
    cards: {
      rateLabel: 'Рейтинг:',
      dateLabel: 'Дата релиза:',
      pagination: {
        prev: 'Предыдущая',
        next: 'Следующая',
      },
    },
  },
  game: {
    linkSiteLabel: 'Перейти на сайт игры:',
  },
  header: {
    title: 'Платформа игр',
  },
  footer: {
    lawInfo: 'Все права защищены',
  },
};
