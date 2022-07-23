import { useState } from 'react';

const BookList = ({ books }) => {
  const [query, setQuery] = useState('');

  const updateQuery = (query) => {
    setQuery(query.trim());
  };

  // eslint-disable-next-line no-unused-vars
  const clearQuery = () => {
    updateQuery('');
  };

  const showingBooks =
    query === ''
      ? books
      : books.filter((b) => b.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className='list-books-content'>
      All Books List
      <div className='bookshelf-books'>
        <ol className='books-grid' style={{ 'list-style-type': 'none' }}>
          {showingBooks.map((book) => (
            <li>
              <div className='book'>
                <div className='book-top'>
                  <div
                    className='book-cover'
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks.thumbnail})`,
                    }}
                  ></div>
                  <div className='book-shelf-changer'>
                    <select>
                      <option value='none' disabled>
                        Move to...
                      </option>
                      <option value='currentlyReading'>
                        Currently Reading
                      </option>
                      <option value='wantToRead'>Want to Read</option>
                      <option value='read'>Read</option>
                      <option value='none'>None</option>
                    </select>
                  </div>
                </div>
                <div className='book-title'>{book.title}</div>
                <div className='book-authors'>{book.authors.join(', ')}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookList;
