const Navbar = () => {
  return (
    <div id="Navbar">
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
    </div>
  );
};

export default Navbar;
