const SuggestionFrame = ({ title, books }) => {
  console.log(books);
  return (
    <div className="suggestions">
      <div className="suggestionHeading">{title}</div>
      <div className="suggestionsScrollBar">
        {books.map((book) => (
          <div className="suggestionCard" key={book.id}>
            <img src={book.image} className="suggestionImg" />
            <h2>{book.Title}</h2>
            <p>written by {book.author}</p>
            <p>{book.price}</p>
            <p>{book.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionFrame;
