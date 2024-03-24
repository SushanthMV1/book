import { useState } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Suggestions from "./suggestions";

function App() {
  // Fetching the books data from json
  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetch()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBooks(data);
      });
  }, []);

  //Returing HTML
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      {/* Hero */}
      <Hero />

      {/* Suggestions */}
      <div id="suggestionsSection">
        {/* BestSellers */}
        <Suggestions title="Best Sellers" books={books} />

        {/* Recommendations */}
        <Suggestions title="Recommendations" books={books} />

        {/* Latest Offerings */}
        <Suggestions title="Latest Offerings" books={books} />
      </div>

      {/* Review Scetion */}
      <div id="reviewSection">
        {/* Reading Reviews */}
        <div id="reviewRead">
          <div id="reviewReadHeading" className="suggestionHeading">
            Testimonials
          </div>
          <div id="reviews">
            <div className="review">
              <div className="reviewTop">
                <div className="reviewImg"></div>
                <div className="reviewTopContent">
                  <div className="reviewName"></div>
                  <div className="reviewRating"></div>
                </div>
              </div>
              <div className="reviewBottom">
                <div className="reviewText"></div>
                <div className="reviewSymbol">''</div>
              </div>
            </div>
          </div>
        </div>

        {/* Writing Reviews */}
        <div id="reviewWrite">
          <form action=""></form>
        </div>
      </div>

      <footer></footer>
    </div>
  );
}

export default App;
