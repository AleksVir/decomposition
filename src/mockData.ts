export const mockNews = [
  {
    id: 1,
    icon: 'src/assets/images/star.png',
    title: 'Главные новости дня: что произошло в мире',
    link: '/news/1'
  },
  {
    id: 2,
    icon: 'src/assets/images/star.png',
    title: 'Экономический рост в Европе: прогнозы экспертов',
    link: '/news/2'
  },
  {
    id: 3,
    icon: 'src/assets/images/star.png',
    title: 'Новые технологии в медицине: прорыв года',
    link: '/news/3'
  }
];

export const mockCurrencies = [
  { id: 1, code: 'USD', rate: 63.52, change: 0.25, symbol: 'USD MOEX' },
  { id: 2, code: 'EUR', rate: 70.15, change: -0.12, symbol: 'EUR MOEX' },
  { id: 3, code: 'OIL', rate: 64.90, change: 1.35, symbol: 'НЕФТЬ' }
];

export const mockTvPrograms = [
  { id: 1, time: '18:00', title: 'Вечерние новости', channel: 'Первый канал' },
  { id: 2, time: '19:00', title: 'Сериал: Тайны следствия', channel: 'Россия 1' },
  { id: 3, time: '20:30', title: 'КВН', channel: 'Первый канал' }
];

export const mockBroadcasts = [
  { id: 1, title: 'Прямой эфир: Новости дня', channel: 'Первый канал' },
  { id: 2, title: 'Спорт: Футбол — Лига Чемпионов', channel: 'Матч ТВ' },
  { id: 3, title: 'Документальный фильм: Дикая природа', channel: 'Discovery' }
];

export const mockPopularLinks = [
  {
    id: 1,
    title: 'Недвижимость',
    href: '/realty',
    description: 'О сталинках'
  },
  {
    id: 2,
    title: 'Маркет',
    href: '/market',
    description: 'Люстры и светильники'
  },
  {
    id: 3,
    title: 'Авто.ру',
    href: '/auto',
    description: 'Привод 4x4 до 500 000'
  }
];

// Новые моковые данные для ErrorsBlock
export const mockErrors = {
  imageSrc: 'src/assets/images/star.svg',
  title: 'Произошла ошибка',
  description: 'Не удалось загрузить данные. Проверьте подключение к интернету и попробуйте снова.'
};
