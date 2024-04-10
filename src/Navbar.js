const Navbar = () => {
  return (
    <div id="Navbar">
      <nav id="navbar">
        {/* Logo */}
        <div id="logo">
          <a href="./App.js">
            <img src="/Assets/LiteraryLane.png" height="100%" />
          </a>
        </div>

        {/* Search Bar */}
        <div id="searchBar">
          <input type="text" id="searchInput" />
          <button id="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {/* Recommended */}
        <a href="#suggestionsSection" id="recommended">
          RECOMMENDED
        </a>

        {/* Add to Cart */}
        <a href="./cart.js" id="addToCart">
          <i class="fa-solid fa-cart-shopping"></i>
          Cart
        </a>

        {/* Accounts */}
        <a href="">
          <i class="fa-solid fa-user" id="accounts"></i>
        </a>
      </nav>

      {/* Scroll Progress */}
      <div id="scrollProgress">
        <div id="scrollProgress1"></div>
        <div id="scrollProgress2"></div>
      </div>
    </div>
  );
};

export default Navbar;
