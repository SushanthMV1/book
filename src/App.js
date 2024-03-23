import Hero from "./Hero";

function App() {
  return (
    <div className="App">
      <header>
        {/* Navigation bar */}
        <nav id="navbar">
          {/* Logo */}
          <div className="logo">
            <a href="#Hero">Insert Logo</a>
          </div>

          {/* Search Bar */}
          <div className="searchBar">
            <input type="text" id="searchBar" />
            <input type="submit" id="submit" value={""} />
          </div>
          {/* Recommended */}
          <a href="#suggestionsSection" id="recommended">
            Recommended
          </a>

          {/* Accounts */}
          <a href="" id="accounts">
            Accounts
          </a>
        </nav>
      </header>

      {/* Hero */}
      <Hero />

      {/* Suggestions */}
      <div id="suggestionsSection">
        {/* BestSellers */}
        <div className="suggestions" id="bestSellers">
          <div className="suggestionHeading">Best Sellers</div>
          <div className="suggestionsScrollBar">
            <div className="suggestionCard"></div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="suggestions" id="recommendations">
          <div className="suggestionHeading">Recommendations</div>
          <div className="suggestionsScrollBar"></div>
        </div>

        {/* Latest Offerings */}
        <div className="suggestions" id="latestOfferings">
          <div className="suggestionHeading">Latest Offerings</div>
          <div className="suggestionsScrollBar"></div>
        </div>
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
