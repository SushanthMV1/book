import { useState, useEffect } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import data from "./DB/books.json";
import Reviews from "./Reviews";
import SuggestionFrame from "./SuggestionFrame";

function App() {
  // Fetching the books data from json
  const [books, setBooks] = useState(null);
  useEffect(() => {
    console.log(data);
    setBooks(data.books);
  });

  //Scrolling Effects
  window.addEventListener("scroll", () => {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercent = (window.scrollY / scrollable) * 100;

    //Adding shadow to Navbar
    let headerStyle = document.getElementById("header").style;
    if (scrollPercent)
      headerStyle.boxShadow = "0rem 0.5rem 0.5rem rgba(23, 37, 42, 0.7)";
    else headerStyle.boxShadow = "none";

    //Scroll Progress
    let scrollProgress1Style = document.getElementById("scrollProgress1").style;
    let scrollProgress2Style = document.getElementById("scrollProgress2").style;
    let scrollProgressStyle = document.getElementById("scrollProgress").style;
    let noScrollPercent = 100 - scrollPercent;

    scrollProgress1Style.width = scrollPercent + "%";
    noScrollPercent = scrollPercent > 100 ? 0 : noScrollPercent;
    scrollProgress2Style.width = noScrollPercent + "%";

    if (scrollPercent) scrollProgressStyle.opacity = "1";
    else scrollProgressStyle.opacity = "0";
  });

  //Returing HTML
  return (
    <div className="App">
      <header id="header">
        <Navbar />
      </header>

      {/* Hero */}
      <Hero />

      {/* Suggestions */}
      <div id="suggestionsSection">
        {/* BestSellers */}
        {books && <SuggestionFrame title="Best Sellers" books={books} />}

        {/* Recommendations */}
        {books && <SuggestionFrame title="Recommendations" books={books} />}

        {/* Latest Offerings */}
        {books && <SuggestionFrame title="Latest Offerings" books={books} />}
      </div>

      {/* Review Scetion */}
      <div id="reviewSection">
        {/* Reading Reviews */}
        <div id="reviewRead">
          <div id="reviewReadHeading" className="suggestionHeading">
            Testimonials
          </div>
          <Reviews />
        </div>

        {/* Writing Reviews */}
        <div id="reviewWrite">
          <form action=""></form>
        </div>
      </div>

      {/* Back To Top */}
      <a href="#top" id="backToTop">
        <i className="fa-solid fa-angle-up"></i>
      </a>
    </div>
  );
}

export default App;
