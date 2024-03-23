function App() {
  return (
    <div className="App">
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
        <a href="" id="recommended">
          Recommended
        </a>

        {/* Accounts */}
        <a href="" id="accounts">
          Accounts
        </a>
      </nav>

      {/* Hero */}
      <div id="Hero"></div>
    </div>
  );
}

export default App;
