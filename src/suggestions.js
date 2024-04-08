const Suggestions = ({ title, books }) => {
  return (
    <div className="suggestions">
      <div className="suggestionHeading">{title}</div>
      <div className="suggestionsScrollBar">
        {books &&
          books.map((book) => (
            <div className="suggestionCard" key={book.id}>
              <img src={book.image} />
              <h2>{book.title}</h2>
              <p>written by {book.author}</p>
              <p>{book.price}</p>
              <p>{book.category}</p>
              <p>{book.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Suggestions;
