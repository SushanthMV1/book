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
            <p>Author&#160;&#160;&#160;&#160;&#160; : {book.author}</p>
            <p>Category : {book.category}</p>
            <div className="suggestionCardBottom">
              <div className="bookPrice">
                <div className="bookPriceTitle">Price:</div>
                <div className="price">₹ {book.price}</div>
              </div>
              <button>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionFrame;
