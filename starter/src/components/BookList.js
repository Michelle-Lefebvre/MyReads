import { useState } from 'react';
import Book from './Book';

const BookList = ({ books }) => {
  const [query, setQuery] = useState('');

  const updateQuery = (query) => {
    setQuery(query.trim());
  };

  // eslint-disable-next-line no-unused-vars
  const clearQuery = () => {
    updateQuery('');
  };

  // eslint-disable-next-line no-unused-vars
  const showingBooks =
    query === ''
      ? books
      : books.filter((b) => b.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className='list-books-content'>
      All Books List
      <div className='bookshelf-books'>
        <Book shelf={books.shelf} />
      </div>
    </div>
  );
};

export default BookList;
