import { BiSearchAlt } from 'react-icons/bi';
export const Searchbar = ({ onSubmit }) => {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <button type="submit" className="SearchForm-button">
          <BiSearchAlt size={40} />
        </button>

        <input
          className="SearchForm-input"
          type="text"
          name="quary"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
