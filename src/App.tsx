import React from 'react';
import './App.css';

// Импорт компонентов
import Header from './components/Header/Header';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import SearchBar from './components/SearchBar/SearchBar';
import NewsList from './components/NewsList/NewsList';
import CurrencyBlock from './components/CurrencyBlock/CurrencyBlock';
import Advertisement from './components/Advertisement/Advertisement';
import WeatherBlock from './components/WeatherBlock/WeatherBlock';
import PopularLinks from './components/PopularLinks/PopularLinks';
import MapBlock from './components/MapBlock/MapBlock';
import TVProgram from './components/TVProgram/TVProgram';
import LiveBlock from './components/LiveBlock/LiveBlock';
import ErrorsBlock from './components/ErrorsBlock/ErrorsBlock';

// Импорт моковых данных
import {
  mockNews,
  mockCurrencies,
  mockPopularLinks,
  mockTvPrograms,
  mockBroadcasts,
  mockErrors
} from './mockData';

function App() {
  const navigationItems = [
    { id: 1, label: 'Главная', href: '/' },
    { id: 2, label: 'Новости', href: '/news' },
    { id: 3, label: 'Погода', href: '/weather' },
    { id: 4, label: 'Курсы валют', href: '/currency' },
    { id: 5, label: 'ТВ-программа', href: '/tv' }
  ];

  const handleSearch = (query: string) => {
    console.log('Поиск:', query);
  };

  return (
    <div className="App">
      <header className="main-header">
        {/* Верхняя половина main-header */}
        <div className="main-header__top">
          <div className="two-columns">
            {/* Первый столбец верхней половины */}
            <div className="left-col">
              <Header />
              <NewsList news={mockNews} />
              {/* CurrencyBlock в контейнере с классом для горизонтального отображения */}
              <div className="currency-block-container">
                <CurrencyBlock currencies={mockCurrencies} />
              </div>
            </div>

            {/* Второй столбец верхней половины */}
            <div className="right-col">
              <ErrorsBlock
                imageSrc={mockErrors.imageSrc}
                title={mockErrors.title}
                description={mockErrors.description}
              />
            </div>
          </div>
        </div>

        {/* Нижняя половина main-header */}
        <div className="main-header__bottom">
          <NavigationMenu items={navigationItems} />
          <SearchBar onSearch={handleSearch} />
        </div>
      </header>

      {/* Блок рекламы без изменений */}
      <Advertisement
        title="Форсаж: Хоббс и Шоу"
        subtitle="В кино с 1 августа"
        link="/movies/fast-and-furious"
      />

      {/* Основной контент */}
      <main className="main-content">
        {/* Первый ряд: 3 блока */}
        <div className="row">
          <div className="block">
            <WeatherBlock
              temperature={17}
              forecast="Утром +17, днём +20"
            />
          </div>
          <div className="block">
            <MapBlock />
          </div>
          <div className="block">
            <LiveBlock broadcasts={mockBroadcasts} />
          </div>
        </div>

        {/* Второй ряд: 2 блока */}
        <div className="row">
          <div className="block">
            <PopularLinks links={mockPopularLinks} />
          </div>
          <div className="block">
            <TVProgram programs={mockTvPrograms} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
