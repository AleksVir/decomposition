// components/SearchBar/SearchBar.tsx
import React from 'react';
import sakuraIcon from '../../assets/images/sakura.svg';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector('input') as HTMLInputElement;
    onSearch(input.value);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-icon">
        <img
          src={sakuraIcon}
          alt="Сакура"
          width="20"
          height="20"
        />
      </div>
      <input
        type="text"
        placeholder="Поищем печеньки? "
        className="search-input"
      />
      <button type="submit">Найти</button>
    </form>
  );
};

export default SearchBar;
