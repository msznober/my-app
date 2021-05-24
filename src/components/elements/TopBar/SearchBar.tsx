import { FC } from 'react';
import './TopBar.css';

const SearchBar: FC = () => {
  return (
    <div className="search-container">
      <input type='text' placeholder='Search Legalcluster' className='searchInput'
      />
      <img src="../../../media//icons/search.svg" alt="search" className="searchIcon" />
    </div>
  );
};
export default SearchBar;