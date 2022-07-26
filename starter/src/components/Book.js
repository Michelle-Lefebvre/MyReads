import { useState, useEffect } from 'react';
import * as BooksAPI from '../BooksAPI';

const Book = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBook();
  }, []);
  return (
    <div>
      <ol className='books-grid' style={{ 'list-style-type': 'none' }}>
        {books.map((book) => (
          <li key={book.id}>
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
                    <option value='currentlyReading'>Currently Reading</option>
                    <option value='wantToRead'>Want to Read</option>
                    <option value='read'>Read</option>
                    <option value='none'>None</option>
                  </select>
                </div>
              </div>
              <div className='book-title'>{book.title}</div>
              <div className='book-authors'>{book.authors.join(', ')}</div>
              <small>{book.shelf}</small>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Book;
